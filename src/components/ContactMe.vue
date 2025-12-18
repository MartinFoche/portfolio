<script setup>
import gmailIcon from '@/assets/icons/gmail.png'
import githubIcon from '@/assets/icons/github.png'
import linkedinIcon from '@/assets/icons/linkedin.png'
</script>
<template>
  <section
    class="max-w-xl mx-4 sm:mx-auto px-6 py-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] mt-16 flex flex-col items-center"
  >
    <h2 class="text-3xl font-bold mb-2 text-white/80">Contacto</h2>
    <p class="text-sm text-white/50 mb-6 text-center">
      ¿Charlamos? Podés escribirme o ver mi trabajo
    </p>

    <div class="flex gap-8">
      <a href="mailto:fochesatto.mf@gmail.com" class="group" aria-label="Enviar mail">
        <img
          :src="gmailIcon"
          class="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_#b58cff]"
        />
      </a>

      <a href="https://github.com/MartinFoche" target="_blank" class="group" aria-label="GitHub">
        <img
          :src="githubIcon"
          class="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_#b58cff]"
        />
      </a>

      <a
        href="https://www.linkedin.com/in/martin-fochesatto/"
        target="_blank"
        class="group"
        aria-label="LinkedIn"
      >
        <img
          :src="linkedinIcon"
          class="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_#b58cff]"
        />
      </a>
    </div>
  </section>
</template>
