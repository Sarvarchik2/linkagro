<template>
  <div class="min-h-screen bg-primary-dark text-white font-sans">
    <AppHeader />
    
    <main class="pt-20">
      <!-- Hero Section -->
      <section class="py-16 bg-gradient-to-b from-primary-dark to-primary">
        <div class="container">
          <div class="text-center max-w-4xl mx-auto">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Демонстрация <span class="text-accent">LINKAGRO</span>
            </h1>
            <p class="text-lg text-gray-300 mb-8">
              Посмотрите, как наша платформа помогает банкам принимать объективные решения в агрокредитовании
            </p>
          </div>
        </div>
      </section>

      <!-- Demo Video Section -->
      <section class="py-16 bg-primary-dark">
        <div class="container">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold mb-8 text-center text-white">
              <span class="text-accent">Демо-видео</span>
            </h2>
            
            <div class="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl">
              <div class="aspect-video bg-gradient-to-br from-primary/20 to-primary-dark/40 rounded-xl overflow-hidden relative">
                <video
                  class="w-full h-full object-contain"
                  controls
                  preload="metadata"
                >
                  <source src="/ag.mp4" type="video/mp4">
                  Ваш браузер не поддерживает видео.
                </video>
              </div>
              
              <!-- Description under video -->
              <div class="mt-8 space-y-6">
                <div class="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <h3 class="text-xl font-bold mb-4 text-accent">Что показано в демо</h3>
                  <ul class="space-y-2 text-gray-300 text-sm">
                    <li class="flex items-start gap-2">
                      <Check class="w-4 h-4 text-accent shrink-0 mt-1" />
                      <span>Анализ спутниковых данных и расчёт индексов NDVI, NDWI, EVI, SAVI, NDMI для оценки состояния полей</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Check class="w-4 h-4 text-accent shrink-0 mt-1" />
                      <span>Мониторинг полей в реальном времени с визуализацией на интерактивной карте</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Check class="w-4 h-4 text-accent shrink-0 mt-1" />
                      <span>AI-скоринг кредитоспособности фермеров на основе объективных данных</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <Check class="w-4 h-4 text-accent shrink-0 mt-1" />
                      <span>Генерация отчётов и рекомендаций для банковских специалистов</span>
                    </li>
                  </ul>
                </div>

                <div class="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <h3 class="text-xl font-bold mb-4 text-accent">Связь с проблемой и решением</h3>
                  <div class="space-y-3 text-gray-300 text-sm">
                    <p>
                      <strong class="text-white">Проблема:</strong> Банки сталкиваются с высокими рисками при выдаче агрокредитов из-за отсутствия объективных данных о состоянии хозяйств и невозможности мониторить использование кредитных средств.
                    </p>
                    <p>
                      <strong class="text-white">Решение:</strong> LINKAGRO использует спутниковый мониторинг и AI-анализ для предоставления банкам объективной оценки кредитоспособности. Платформа автоматически отслеживает состояние полей, анализирует индексы вегетации и влажности, прогнозирует урожайность и рассчитывает кредитный скоринг на основе реальных данных, а не субъективных оценок.
                    </p>
                  </div>
                </div>

                <div class="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <h3 class="text-xl font-bold mb-4 text-accent">Используемый стек, технологии и AI решения</h3>
                  <div class="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 class="font-semibold mb-2 text-white">Frontend & Backend</h4>
                      <ul class="space-y-1 text-gray-300">
                        <li>• Nuxt 3 (Vue 3), TypeScript, Tailwind CSS</li>
                        <li>• Python (FastAPI), Machine Learning модели</li>
                        <li>• Спутниковые API (Sentinel Hub, Landsat)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-semibold mb-2 text-white">AI Решения</h4>
                      <ul class="space-y-1 text-gray-300">
                        <li>• Анализ спутниковых изображений (NDVI, NDWI, EVI, SAVI, NDMI)</li>
                        <li>• Прогнозирование урожайности (ML-модели)</li>
                        <li>• AI-скоринг кредитоспособности</li>
                        <li>• Обнаружение аномалий и рисков</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
                  <h3 class="text-xl font-bold mb-4 text-accent">Текущий статус и следующие шаги</h3>
                  <div class="space-y-3 text-sm">
                    <div class="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold">
                      <Zap class="w-3 h-3" />
                      Статус: MVP (Minimum Viable Product)
                    </div>
                    <p class="text-gray-300">
                      Платформа находится на стадии MVP. Реализованы основные функции: спутниковый мониторинг, расчёт индексов, базовый AI-скоринг и визуализация данных. Система проходит тестирование с пилотными банками.
                    </p>
                    <div>
                      <h4 class="font-semibold mb-2 text-white">Следующие шаги:</h4>
                      <ul class="space-y-1 text-gray-300">
                        <li>• Интеграция с банковскими системами через API</li>
                        <li>• Расширение AI-моделей для более точного прогнозирования</li>
                        <li>• Добавление мобильного приложения для фермеров</li>
                        <li>• Масштабирование на новые регионы и культуры</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Description Section -->
    

      <!-- Working App Link Section -->
      <section class="py-16 bg-primary-dark">
        <div class="container">
          <div class="max-w-4xl mx-auto">
            <div class="bg-gradient-to-br from-accent/10 to-primary/20 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-accent/30 text-center">
              <h2 class="text-3xl font-bold mb-4 text-white">
                Попробуйте <span class="text-accent">LINKAGRO</span> прямо сейчас
              </h2>
              <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
                Получите доступ к демо-версии платформы и оцените все возможности системы
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="http://5.129.247.149:5175/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-8 py-4 bg-accent hover:bg-accent-hover text-primary-dark font-bold rounded-full transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  <ExternalLink class="w-5 h-5" />
                  Открыть демо-версию
                </a>
                <a
                  href="http://5.129.247.149:5175/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full backdrop-blur-sm transition-all border border-white/20 flex items-center gap-2"
                >
                  <Code class="w-5 h-5" />
                  Документация API
                </a>
              
              </div>

              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-4"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-4"
              >
                <div v-if="showTestCredentials" class="mt-8 bg-white/5 rounded-xl p-6 border border-white/10 text-left max-w-md mx-auto">
                  <h3 class="text-lg font-semibold mb-4 text-accent">Тестовые данные для входа:</h3>
                  <div class="space-y-3 text-sm">
                    <div>
                      <span class="text-gray-400">Email:</span>
                      <span class="text-white ml-2 font-mono">demo@linkagro.com</span>
                    </div>
                    <div>
                      <span class="text-gray-400">Пароль:</span>
                      <span class="text-white ml-2 font-mono">Demo2024!</span>
                    </div>
                    <p class="text-gray-400 text-xs mt-4 pt-4 border-t border-white/10">
                      Примечание: Демо-версия предоставляет доступ к тестовым данным и ограниченному функционалу
                    </p>
                  </div>
                </div>
              </Transition>

              <p class="text-sm text-gray-400 mt-6">
                Или свяжитесь с нами для получения полного доступа: 
                <a href="mailto:info@linkagro.com" class="text-accent hover:underline">info@linkagro.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Chatbot Section (Bonus) -->
      <section class="py-16 bg-primary">
        <div class="container">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-8 text-center text-white">
              Задайте вопрос <span class="text-accent">чатботу</span>
            </h2>
            
            <div class="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 text-center">
              <div class="mb-6">
                <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-accent/20 to-primary-light/20 rounded-full flex items-center justify-center">
                  <MessageCircle class="w-12 h-12 text-accent" />
                </div>
                <h3 class="text-2xl font-bold mb-4 text-white">
                  Наш чатбот доступен в <span class="text-accent">Telegram</span>
                </h3>
                <p class="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Перейдите в Telegram и начните общение с нашим AI-помощником. Он ответит на ваши вопросы о проекте, технологиях и возможностях платформы LINKAGRO.
                </p>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <a
                  href="https://t.me/link_agro_ai_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-8 py-4 bg-accent hover:bg-accent-hover text-primary-dark font-bold rounded-full transition-all transform hover:scale-105 flex items-center gap-3"
                >
                  <Send class="w-5 h-5" />
                  Открыть в Telegram
                </a>
                <div class="px-6 py-4 bg-white/10 rounded-full border border-white/20">
                  <span class="text-white font-mono text-sm">@link_agro_ai_bot</span>
                </div>
              </div>

              <div class="mt-8 pt-8 border-t border-white/10">
                <p class="text-sm text-gray-400 mb-4">Попробуйте задать эти вопросы:</p>
                <div class="flex flex-wrap gap-2 justify-center">
                  <span class="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10">
                    Что делает ваш проект?
                  </span>
                  <span class="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10">
                    Для кого предназначен продукт?
                  </span>
                  <span class="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10">
                    Как используется AI?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { 
  Play, Video, Target, Code, MapPin, Zap, ArrowRight, 
  Check, ExternalLink, MessageCircle, Send
} from 'lucide-vue-next';

const showTestCredentials = ref(false);

// SEO
useHead({
  title: 'Демонстрация LINKAGRO - Демо-видео и описание',
  meta: [
    { name: 'description', content: 'Посмотрите демонстрацию платформы LINKAGRO для объективной оценки кредитоспособности фермеров на основе спутниковых данных и AI' }
  ]
});
</script>
