<template>
  <section class="py-24 bg-primary-dark relative overflow-hidden">
    <div class="container relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">От Проблемы к <span class="text-accent">Решению</span></h2>
        <p class="text-gray-300">Как LINKAGRO помогает банкам снизить риски агрокредитования</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Problem -->
        <div class="bg-red-900/20 p-8 rounded-3xl border border-red-500/20 relative group hover:shadow-xl hover:border-red-500/40 transition-all duration-300">
          <div class="absolute top-4 right-4 text-red-500/20 group-hover:text-red-500/40 transition-colors">
            <AlertTriangle class="w-24 h-24 opacity-20" />
          </div>
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold mb-6">
              <AlertTriangle class="w-4 h-4" />
              ПРОБЛЕМА
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Высокие риски агрокредитования</h3>
            <p class="text-gray-300 mb-6">
              Банки несут значительные потери из-за отсутствия объективных данных о заёмщиках. Невозможно оценить реальное состояние хозяйства и потенциал урожая.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <XCircle class="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span class="text-sm text-gray-300">Субъективная оценка кредитоспособности</span>
              </li>
              <li class="flex items-start gap-3">
                <XCircle class="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span class="text-sm text-gray-300">Отсутствие мониторинга использования кредита</span>
              </li>
              <li class="flex items-start gap-3">
                <XCircle class="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span class="text-sm text-gray-300">Высокий процент невозврата агрокредитов</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Solution -->
        <div class="bg-primary p-8 rounded-3xl border border-primary-light/30 relative group hover:shadow-xl transition-all duration-300">
          <div class="absolute top-4 right-4 text-primary-light group-hover:text-accent transition-colors">
            <CheckCircle2 class="w-24 h-24 opacity-20" />
          </div>
          <div class="relative z-10">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-accent text-primary-dark rounded-full text-xs font-bold mb-6">
              <CheckCircle2 class="w-4 h-4" />
              РЕШЕНИЕ
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">AI-скоринг на объективных данных</h3>
            <p class="text-gray-300 mb-6">
              Спутниковый мониторинг полей + анализ почвы = точная оценка кредитоспособности. Прозрачные данные для уверенных кредитных решений.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span class="text-sm text-gray-300">Мониторинг состояния полей в реальном времени</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span class="text-sm text-gray-300">Прогноз урожайности на основе AI</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span class="text-sm text-gray-300">Автоматический расчёт кредитного скоринга</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { AlertTriangle, XCircle, CheckCircle2, Check } from 'lucide-vue-next';
</script>
