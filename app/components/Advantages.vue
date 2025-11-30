<template>
  <section class="py-24 bg-primary relative">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Преимущества <span class="text-accent">LINKAGRO</span></h2>
        <p class="text-gray-400">Почему ведущие агрохолдинги и фермеры выбирают нас</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors group">
          <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
            <Landmark class="w-6 h-6 text-accent" />
          </div>
          <h3 class="text-lg font-bold mb-2">Для банков</h3>
          <p class="text-sm text-gray-400">
            Снижение рисков при кредитовании агросектора благодаря точной аналитике.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors group">
          <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
            <ShieldCheck class="w-6 h-6 text-accent" />
          </div>
          <h3 class="text-lg font-bold mb-2">Прозрачность</h3>
          <p class="text-sm text-gray-400">
            Полная история поля и действий фермера доступна в едином отчете.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors group">
          <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
            <Database class="w-6 h-6 text-accent" />
          </div>
          <h3 class="text-lg font-bold mb-2">Точные данные</h3>
          <p class="text-sm text-gray-400">
            Использование спутниковых снимков и лабораторных анализов почвы.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-colors group">
          <div class="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
            <Headphones class="w-6 h-6 text-accent" />
          </div>
          <h3 class="text-lg font-bold mb-2">Поддержка 24/7</h3>
          <p class="text-sm text-gray-400">
            Наши агрономы и технические специалисты всегда готовы помочь.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Landmark, ShieldCheck, Database, Headphones } from 'lucide-vue-next';
</script>
