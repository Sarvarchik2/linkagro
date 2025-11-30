<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop');">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary-dark/40"></div>
    </div>

    <div class="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-8">
        <h1 class="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
          LINKAGRO — Объективная оценка <span class="text-accent">кредитоспособности фермеров</span>
        </h1>
        <p class="text-sm sm:text-base lg:text-lg text-gray-300 max-w-xl">
          Анализ индексов NDVI, NDWI, EVI, SAVI и мониторинг полей для точных кредитных решений. Снижайте риски, увеличивайте портфель агрокредитов на основе объективных данных.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="px-6 py-3 sm:px-8 sm:py-4 bg-accent hover:bg-accent-hover text-white text-sm sm:text-base font-bold rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2">
            Получить демо
            <ArrowRight class="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button class="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-bold rounded-full backdrop-blur-sm transition-all border border-white/20">
            Узнать больше
          </button>
        </div>


      </div>

      <!-- Hero Visual/Dashboard Mockup -->
      <div class="hidden lg:block relative">
        <div class="relative z-10 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
          <div class="flex items-center justify-between mb-6">
            <div class="flex gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="text-xs text-gray-400">Анализ поля #124</div>
          </div>
          
          <div class="space-y-4">
            <div class="h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-white/5 flex items-center justify-center relative overflow-hidden">
               <!-- Mock Map -->
               <div class="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop')] bg-cover"></div>
               <div class="relative z-10 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-md text-sm">
                  Здоровье посевов: Отличное
               </div>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div class="p-4 bg-white/5 rounded-lg">
                <div class="text-xs text-gray-400 mb-1">Влажность</div>
                <div class="text-xl font-bold text-accent">68%</div>
              </div>
              <div class="p-4 bg-white/5 rounded-lg">
                <div class="text-xs text-gray-400 mb-1">NDVI</div>
                <div class="text-xl font-bold text-emerald-400">0.78</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Decorative elements -->
        <div class="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next';
</script>
