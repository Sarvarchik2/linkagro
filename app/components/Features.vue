<template>
  <section class="py-24 bg-primary-dark relative">
    <div class="container space-y-32">
      
      <!-- Feature 1: Bank Scoring (MOVED TO FIRST) -->
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div class="order-2 lg:order-1 relative">
          <div class="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full transform -translate-x-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop" 
            alt="Bank Scoring" 
            class="relative z-10 rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
        <div class="order-1 lg:order-2 space-y-6">
          <div class="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
            <Wallet class="w-6 h-6 text-emerald-400" />
          </div>
          <h2 class="text-3xl font-bold">Скоринг для Банков</h2>
          <p class="text-gray-400 text-lg leading-relaxed">
            Объективная оценка кредитоспособности фермеров на основе реальных данных о состоянии полей. Снижайте риски невозврата и увеличивайте портфель агрокредитов.
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
      </div>

      <!-- Feature 2: Monitoring -->
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div class="space-y-6">
          <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <Satellite class="w-6 h-6 text-purple-400" />
          </div>
          <h2 class="text-3xl font-bold">Мониторинг в реальном времени</h2>
          <p class="text-gray-400 text-lg leading-relaxed">
            Отслеживайте использование кредита и состояние посевов заёмщика из космоса. Индексы вегетации (NDVI) позволяют банку контролировать целевое использование средств.
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
              <span>Контроль целевого использования кредита</span>
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
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
          <h2 class="text-3xl font-bold">Управление кредитными рисками</h2>
          <p class="text-gray-400 text-lg leading-relaxed">
            Система предупреждает банк о погодных аномалиях, вредителях и болезнях, которые могут повлиять на урожай заёмщика. Минимизируйте риски невозврата кредита.
          </p>
          <ul class="space-y-3">
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Прогноз погодных рисков</span>
            </li>
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Оповещения о заморозках и засухе</span>
            </li>
            <li class="flex items-center gap-3 text-gray-300">
              <CheckCircle2 class="w-5 h-5 text-accent" />
              <span>Оценка влияния на платёжеспособность</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Satellite, AlertTriangle, CheckCircle2, Wallet } from 'lucide-vue-next';
</script>
