<template>
  <section id="home" class="min-h-screen flex items-center justify-center px-4 py-20">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-8">
        <!-- Left Column - Profile Image -->
        <div class="lg:w-1/2 flex justify-center">
          <div class="relative">
            <div class="w-64 h-64 rounded-full overflow-hidden border-4 border-solid border-gray-700 bg-white">
              <img  src="/pp.jpg" alt="Profile" class="w-full h-full object-cover" />
            </div>
            <div class="absolute -bottom-2 -right-2 bg-gray-700 text-white p-2 rounded-full">
              <Code2 class="h-6 w-6" />
            </div>
          </div>
        </div>

        <!-- Right Column - Content -->
        <div class="lg:w-1/2 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-bold mb-4 text-primary">Irfan</h1>
          <p class="text-lg text-secondary mb-6">
            Mahasiswa Teknologi Informasi dalam pengembangan web dan AI
          </p>
          
          <!-- Action Buttons -->
          <div class="flex gap-4 justify-center lg:justify-start">
            <a href="/cv.pdf" class="btn btn-outline-custom">
              <Download class="h-5 w-5 mr-2" />
              Download CV
            </a>
            <a href="#contact" class="btn btn-outline-custom">
              <Mail class="h-5 w-5 mr-2" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Code2, Download, Mail } from 'lucide-vue-next'
</script>

<style scoped>
section {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-outline-custom {
  @apply border-2 border-gray-700 text-gray-700 bg-transparent font-semibold rounded-full px-6 py-2 transition-colors duration-200;
  box-shadow: none !important;
}
.btn-outline-custom:hover, .btn-outline-custom:focus {
  @apply bg-gray-700 text-white border-gray-700;
  box-shadow: none !important;
}

/* Matte border for profile photo */
.w-64.h-64.rounded-full {
  box-shadow: none !important;
  border-style: solid !important;
  border-color: #333 !important;
}
</style> 