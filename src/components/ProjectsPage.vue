<script setup>
import fermanImage from '@/assets/projects/ferman.png'
import rebaseitImage from '@/assets/projects/rebaseit.png'
import verifarmaImage from '@/assets/projects/verifarma.jpg'
import portafolioImage from '@/assets/projects/portafolio.png'
import distrimaqImage from '@/assets/projects/distrimaq.png'
import appTesinaImage from '@/assets/projects/appTesina.png'
import vueIcon from '@/assets/icons/vue.svg.png'
import laravelIcon from '@/assets/icons/laravel.svg.png'
import tailwindIcon from '@/assets/icons/tailwind.svg.png'
import typescriptIcon from '@/assets/icons/typescript.png'
import javascriptIcon from '@/assets/icons/javascript.png'
import htmlIcon from '@/assets/icons/HTML5.svg.png'
import css3Icon from '@/assets/icons/CSS3.svg.png'
import phpIcon from '@/assets/icons/php.svg.png'
import wordpressIcon from '@/assets/icons/wordpress.png'
import woocomerceIcon from '@/assets/icons/woocommerce.png'
import firebaseIcon from '@/assets/icons/firebaseIcon.png'
import cloudinaryIcon from '@/assets/icons/cloudinary.webp'
import pythonIcon from '@/assets/icons/python.svg.png'
import postgresqlIcon from '@/assets/icons/postgresqlIcon.webp'
import fastApiIcon from '@/assets/icons/fastapiIcon.webp'
import reactIcon from '@/assets/icons/react.svg.png'
import msiSistemaGestion from '@/assets/projects/msi-sistema-gestion.png'
import MSIDash from '@/assets/projects/MSIDash.jpeg'
import MSIApp from '@/assets/projects/MSIApp.jpeg'
import fadelImage from '@/assets/projects/fadel.png'
import inprocilImage from '@/assets/projects/inprocil.png'
import sqlServerIcon from '@/assets/icons/sqlServer.webp'
import nodeRedIcon from '@/assets/icons/node-red-icon.png'

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
    title: 'Catálogo de Productos para Distrimaq',
    description:
      'Catálogo de productos con acceso público y autenticación de usuarios, que permite la gestión administrativa mediante operaciones CRUD utilizando Firebase e imagenes guardadas en Cloudinary.',
    tech: [
      { icon: vueIcon, name: 'Vue' },
      { icon: htmlIcon, name: 'HTML' },
      { icon: css3Icon, name: 'CSS' },
      { icon: javascriptIcon, name: 'Javascript' },
      { icon: firebaseIcon, name: 'Firebase' },
      { icon: cloudinaryIcon, name: 'Cloudinary' },
    ],
    link: 'https://github.com/MartinFoche/catalogo-distrimaq',
    image: distrimaqImage,
  },
  {
    id: 6,
    title:'Tesina de grado',
    description:
    'Investigación, implementación y análisis de modelos R(2+1)D para reconocimiento de acciones en video, incluyendo procesamiento de datasets, entrenamiento de redes neuronales profundas y análisis de métricas de rendimiento.',
    tech: [
      { icon: pythonIcon, name: 'Python' }, 
    ],
    link: 'https://github.com/MartinFoche/tesina',
    image: appTesinaImage,
  },
  {
    id: 7,
    title:'App MSI',
    description:
    'Aplicación de escritorio para gestión de horarios, jornadas laborales, vacaciones, servicios y proyectos, con funcionalidades de seguimiento de actividades y registro de horas.',
    tech: [
      { icon: pythonIcon, name: 'Python' }, 
      { icon: typescriptIcon, name: 'TypeScript' },
      { icon: postgresqlIcon, name: 'PostgreSQL' },
    ],
    image: MSIApp,
  },
  {
    id: 8,
    title:'MSI Dashboard de métricas y tablero Kanban',
    description:
    'Dashboard web para visualizar métricas de proyectos, comparar horas de trabajo, analizar tareas internas y consultar resúmenes trimestrales. Incluye un tablero Kanban desarrollado desde cero e integrado para la planificación y seguimiento de tareas mediante reuniones Scrum.',
    tech: [
      { icon: reactIcon, name: 'React' },
      { icon: typescriptIcon, name: 'TypeScript'},
      { icon: postgresqlIcon, name: 'PostgreSQL'},
    ],
    image: MSIDash,
  },
  {
    id: 9,
    title:'MSI Sistema de Gestión de Infraestructura',
    description:
    'Aplicación web para administrar equipamiento, asignaciones, proveedores, clientes y accesos remotos, centralizando información de infraestructura y referencias a credenciales almacenadas en Vaultwarden.',
    tech: [
      { icon: pythonIcon, name: 'Python' }, 
      { icon: fastApiIcon, name: 'FastAPI'},
      { icon: vueIcon, name: 'Vue'},
      { icon: typescriptIcon, name: 'TypeScript'},
      { icon: postgresqlIcon, name: 'PostgreSQL'},
    ],
    image: msiSistemaGestion,
  },
  {
    id: 10,
    title:'MSI Integración y optimización de datos para Fadel',
    description:
    'Mantenimiento y optimización de procedimientos almacenados en SQL Server para consultar historiales de cajas y pallets. También se realizaron tareas de monitoreo de red para detectar interrupciones, latencia, nuevos dispositivos y eventos de conectividad.',
    tech: [
      { icon: pythonIcon, name: 'Python' }, 
      { icon: sqlServerIcon, name: 'SQL Server'},
    ],
    image: fadelImage,
  },
  
  {
    id: 11,
    title:'Sistema de monitoreo industrial para Inprocil',
    description:
    'Desarrollo de una solución de captura y almacenamiento de datos industriales a partir de un PLC existente. Implementación de flujos en Node-RED y persistencia en PostgreSQL para registrar presión, temperatura, consumo energético y marcas temporales, proporcionando información confiable y trazable.',
    tech: [
      { icon: pythonIcon, name: 'Python' }, 
      { icon: nodeRedIcon, name: 'Node-RED'},
      { icon: postgresqlIcon, name: 'PostgreSQL'},
    ],
    image: inprocilImage,
  }
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
        :href="p.link || '#'"
        @click="!p.link && $event.preventDefault()"
        :target="p.link?.startsWith('#') || !p.link ? '_self' : '_blank'"
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
