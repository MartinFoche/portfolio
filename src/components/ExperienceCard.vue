<script setup>
const experience = [
  {
    id: 1,
    role: 'Freelance Developer',
    company: 'Distrimaq',
    period: 'Junio 2025 - Actualidad',
    responsibilities: [
      'Desarrollo de una aplicación web orientada a la gestión comercial de una distribuidora',
      'Diseño e implementación de flujos de pedidos y gestión de productos”',
      'Manejo de autenticación y permisos de usuario',
      'Enfoque en mantenibilidad, escalabilidad y experiencia de uso',
    ],
    stack: ['Laravel', 'Inertia.js', 'Vue.js', 'Tailwind CSS', 'MySQL', 'API WhatsApp'],
  },
  {
    id: 2,
    role: 'Desarrollador Full-Stack',
    company: 'RebaseIT',
    period: 'Agosto 2023 - Agosto 2025',
    responsibilities: [
      'Participación en múltiples proyectos web para clientes, trabajando tanto en mantenimiento como en nuevas funcionalidades',
      'Ajustes de UI/UX, formularios y validaciones',
      'Trabajo con distintos stacks y bases de código existentes',
      'Colaboración en entornos con Docker y control de versiones',
    ],
    stack: [
      'Laravel',
      'Vue.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Docker',
      'Git',
      'MySQL',
      'TypeScript',
      'WordPress',
      'WooCommerce',
    ],
  },
  {
    id: 3,
    role: 'Asistente Técnico',
    company: 'Maxirest',
    period: '2023',
    responsibilities: [
      'Soporte técnico y documentación de sistemas internos',
      'Diagramación de flujos e integraciones',
      'Estandarización de documentación técnica',
    ],
    stack: ['NodeRed'],
  },
]
</script>
<template>
  <section
    class="max-w-5xl mx-4 sm:mx-6 lg:mx-auto px-6 py-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] mt-16"
  >
    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-white/80">Experiencia</h2>

    <div class="space-y-6">
      <div
        v-for="job in experience"
        :key="job.id"
        class="p-6 rounded-xl bg-white/5 border border-white/10"
      >
        <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 class="text-lg md:text-xl font-semibold text-white/90">
              {{ job.role }} · {{ job.company }}
            </h3>
            <span class="text-xs md:text-sm text-white/50">
              {{ job.period }}
            </span>
          </div>
        </div>
        <p class="text-sm md:text-base text-white/80 font-medium mb-3">
          {{ job.responsibilities[0] }}
        </p>
        <ul class="text-sm md:text-base list-disc list-inside text-gray-300 space-y-1 mb-4">
          <li v-for="(r, i) in job.responsibilities.slice(1)" :key="i">
            {{ r }}
          </li>
        </ul>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in job.stack"
            :key="tech"
            class="px-3 py-1 text-xs md:text-sm rounded-full bg-white/10 text-white/70"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
