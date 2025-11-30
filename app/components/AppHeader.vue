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
      <button 
        @click="isOpen = !isOpen" 
        class="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors border-2 border-accent"
      >
        <Menu v-if="!isOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Navigation with Animation -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="isOpen" class="md:hidden absolute top-20 left-0 w-full bg-gradient-to-b from-primary-dark to-primary border-b border-accent/30 shadow-2xl">
        <nav class="flex flex-col p-6 space-y-2">
          <a @click="isOpen = false" href="#home" class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-accent/20 hover:text-accent transition-all group">
            <Home class="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span class="font-medium">Главная</span>
          </a>
          <a @click="isOpen = false" href="#problem" class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-accent/20 hover:text-accent transition-all group">
            <AlertCircle class="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span class="font-medium">Проблема</span>
          </a>
          <a @click="isOpen = false" href="#how-it-works" class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-accent/20 hover:text-accent transition-all group">
            <Workflow class="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span class="font-medium">Как это работает</span>
          </a>
          <a @click="isOpen = false" href="#why-us" class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-accent/20 hover:text-accent transition-all group">
            <Award class="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span class="font-medium">Почему мы</span>
          </a>
          <a @click="isOpen = false" href="#features" class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-accent/20 hover:text-accent transition-all group">
            <Sparkles class="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span class="font-medium">Возможности</span>
          </a>
          <a @click="isOpen = false" href="#implementation" class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-accent/20 hover:text-accent transition-all group">
            <Code class="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span class="font-medium">Реализация</span>
          </a>
          <a @click="isOpen = false" href="#roadmap" class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-accent/20 hover:text-accent transition-all group">
            <Map class="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span class="font-medium">Roadmap</span>
          </a>
          <a @click="isOpen = false" href="#team" class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-accent/20 hover:text-accent transition-all group">
            <Users class="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span class="font-medium">Команда</span>
          </a>
          <a @click="isOpen = false" href="#contacts" class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-accent/20 hover:text-accent transition-all group">
            <Phone class="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span class="font-medium">Контакты</span>
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { Leaf, Menu, X, Home, AlertCircle, Workflow, Award, Sparkles, Code, Map, Users, Phone } from 'lucide-vue-next';

const isOpen = ref(false);
</script>
