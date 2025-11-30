<template>
  <section class="py-24 bg-primary-dark relative">
    <div class="container space-y-32">
      
      <!-- Feature 1: Analytics -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="order-2 lg:order-1 relative">
          <div class="absolute inset-0 bg-accent/20 blur-3xl rounded-full transform -translate-x-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            alt="Analytics Dashboard" 
            class="relative z-10 rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
        <div class="order-1 lg:order-2 space-y-6">
          <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <BarChart3 class="w-6 h-6 text-blue-400" />
          </div>
          <h2 class="text-3xl font-bold">Комплексная аналитика</h2>
          <p class="text-gray-400 text-lg leading-relaxed">
            Получайте подробные отчеты о состоянии ваших полей. Мы анализируем химический состав почвы, влажность и другие критические показатели для принятия правильных решений.
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Анализ NPK (Азот, Фосфор, Калий)</span>
            </li>
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Карты кислотности (pH)</span>
            </li>
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Рекомендации по удобрениям</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Feature 2: Satellite Imagery -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <Satellite class="w-6 h-6 text-purple-400" />
          </div>
          <h2 class="text-3xl font-bold">Спутниковый мониторинг</h2>
          <p class="text-gray-400 text-lg leading-relaxed">
            Следите за развитием посевов из космоса. Индексы вегетации (NDVI) позволяют обнаружить проблемные зоны на ранних стадиях и предотвратить потери урожая.
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Регулярные снимки высокого разрешения</span>
            </li>
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>История развития полей</span>
            </li>
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Сравнение с прошлыми сезонами</span>
            </li>
          </ul>
        </div>
        <div class="relative">
          <div class="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full transform translate-x-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Satellite View" 
            class="relative z-10 rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>

      <!-- Feature 3: Risk Management -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="order-2 lg:order-1 relative">
          <div class="absolute inset-0 bg-red-500/20 blur-3xl rounded-full transform -translate-x-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1590055531615-f16d36ffe8ec?q=80&w=2070&auto=format&fit=crop" 
            alt="Risk Management" 
            class="relative z-10 rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
        <div class="order-1 lg:order-2 space-y-6">
          <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
            <AlertTriangle class="w-6 h-6 text-red-400" />
          </div>
          <h2 class="text-3xl font-bold">Управление рисками</h2>
          <p class="text-gray-400 text-lg leading-relaxed">
            Система предупреждает о погодных аномалиях, вредителях и болезнях. Будьте готовы к любым вызовам природы и минимизируйте финансовые потери.
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Прогноз погоды для агрономов</span>
            </li>
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Оповещения о заморозках и засухе</span>
            </li>
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Моделирование рисков</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Feature 4: Bank Scoring (NEW) -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <div class="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
            <Wallet class="w-6 h-6 text-emerald-400" />
          </div>
          <h2 class="text-3xl font-bold">Скоринг для Банков</h2>
          <p class="text-gray-400 text-lg leading-relaxed">
            Мы помогаем банкам принимать обоснованные решения о выдаче кредитов. Наша система оценивает надежность фермера и потенциал его земли, снижая риски невозврата.
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Автоматическая оценка кредитоспособности</span>
            </li>
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Прогноз доходности участка</span>
            </li>
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Прозрачная история для банка</span>
            </li>
          </ul>
        </div>
        <div class="relative">
          <div class="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full transform translate-x-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" 
            alt="Bank Scoring" 
            class="relative z-10 rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { BarChart3, Satellite, AlertTriangle, CheckCircle2, Wallet } from 'lucide-vue-next';
</script>
