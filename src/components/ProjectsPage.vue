<script setup>
import fermanImage from '@/assets/projects/ferman.png'
import rebaseitImage from '@/assets/projects/rebaseit.png'
import verifarmaImage from '@/assets/projects/verifarma.jpg'
import portafolioImage from '@/assets/projects/portafolio.png'
import distrimaqImage from '@/assets/projects/distrimaq.png'
import vueIcon from '@/assets/icons/vue.svg.png'
import laravelIcon from '@/assets/icons/laravel.svg.png'
import tailwindIcon from '@/assets/icons/tailwind.svg.png'
import typescriptIcon from '@/assets/icons/typescript.png'
import javascriptIcon from '@/assets/icons/javascript.png'
import htmlIcon from '@/assets/icons/HTML5.svg.png'
import css3Icon from '@/assets/icons/CSS3.svg.png'
import phpIcon from '@/assets/icons/php.svg.png'
import mysqlIcon from '@/assets/icons/mysql.png'
import wordpressIcon from '@/assets/icons/wordpress.png'
import woocomerceIcon from '@/assets/icons/woocommerce.png'
import whatsAppIcon from '@/assets/icons/whatsapp.png'
import inertiaIcon from '@/assets/icons/inertia.png'

const projects = [
  {
    id: 1,
    title: 'E-commerce para Encendido Ferman',
    description:
      'Rediseño de la página principal y reconstrucción completa de la vista de productos, junto con mejoras en configuraciones de usuario.',
    tech: [
      { icon: phpIcon, name: 'PHP' },
      { icon: javascriptIcon, name: 'Javascript' },
      { icon: htmlIcon, name: 'HTML' },
      { icon: css3Icon, name: 'CSS' },
      { icon: wordpressIcon, name: 'WordPress' },
      { icon: woocomerceIcon, name: 'WooCommerce' },
    ],
    link: 'https://encendidoferman.com.ar',
    image: fermanImage,
  },
  {
    id: 2,
    title: 'Página web oficial de RebaseIT',
    description:
      'Mejoras visuales y funcionales en la web corporativa de RebaseIT, incluyendo estilos, formularios, sección de testimonios y optimización del sistema de idiomas y traducciones',
    tech: [
      { icon: vueIcon, name: 'Vue' },
      { icon: javascriptIcon, name: 'Javascript' },
      { icon: htmlIcon, name: 'HTML' },
      { icon: css3Icon, name: 'CSS' },
    ],
    link: 'https://rebaseit.tech',
    image: rebaseitImage,
  },
  {
    id: 3,
    title: 'Portfolio Personal',
    description:
      'Desarrollo de portfolio personal para presentar proyectos, tecnologías y experiencia, con foco en diseño moderno, animaciones sutiles y experiencia de usuario.',
    tech: [
      { icon: vueIcon, name: 'Vue' },
      { icon: tailwindIcon, name: 'Tailwind' },
      { icon: typescriptIcon, name: 'TypeScript' },
      { icon: htmlIcon, name: 'HTML' },
      { icon: css3Icon, name: 'CSS' },
    ],
    link: '#hero',
    image: portafolioImage,
  },
  {
    id: 4,
    title: 'Página web oficial de Verifarma',
    description:
      'Mejora y mantenimiento de formularios internos, corrección de flujos relacionados a la gestión de lotes y ajustes funcionales sobre un sistema existente.',
    tech: [
      { icon: laravelIcon, name: 'Laravel' },
      { icon: javascriptIcon, name: 'Javascript' },
      { icon: htmlIcon, name: 'HTML' },
      { icon: css3Icon, name: 'CSS' },
    ],
    link: 'https://www.verifarma.com/',
    image: verifarmaImage,
  },
  {
    id: 5,
    title: 'Catálogo de Productos para Distrimaq — En desarrollo',
    description:
      'Catálogo de productos con carrito persistente y gestión administrativa, que permite enviar pedidos generados desde el carrito vía WhatsApp.',
    tech: [
      { icon: laravelIcon, name: 'Laravel' },
      { icon: vueIcon, name: 'Vue' },
      { icon: tailwindIcon, name: 'Tailwind' },
      { icon: mysqlIcon, name: 'MySQL' },
      { icon: whatsAppIcon, name: 'API WhatsApp' },
      { icon: inertiaIcon, name: 'Inertia.js' },
      { icon: htmlIcon, name: 'HTML' },
      { icon: css3Icon, name: 'CSS' },
      { icon: javascriptIcon, name: 'Javascript' },
    ],
    link: 'https://github.com/MartinFoche/distrimaq',
    image: distrimaqImage,
  },
]
</script>
<template>
  <section
    class="max-w-5xl mx-4 sm:mx-6 lg:mx-auto px-6 py-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] mt-16"
  >
    <h2 class="text-3xl font-bold mb-6 text-white/80">Proyectos</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <a
        v-for="(p, index) in projects"
        :key="p.title"
        :href="p.link"
        :target="p.link.startsWith('#') ? '_self' : '_blank'"
        rel="noopener noreferrer"
        :class="[
          'group relative block p-6 rounded-2xl bg-white/5 border border-white/10 \
          shadow-[0_0_15px_rgba(255,255,255,0.1)] \
          hover:border-neon-purple hover:shadow-[0_0_20px_#6e05cfff] \
          transition duration-500 hover:scale-[1.03]',
          projects.length % 2 !== 0 && index === projects.length - 1
            ? 'md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto'
            : '',
        ]"
      >
        <div class="relative mb-4">
          <div
            class="absolute top-2 left-2 z-10 flex gap-2 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-lg transition-transform duration-500"
          >
            <img
              v-for="tech in p.tech"
              :key="tech.name"
              :src="tech.icon"
              :alt="tech.name"
              class="w-3 h-3 sm:w-5 sm:h-5 md:w-7 md:h-7 object-contain opacity-40 group-hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          <img
            v-if="p.image"
            :src="p.image"
            :alt="`Imagen del proyecto ${p.title}`"
            class="w-full aspect-[16/9] object-cover rounded-xl shadow-md transition-transform duration-500"
          />
        </div>
        <h3
          class="text-xl lg:text-2xl font-semibold mb-2 text-white/80 underline underline-offset-4 decoration-1"
        >
          {{ p.title }}
        </h3>
        <p class="text-sm md:text-base text-gray-300">
          {{ p.description }}
        </p>
      </a>
    </div>
  </section>
</template>
