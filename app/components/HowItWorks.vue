<template>
  <section class="py-24 bg-primary-light relative overflow-hidden">
    <div class="container relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Как работает <span class="text-accent">скоринг</span></h2>
        <p class="text-gray-400">От заявки до кредитного решения за 4 простых шага</p>
      </div>

      <div class="grid md:grid-cols-4 gap-6 relative">
        <!-- Connecting Line -->
        <div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

        <!-- Step 1 -->
        <div class="relative group">
          <div class="w-24 h-24 mx-auto bg-primary border border-accent/30 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-accent transition-colors shadow-[0_0_20px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            <Database class="w-10 h-10 text-accent" />
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">1</div>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold mb-3">Сбор данных</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Спутниковые снимки полей + анализ индексов NDVI, NDWI, EVI, SAVI, NDMI
            </p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="relative group">
          <div class="w-24 h-24 mx-auto bg-primary border border-accent/30 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-accent transition-colors shadow-[0_0_20px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            <Brain class="w-10 h-10 text-accent" />
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold mb-3">AI-анализ</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Оценка состояния полей, прогноз урожайности и потенциального дохода
            </p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="relative group">
          <div class="w-24 h-24 mx-auto bg-primary border border-accent/30 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-accent transition-colors shadow-[0_0_20px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            <Calculator class="w-10 h-10 text-accent" />
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">3</div>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold mb-3">Скоринг</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Автоматический расчёт кредитоспособности на основе объективных данных
            </p>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="relative group">
          <div class="w-24 h-24 mx-auto bg-primary border border-accent/30 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-accent transition-colors shadow-[0_0_20px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            <FileText class="w-10 h-10 text-accent" />
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">4</div>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold mb-3">Отчёт</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Прозрачный отчёт с рекомендацией для принятия кредитного решения
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Database, Brain, Calculator, FileText } from 'lucide-vue-next';
</script>
