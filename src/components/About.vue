<template>
  <section id="about" class="py-20 px-4">
    <div class="container mx-auto">
      <!-- Tentang Saya Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-8 text-center">Tentang Saya</h2>
        <p class="text-lg text-secondary max-w-3xl mx-auto text-center">
          Saya mahasiswa Teknik Informatika dengan minat kuat di pengembangan web, khususnya menggunakan PHP (Laravel). Memiliki pemahaman yang baik dalam JavaScript, HTML, dan CSS. Senang memecahkan masalah, membangun aplikasi web fungsional, dan terus belajar teknologi baru.
        </p>
      </div>

      <!-- Spesialisasi Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold mb-8 text-center">Spesialisasi</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="card bg-base-200 hover:bg-base-300 transition-colors">
            <div class="card-body items-center text-center">
              <Code2 class="h-12 w-12 text-primary mb-4" />
              <h3 class="card-title">Programming</h3>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="badge badge-primary">TypeScript</span>
                <span class="badge badge-primary">JavaScript</span>
                <span class="badge badge-primary">PHP</span>
              </div>
            </div>
          </div>

          <div class="card bg-base-200 hover:bg-base-300 transition-colors">
            <div class="card-body items-center text-center">
              <Layers class="h-12 w-12 text-primary mb-4" />
              <h3 class="card-title">Frameworks</h3>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="badge badge-primary">Next.js</span>
                <span class="badge badge-primary">React</span>
                <span class="badge badge-primary">Laravel</span>
              </div>
            </div>
          </div>

          <div class="card bg-base-200 hover:bg-base-300 transition-colors">
            <div class="card-body items-center text-center">
              <Palette class="h-12 w-12 text-primary mb-4" />
              <h3 class="card-title">Styling</h3>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="badge badge-primary">TailwindCSS</span>
                <span class="badge badge-primary">DaisyUI</span>
                <span class="badge badge-primary">Bootstrap</span>
              </div>
            </div>
          </div>

          <div class="card bg-base-200 hover:bg-base-300 transition-colors">
            <div class="card-body items-center text-center">
              <Brain class="h-12 w-12 text-primary mb-4" />
              <h3 class="card-title">AI & ML</h3>
              <div class="flex flex-wrap gap-2 justify-center">
                <span class="badge badge-primary">Deep Learning</span>
                <span class="badge badge-primary">CNN</span>
                <span class="badge badge-primary">NLP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Skill Tambahan Section -->
      <div>
        <h2 class="text-3xl font-bold mb-8 text-center">Skill Tambahan</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card bg-base-200 hover:bg-base-300 transition-colors">
            <div class="card-body">
              <Brain class="h-8 w-8 text-primary mb-4" />
              <h3 class="card-title">Deep Learning</h3>
              <p>Pengembangan sistem identifikasi ras menggunakan CNN dan TensorFlow</p>
            </div>
          </div>

          <div class="card bg-base-200 hover:bg-base-300 transition-colors">
            <div class="card-body">
              <MessageSquare class="h-8 w-8 text-primary mb-4" />
              <h3 class="card-title">NLP</h3>
              <p>Pembuatan asisten virtual pembelajaran menggunakan teknik NLP dan chatbot</p>
            </div>
          </div>

          <div class="card bg-base-200 hover:bg-base-300 transition-colors">
            <div class="card-body">
              <Globe class="h-8 w-8 text-primary mb-4" />
              <h3 class="card-title">Web Development</h3>
              <p>Pengembangan website kreatif, forum, dan portfolio menggunakan teknologi modern</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Code2, Layers, Palette, Brain, MessageSquare, Globe } from 'lucide-vue-next'
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
</style> 