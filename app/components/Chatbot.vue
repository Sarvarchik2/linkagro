<template>
  <div class="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
    <div class="space-y-4">
      <!-- Chat Messages -->
      <div class="h-96 overflow-y-auto space-y-4 mb-4 pr-2 custom-scrollbar">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="[
            'flex',
            message.type === 'user' ? 'justify-end' : 'justify-start'
          ]"
        >
          <div
            :class="[
              'max-w-[80%] rounded-2xl px-4 py-3',
              message.type === 'user'
                ? 'bg-accent text-primary-dark'
                : 'bg-white/10 text-gray-300'
            ]"
          >
            <p class="text-sm whitespace-pre-wrap">{{ message.text }}</p>
            <p class="text-xs mt-1 opacity-70">
              {{ message.type === 'user' ? 'Вы' : 'LINKAGRO' }}
            </p>
          </div>
        </div>
        
        <div v-if="isLoading" class="flex justify-start">
          <div class="bg-white/10 rounded-2xl px-4 py-3">
            <div class="flex gap-2">
              <div class="w-2 h-2 bg-accent rounded-full animate-bounce" style="animation-delay: 0s"></div>
              <div class="w-2 h-2 bg-accent rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
              <div class="w-2 h-2 bg-accent rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Suggested Questions -->
      <div v-if="messages.length === 0" class="space-y-2 mb-4">
        <p class="text-sm text-gray-400 mb-3">Попробуйте задать вопрос:</p>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(suggestion, index) in suggestedQuestions"
            :key="index"
            @click="sendMessage(suggestion)"
            class="px-4 py-2 bg-white/5 hover:bg-white/10 text-sm text-gray-300 rounded-lg border border-white/10 transition-all hover:border-accent/50"
          >
            {{ suggestion }}
          </button>
        </div>
      </div>

      <!-- Input Area -->
      <div class="flex gap-3">
        <input
          v-model="inputMessage"
          @keyup.enter="handleSend"
          type="text"
          placeholder="Задайте вопрос о LINKAGRO..."
          class="flex-1 px-4 py-3 bg-primary-dark border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent"
        />
        <button
          @click="handleSend"
          :disabled="!inputMessage.trim() || isLoading"
          class="px-6 py-3 bg-accent hover:bg-accent-hover text-primary-dark font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Send class="w-5 h-5" />
          Отправить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Send } from 'lucide-vue-next';

const messages = ref([]);
const inputMessage = ref('');
const isLoading = ref(false);

const suggestedQuestions = [
  'Что делает ваш проект?',
  'Для кого предназначен этот продукт?',
  'Как Ваш проект использует AI?',
  'Какие технологии вы используете?'
];

const handleSend = async () => {
  if (!inputMessage.value.trim() || isLoading.value) return;
  
  const userMessage = inputMessage.value.trim();
  messages.value.push({
    type: 'user',
    text: userMessage
  });
  
  inputMessage.value = '';
  isLoading.value = true;
  
  try {
    const response = await $fetch('/api/ask', {
      method: 'POST',
      body: {
        question: userMessage
      }
    });
    
    messages.value.push({
      type: 'bot',
      text: response.answer
    });
  } catch (error) {
    messages.value.push({
      type: 'bot',
      text: 'Извините, произошла ошибка при обработке вашего вопроса. Пожалуйста, попробуйте еще раз.'
    });
    console.error('Chatbot Error:', error);
  } finally {
    isLoading.value = false;
  }
};

const sendMessage = (question) => {
  inputMessage.value = question;
  handleSend();
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(240, 228, 145, 0.3);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(240, 228, 145, 0.5);
}
</style>


