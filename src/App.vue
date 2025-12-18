<template>
  <div class="min-h-screen w-full animate-pulse-purple overflow-x-hidden pb-24">
    <Navbar />
    <router-view />
  </div>
</template>
<script setup>
import Navbar from './components/NavBar.vue'
</script>
