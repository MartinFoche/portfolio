<script setup>
import { reactive } from 'vue'
import vueIcon from '@/assets/icons/vue.svg.png'
import laravelIcon from '@/assets/icons/laravel.svg.png'
import tailwindIcon from '@/assets/icons/tailwind.svg.png'
import typescriptIcon from '@/assets/icons/typescript.png'
import pythonIcon from '@/assets/icons/python.svg.png'
import javascriptIcon from '@/assets/icons/javascript.png'
import htmlIcon from '@/assets/icons/HTML5.svg.png'
import css3Icon from '@/assets/icons/CSS3.svg.png'
import phpIcon from '@/assets/icons/php.svg.png'
import mysqlIcon from '@/assets/icons/mysql.png'
import postgresqlIcon from '@/assets/icons/Postgresql.svg.png'
import sqlIcon from '@/assets/icons/sql.png'
import pascalIcon from '@/assets/icons/pascal.png'
import javaIcon from '@/assets/icons/java.png'
import cIcon from '@/assets/icons/c.svg.png'
import reactIcon from '@/assets/icons/react.svg.png'
import wordpressIcon from '@/assets/icons/wordpress.png'
import woocomerceIcon from '@/assets/icons/woocommerce.png'
import gitIcon from '@/assets/icons/git.svg.png'
import dockerIcon from '@/assets/icons/docker.png'
import nodeJsicon from '@/assets/icons/nodejs.png'
import wslIcon from '@/assets/icons/wsl.png'
import supabaseIcon from '@/assets/icons/supabase.png'
import mongoIcon from '@/assets/icons/mongo.png'
import nodeRedIcon from '@/assets/icons/node-red.png'

const iconsLanguage = [
  { name: 'PHP', src: phpIcon },
  { name: 'JavaScript', src: javascriptIcon },
  { name: 'TypeScript', src: typescriptIcon },
  { name: 'HTML5', src: htmlIcon },
  { name: 'CSS3', src: css3Icon },
  { name: 'SQL', src: sqlIcon },
  { name: 'Python', src: pythonIcon },
  { name: 'Pascal', src: pascalIcon },
  { name: 'Java', src: javaIcon },
  { name: 'C', src: cIcon },
]

const iconsFramework = [
  { name: 'Laravel', src: laravelIcon },
  { name: 'Vue', src: vueIcon },
  { name: 'Tailwind', src: tailwindIcon },
  { name: 'React', src: reactIcon },
  { name: 'WordPress', src: wordpressIcon },
  { name: 'WooCommerce', src: woocomerceIcon },
]

const iconsTools = [
  { name: 'Git', src: gitIcon },
  { name: 'Docker', src: dockerIcon },
  { name: 'Node.js', src: nodeJsicon },
  { name: 'Node-RED', src: nodeRedIcon },
  { name: 'WSL', src: wslIcon },
]

const iconsDataBase = [
  { name: 'MySQL', src: mysqlIcon },
  { name: 'PostgreSQL', src: postgresqlIcon },
  { name: 'Supabase', src: supabaseIcon },
  { name: 'MongoDB', src: mongoIcon },
]

// usamos un objeto reactivo para refs
const iconRefs = reactive({})

function triggerSpin(name) {
  const el = iconRefs[name]
  if (!el) return

  el.classList.remove('animate-spin-once')
  void el.offsetWidth
  el.classList.add('animate-spin-once')
}
</script>
<template>
  <section
    class="max-w-5xl mx-4 sm:mx-6 lg:mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] mt-16"
  >
    <h2 class="text-2xl lg:text-3xl font-bold mb-4 text-white/80">Tecnologías</h2>

    <section class="mt-8">
      <h3 class="text-xl lg:text-2xl font-semibold mb-4 text-white/80">Lenguajes</h3>
      <div class="flex flex-wrap gap-6">
        <div
          v-for="icon in iconsLanguage"
          :key="icon.name"
          class="flex flex-col items-center group cursor-pointer"
        >
          <img
            :ref="
              (el) => {
                if (el) iconRefs[icon.name] = el
              }
            "
            :src="icon.src"
            :alt="icon.name"
            class="w-8 h-8 lg:w-12 lg:h-12 transition-transform object-contain"
            @mouseenter="() => triggerSpin(icon.name)"
          />
        </div>
      </div>
    </section>
    <section class="mt-8">
      <h3 class="text-xl lg:text-2xl font-semibold mb-4 text-white/80">
        Frameworks, Librerías y CMS
      </h3>
      <div class="flex flex-wrap gap-6">
        <div
          v-for="icon in iconsFramework"
          :key="icon.name"
          class="flex flex-col items-center group cursor-pointer"
        >
          <img
            :ref="
              (el) => {
                if (el) iconRefs[icon.name] = el
              }
            "
            :src="icon.src"
            :alt="icon.name"
            class="w-8 h-8 lg:w-12 lg:h-12 transition-transform object-contain"
            @mouseenter="() => triggerSpin(icon.name)"
          />
        </div>
      </div>
    </section>
    <section class="mt-8">
      <h3 class="text-xl lg:text-2xl font-semibold mb-4 text-white/80">Herramientas</h3>
      <div class="flex flex-wrap gap-6">
        <div
          v-for="icon in iconsTools"
          :key="icon.name"
          class="flex flex-col items-center group cursor-pointer"
        >
          <img
            :ref="
              (el) => {
                if (el) iconRefs[icon.name] = el
              }
            "
            :src="icon.src"
            :alt="icon.name"
            class="w-8 h-8 lg:w-12 lg:h-12 transition-transform object-contain"
            @mouseenter="() => triggerSpin(icon.name)"
          />
        </div>
      </div>
    </section>
    <section class="mt-8">
      <h3 class="text-xl lg:text-2xl font-semibold mb-4 text-white/80">Bases de Datos</h3>
      <div class="flex flex-wrap gap-6">
        <div
          v-for="icon in iconsDataBase"
          :key="icon.name"
          class="flex flex-col items-center group cursor-pointer"
        >
          <img
            :ref="
              (el) => {
                if (el) iconRefs[icon.name] = el
              }
            "
            :src="icon.src"
            :alt="icon.name"
            class="w-8 h-8 lg:w-12 lg:h-12 transition-transform object-contain"
            @mouseenter="() => triggerSpin(icon.name)"
          />
        </div>
      </div>
    </section>
  </section>
</template>
