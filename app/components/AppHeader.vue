<template>
  <header class="fixed w-full z-50 bg-primary/90 backdrop-blur-sm border-b border-white/10">
    <div class="container flex items-center justify-between h-20">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
          <Leaf class="w-5 h-5 text-white" />
        </div>
        <span class="text-xl font-bold tracking-wide text-white">LINKAGRO</span>
      </div>

      <!-- Navigation -->
      <nav class="hidden md:flex items-center gap-6">
        <a href="#home" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Главная</a>
        <a href="#problem" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Проблема</a>
        <a href="#how-it-works" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Как это работает</a>
        <a href="#why-us" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Почему мы</a>
        <a href="#features" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Возможности</a>
        <a href="#implementation" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Реализация</a>
        <a href="#roadmap" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Roadmap</a>
        <a href="#team" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Команда</a>
        <a href="#contacts" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Контакты</a>
      </nav>

      <!-- Actions (Removed as per request) -->
      <div class="flex items-center gap-4">
        <!-- Empty for now, keeping structure if needed later or can remove div -->
      </div>
    </div>
  </header>
</template>

<script setup>
import { Leaf } from 'lucide-vue-next';
</script>
