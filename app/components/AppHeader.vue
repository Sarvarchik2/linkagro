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

      <!-- Desktop Navigation -->
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

      <!-- Mobile Menu Button -->
      <button @click="isOpen = !isOpen" class="md:hidden text-white p-2">
        <Menu v-if="!isOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isOpen" class="md:hidden absolute top-20 left-0 w-full bg-primary-dark border-b border-white/10 shadow-xl">
      <nav class="flex flex-col p-4 space-y-4">
        <a @click="isOpen = false" href="#home" class="text-base font-medium text-gray-300 hover:text-white transition-colors">Главная</a>
        <a @click="isOpen = false" href="#problem" class="text-base font-medium text-gray-300 hover:text-white transition-colors">Проблема</a>
        <a @click="isOpen = false" href="#how-it-works" class="text-base font-medium text-gray-300 hover:text-white transition-colors">Как это работает</a>
        <a @click="isOpen = false" href="#why-us" class="text-base font-medium text-gray-300 hover:text-white transition-colors">Почему мы</a>
        <a @click="isOpen = false" href="#features" class="text-base font-medium text-gray-300 hover:text-white transition-colors">Возможности</a>
        <a @click="isOpen = false" href="#implementation" class="text-base font-medium text-gray-300 hover:text-white transition-colors">Реализация</a>
        <a @click="isOpen = false" href="#roadmap" class="text-base font-medium text-gray-300 hover:text-white transition-colors">Roadmap</a>
        <a @click="isOpen = false" href="#team" class="text-base font-medium text-gray-300 hover:text-white transition-colors">Команда</a>
        <a @click="isOpen = false" href="#contacts" class="text-base font-medium text-gray-300 hover:text-white transition-colors">Контакты</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { Leaf, Menu, X } from 'lucide-vue-next';

const isOpen = ref(false);
</script>
