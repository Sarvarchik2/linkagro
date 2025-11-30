<template>
  <section class="py-24 bg-primary-dark relative overflow-hidden border-t border-white/5">
    <div class="container relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Как мы это <span class="text-accent">реализуем</span></h2>
        <p class="text-gray-300">Полный цикл от сбора "сырых" данных до выдачи точной рекомендации</p>
      </div>

      <div class="grid md:grid-cols-4 gap-6 mb-20">
        <div class="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:bg-white/10 transition">
          <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 text-accent">
            <Database class="w-6 h-6" />
          </div>
          <h3 class="font-bold text-lg mb-2 text-white">1. Data Ingestion</h3>
          <p class="text-sm text-gray-400">Автоматический сбор данных (API, Web Scraping) и агрегация в едином хранилище.</p>
        </div>

        <div class="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:bg-white/10 transition">
          <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 text-accent">
            <Cpu class="w-6 h-6" />
          </div>
          <h3 class="font-bold text-lg mb-2 text-white">2. Model Training</h3>
          <p class="text-sm text-gray-400">Обучение LSTM/Transformer на обработанных временных рядах.</p>
        </div>

        <div class="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:bg-white/10 transition">
          <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 text-accent">
            <Cloud class="w-6 h-6" />
          </div>
          <h3 class="font-bold text-lg mb-2 text-white">3. Deployment</h3>
          <p class="text-sm text-gray-400">Docker + FastAPI в облаке для доступа к прогнозам 24/7.</p>
        </div>

        <div class="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:bg-white/10 transition">
          <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 text-accent">
            <Zap class="w-6 h-6" />
          </div>
          <h3 class="font-bold text-lg mb-2 text-white">4. Recommendation</h3>
          <p class="text-sm text-gray-400">Преобразование прогноза в четкую инструкцию для фермера.</p>
        </div>
      </div>

      <div class="bg-white/5 p-10 rounded-3xl border border-white/10 shadow-lg text-center">
        <h3 class="text-2xl font-bold mb-8 text-white">Технологический Стек</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <span class="px-6 py-3 bg-white/5 text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition cursor-default">Python</span>
          <span class="px-6 py-3 bg-white/5 text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition cursor-default">PyTorch / TensorFlow</span>
          <span class="px-6 py-3 bg-white/5 text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition cursor-default">FastAPI</span>
          <span class="px-6 py-3 bg-white/5 text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition cursor-default">Docker</span>
          <span class="px-6 py-3 bg-white/5 text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition cursor-default">Vue.js</span>
          <span class="px-6 py-3 bg-white/5 text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition cursor-default">Pandas</span>
          <span class="px-6 py-3 bg-white/5 text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition cursor-default">Scikit-learn</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Database, Cpu, Cloud, Zap } from 'lucide-vue-next';
</script>
