<script setup>
import { ref } from 'vue'

const menu = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Tecnologías', href: '#technologies' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Contacto', href: '#contact' },
]

const isOpen = ref(false) // control del menú hamburguesa
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex justify-end md:justify-center mt-4">
    <!-- contenedor principal centrado y con max-width -->
    <div
      class="hidden md:flex max-w-3xl w-auto bg-white/10 gap-10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl justify-center items-center shadow-[0_0_15px_rgba(255,255,255,0.2)]"
    >
      <a
        v-for="item in menu"
        :key="item.href"
        :href="item.href"
        class="font-bold text-gray-300 transition duration-300 hover:text-white hover:scale-[1.08] after:content-[''] after:absolute after:left-1/2 after:-bottom-2 after:h-[2px] after:w-0 after:bg-white after:rounded-full after:-translate-x-1/2 after:transition-all hover:after:w-full"
      >
        {{ item.label }}
      </a>
    </div>
    <div
      class="md:hidden mr-4 bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-3 rounded-2xl shadow-[0_0_15px_rgba(255,255,255,0.2)]"
    >
      <button @click="isOpen = true" class="text-white text-2xl">☰</button>
    </div>

    <!-- Overlay menú móvil -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex flex-col items-center justify-center gap-8 text-2xl text-white"
      >
        <button
          class="absolute top-6 right-6 text-3xl"
          @click="isOpen = false"
          aria-label="Cerrar menú"
        >
          ✕
        </button>

        <a
          v-for="item in menu"
          :key="item.href"
          :href="item.href"
          @click="isOpen = false"
          class="hover:text-[#b58cff] transition"
        >
          {{ item.label }}
        </a>
      </div>
    </transition>
  </nav>
</template>

<style>
/* transición simple para overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
