<template>
  <section class="py-24 bg-primary-dark border-t border-white/5">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">Дорожная <span class="text-accent">Карта</span></h2>
        <p class="text-gray-300">План развития платформы LINKAGRO</p>
      </div>

      <div class="relative border-l-4 border-white/10 ml-6 md:ml-12 space-y-12 max-w-4xl mx-auto">
        
        <!-- Phase 1 -->
        <div class="relative pl-10">
          <div class="absolute -left-3.5 top-1 w-7 h-7 bg-primary-light rounded-full border-4 border-primary-dark shadow-lg"></div>
          <div class="bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10 hover:bg-white/10 transition duration-300">
            <span class="inline-block px-3 py-1 bg-primary-light/20 text-primary-light rounded-full text-xs font-bold uppercase tracking-wider mb-4">Idea Phase</span>
            <h3 class="text-2xl font-bold mb-3 text-white">Определение и План</h3>
            <p class="text-gray-400">Определение источников данных и архитектуры. Четкий план сбора данных (цены, погода, импорт/экспорт).</p>
          </div>
        </div>

        <!-- Phase 2 -->
        <div class="relative pl-10">
          <div class="absolute -left-3.5 top-1 w-7 h-7 bg-accent rounded-full border-4 border-primary-dark shadow"></div>
          <div class="bg-white/5 p-8 rounded-2xl shadow-md border border-white/10 hover:bg-white/10 transition duration-300">
            <span class="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-bold uppercase tracking-wider mb-4">Prototype</span>
            <h3 class="text-2xl font-bold mb-3 text-white">Минимальный Прогноз</h3>
            <p class="text-gray-400">Сбор исторической базы. Обучение Базовой модели (ARIMA). Отображение результатов на макете.</p>
          </div>
        </div>

        <!-- Phase 3 -->
        <div class="relative pl-10 opacity-75">
          <div class="absolute -left-3.5 top-1 w-7 h-7 bg-white rounded-full border-4 border-primary-dark shadow"></div>
          <div class="bg-white/5 p-8 rounded-2xl shadow-sm border border-white/10">
            <span class="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-4">MVP</span>
            <h3 class="text-2xl font-bold mb-3 text-white">Рабочая AI-Модель</h3>
            <p class="text-gray-400">LSTM/Transformer модель. Развертывание API. Точный прогноз на 3 месяца для одной культуры.</p>
          </div>
        </div>

        <!-- Phase 4 -->
         <div class="relative pl-10">
          <div class="absolute -left-3.5 top-1 w-7 h-7 bg-accent rounded-full border-4 border-white shadow-lg"></div>
          <div class="bg-gradient-to-br from-primary to-primary-light p-8 rounded-2xl shadow-xl border border-white/20 text-white transform hover:scale-105 transition duration-300">
            <span class="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-4">Launch</span>
            <h3 class="text-2xl font-bold mb-3 text-white">Коммерциализация</h3>
            <p class="text-gray-100">Рекомендательная система. 5-10 культур. Интеграция с финансовыми продуктами Агробанка.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
