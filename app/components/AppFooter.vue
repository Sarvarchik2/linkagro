<template>
  <footer class="bg-primary-dark border-t border-white/10 pt-16 pb-8">
    <div class="container">
      <div class="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <Leaf class="w-5 h-5 text-white" />
            </div>
            <span class="text-xl font-bold tracking-wide text-white">LINKAGRO</span>
          </div>
          <p class="text-gray-400 text-sm">
            Инновационные технологии для современного сельского хозяйства.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-bold mb-4 text-white">Компания</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-accent transition-colors">О нас</a></li>
            <li><a href="#" class="hover:text-accent transition-colors">Карьера</a></li>
            <li><a href="#" class="hover:text-accent transition-colors">Новости</a></li>
            <li><a href="#" class="hover:text-accent transition-colors">Контакты</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4 text-white">Продукт</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-accent transition-colors">Возможности</a></li>
            <li><a href="#" class="hover:text-accent transition-colors">Цены</a></li>
            <li><a href="#" class="hover:text-accent transition-colors">Для банков</a></li>
            <li><a href="#" class="hover:text-accent transition-colors">API</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold mb-4 text-white">Контакты</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li class="flex items-center gap-2">
              <Phone class="w-4 h-4" />
              <span>+998901235853</span>
            </li>
            <li class="flex items-center gap-2">
              <MapPin class="w-4 h-4" />
              <span>Ташкент, Узбекистан</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>&copy; 2025 LINKAGRO. Все права защищены.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors">Политика конфиденциальности</a>
          <a href="#" class="hover:text-white transition-colors">Условия использования</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Leaf, Phone, MapPin } from 'lucide-vue-next';
</script>
