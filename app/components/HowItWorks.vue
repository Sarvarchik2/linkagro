<template>
  <section class="py-24 bg-primary-light relative overflow-hidden">
    <div class="container relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Порядок работы системы <span class="text-accent">LINKAGRO</span></h2>
        <p class="text-gray-400">Простой и прозрачный процесс для получения максимальной выгоды от вашей земли</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 relative">
        <!-- Connecting Line -->
        <div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

        <!-- Step 1 -->
        <div class="relative group">
          <div class="w-24 h-24 mx-auto bg-primary border border-accent/30 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-accent transition-colors shadow-[0_0_20px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            <MapPin class="w-10 h-10 text-accent" />
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">1</div>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold mb-3">Выберите поле</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Укажите ваше поле на карте или загрузите кадастровый номер. Система автоматически определит границы.
            </p>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="relative group">
          <div class="w-24 h-24 mx-auto bg-primary border border-accent/30 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-accent transition-colors shadow-[0_0_20px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            <Activity class="w-10 h-10 text-accent" />
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">2</div>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold mb-3">Получите анализ</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Мы проанализируем почву, историю посевов и климатические условия, чтобы предоставить полный отчет.
            </p>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="relative group">
          <div class="w-24 h-24 mx-auto bg-primary border border-accent/30 rounded-full flex items-center justify-center mb-6 relative z-10 group-hover:border-accent transition-colors shadow-[0_0_20px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
            <TrendingUp class="w-10 h-10 text-accent" />
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">3</div>
          </div>
          <div class="text-center">
            <h3 class="text-xl font-bold mb-3">Увеличьте прибыль</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Используйте рекомендации для повышения урожайности или подайте заявку на финансирование.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin, Activity, TrendingUp } from 'lucide-vue-next';
</script>
