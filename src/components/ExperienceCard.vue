<script setup>
const experience = [
  {
    id: 0,
    role: 'Desarrollador de Software',
    company: 'MSI Integración de Sistemas',
    period: 'Agosto 2026 - Noviembre 2026',
    responsibilities: [
      'Desarrollo de soluciones de software empresariales e industriales utilizando Python, TypeScript y tecnologías web',
      'Implementación de aplicaciones internas para gestión de jornadas laborales, vacaciones, servicios y seguimiento de proyectos',
      'Desarrollo de dashboards de métricas, tableros Kanban para análisis y planificación de tareas mediante metodologías ágiles',
      'Desarrollo de sistemas de gestión de activos e infraestructura con FastAPI, Vue.js y PostgreSQL',
      'Integración y optimización de procedimientos almacenados en SQL Server, junto con tareas de monitoreo y diagnóstico de redes',
      'Desarrollo de una solución de monitoreo industrial mediante integración con PLC y Node-RED para la captura, trazabilidad de variables operativas y consumo energético',
      'Utilización de herramientas de IA como Claude Code para asistir en el desarrollo, documentación y análisis de código',
    ],
    stack: [
      'Python',
      'TypeScript',
      'JavaScript',
      'React',
      'Vue.js',
      'FastAPI',
      'PostgreSQL',
      'SQL Server',
      'Node-RED',
      'PLC',
      'Git',
    ],
  },
  {
    id: 1,
    role: 'Tesina',
    company: 'Licenciatura en Sistemas de Información',
    period: 'Julio 2026',
    responsibilities: [
      'Investigación, implementacion y análisis de arquitecturas de Deep Learning para reconocimiento de acciones en video',
      'Implementación y entrenamiento de modelos R(2+1)D utilizando Python y PyTorch',
      'Preprocesamiento, organización y preparación de datasets de video para entrenamiento y validación',
      'Evaluación del rendimiento de los modelos mediante métricas de clasificación y análisis de resultados',
      'Comparación de enfoques y optimización de hiperparámetros para mejorar la precisión del modelo',
      'Documentación técnica y elaboración de una tesina académica sobre visión por computadora y aprendizaje profundo',
    ],
    stack: ['Python']
  },
  {
    id: 2,
    role: 'Freelance Developer',
    company: 'Distrimaq',
    period: 'Junio 2025 - Actualidad',
    responsibilities: [
      'Desarrollo de una aplicación web orientada a la gestión comercial de una distribuidora',
      'Diseño e implementación de flujos de pedidos y gestión de productos”',
      'Manejo de autenticación y permisos de usuario',
      'Enfoque en mantenibilidad, escalabilidad y experiencia de uso',
    ],
    stack: ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'Firebase', 'Cloudinary'],
  },
  {
    id: 3,
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
    id: 4,
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
