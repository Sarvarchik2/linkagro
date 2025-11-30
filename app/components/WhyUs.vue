<template>
  <section class="py-24 bg-primary-dark text-white relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-agro-cream/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

    <div class="container relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Почему именно <span class="text-agro-cream">LINKAGRO</span>?</h2>
        <p class="text-agro-cream/80">Наши преимущества и уникальный подход к решению проблем агросектора</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition">
          <div class="w-12 h-12 bg-agro-cream/20 rounded-lg flex items-center justify-center mb-6 text-agro-cream">
            <Shield class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold mb-3">Снижение рисков</h3>
          <p class="text-gray-300 text-sm leading-relaxed">
            Объективные данные вместо субъективных оценок. Прозрачная история полей и прогноз урожайности минимизируют риски невозврата кредита.
          </p>
        </div>

        <div class="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition">
          <div class="w-12 h-12 bg-agro-light/20 rounded-lg flex items-center justify-center mb-6 text-agro-light">
            <Zap class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold mb-3">Автоматизация</h3>
          <p class="text-gray-300 text-sm leading-relaxed">
            Быстрое принятие кредитных решений благодаря AI-скорингу. Оценка тысяч заявок без ручной работы.
          </p>
        </div>

        <div class="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition">
          <div class="w-12 h-12 bg-primary-light/20 rounded-lg flex items-center justify-center mb-6 text-primary-light">
            <TrendingUp class="w-6 h-6" />
          </div>
          <h3 class="text-xl font-bold mb-3">Рост портфеля</h3>
          <p class="text-gray-300 text-sm leading-relaxed">
            Уверенное расширение агрокредитования. Точные данные позволяют выдавать больше кредитов с меньшими рисками.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Shield, Zap, TrendingUp } from 'lucide-vue-next';
</script>
