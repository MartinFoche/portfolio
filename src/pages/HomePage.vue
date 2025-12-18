<template>
  <div class="pt-32 space-y-32">
    <section id="hero" class="scroll-mt-32">
      <Hero />
    </section>

    <section id="about" class="scroll-mt-32">
      <About />
    </section>

    <section id="technologies" class="scroll-mt-32">
      <Technologies />
    </section>
    <section id="projects" class="scroll-mt-32">
      <Projects />
    </section>

    <section id="experience" class="scroll-mt-32">
      <Experience />
    </section>

    <section id="contact" class="scroll-mt-32">
      <Contact />
    </section>
  </div>
  <footer class="mt-24 text-center text-sm text-white/40">
    © {{ new Date().getFullYear() }} · Martín Fochesatto
  </footer>
</template>

<script setup>
import Hero from '../components/HeroCard.vue'
import About from '../components/AboutMe.vue'
import Projects from '../components/ProjectsPage.vue'
import Experience from '../components/ExperienceCard.vue'
import Contact from '../components/ContactMe.vue'
import Technologies from '../components/TechnologiesCard.vue'
</script>
