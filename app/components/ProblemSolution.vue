<template>
  <section class="py-24 bg-primary-dark relative overflow-hidden">
    <div class="container relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 text-white">От Проблемы к <span class="text-accent">Решению</span></h2>
        <p class="text-gray-300">Как LINKAGRO трансформирует неопределенность в гарантированную прибыль</p>
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
            <h3 class="text-2xl font-bold text-white mb-4">Нестабильность и Риск</h3>
            <p class="text-gray-300 mb-6">
              Отсутствие рыночной информации вынуждает фермеров продавать урожай сразу после сбора по низким ценам. Потери составляют до 40% потенциальной прибыли.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <XCircle class="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span class="text-sm text-gray-300">Сложность учета глобальных трендов и погоды</span>
              </li>
              <li class="flex items-start gap-3">
                <XCircle class="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span class="text-sm text-gray-300">Отсутствие рекомендаций по хранению и продаже</span>
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
            <h3 class="text-2xl font-bold text-white mb-4">Интеллектуальный Советник</h3>
            <p class="text-gray-300 mb-6">
              Платформа на базе ИИ прогнозирует цены на 3–6 месяцев вперед, используя мультимодальные нейросети (LSTM/Transformer).
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span class="text-sm text-gray-300">Анализ временных рядов для выявления скрытых зависимостей</span>
              </li>
              <li class="flex items-start gap-3">
                <Check class="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span class="text-sm text-gray-300">Четкая стратегия: "Хранить 30% до марта, прибыль +15%"</span>
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
