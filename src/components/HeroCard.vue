<template>
  <section class="text-center flex flex-col items-center gap-4">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">
      <span
        class="font-inter inline-block overflow-hidden whitespace-nowrap text-white border-r-4 border-white leading-tight animate-[typing_2s_steps(20),blink_.7s_step-end_infinite]"
        >Hola, soy Martín</span
      >
    </h1>
    <h2 class="text-lg sm:text-xl text-gray-400">Desarrollador Web • Laravel & Vue</h2>
  </section>
</template>
<style>
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
