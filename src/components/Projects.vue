<template>
  <section id="projects" class="py-20 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-12 text-center">Proyek Saya</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project 1 -->
        <div class="card bg-base-200 hover:bg-base-300 transition-colors">
          <figure class="relative">
            <img src="https://via.placeholder.com/400x300" alt="Sistem Identifikasi Ras" class="w-full h-48 object-cover" />
            <div class="absolute top-4 right-4 flex gap-2">
              <div class="tooltip" data-tip="Python">
                <i class="devicon-python-plain colored text-2xl"></i>
              </div>
              <div class="tooltip" data-tip="TensorFlow">
                <i class="devicon-tensorflow-original colored text-2xl"></i>
              </div>
              <div class="tooltip" data-tip="OpenCV">
                <i class="devicon-opencv-plain colored text-2xl"></i>
              </div>
            </div>
          </figure>
          <div class="card-body">
            <h3 class="card-title">Sistem Identifikasi Ras</h3>
            <p>Sistem identifikasi ras menggunakan CNN dan TensorFlow untuk klasifikasi gambar</p>
            <div class="card-actions justify-end mt-4">
              <a href="#" class="btn btn-primary">
                <Eye class="h-4 w-4 mr-2" />
                Lihat Proyek
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="card bg-base-200 hover:bg-base-300 transition-colors">
          <figure class="relative">
            <img src="https://via.placeholder.com/400x300" alt="Asisten Virtual Pembelajaran" class="w-full h-48 object-cover" />
            <div class="absolute top-4 right-4 flex gap-2">
              <div class="tooltip" data-tip="Python">
                <i class="devicon-python-plain colored text-2xl"></i>
              </div>
              <div class="tooltip" data-tip="NLTK">
                <i class="devicon-nltk-plain colored text-2xl"></i>
              </div>
              <div class="tooltip" data-tip="Flask">
                <i class="devicon-flask-original colored text-2xl"></i>
              </div>
            </div>
          </figure>
          <div class="card-body">
            <h3 class="card-title">Asisten Virtual Pembelajaran</h3>
            <p>Chatbot pembelajaran yang menggunakan NLP untuk membantu proses belajar</p>
            <div class="card-actions justify-end mt-4">
              <a href="#" class="btn btn-primary">
                <Eye class="h-4 w-4 mr-2" />
                Lihat Proyek
              </a>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="card bg-base-200 hover:bg-base-300 transition-colors">
          <figure class="relative">
            <img src="https://via.placeholder.com/400x300" alt="Sistem Manajemen Arsip & Pegawai" class="w-full h-48 object-cover" />
            <div class="absolute top-4 right-4 flex gap-2">
              <div class="tooltip" data-tip="Laravel">
                <i class="devicon-laravel-plain colored text-2xl"></i>
              </div>
              <div class="tooltip" data-tip="PHP">
                <i class="devicon-php-plain colored text-2xl"></i>
              </div>
              <div class="tooltip" data-tip="MySQL">
                <i class="devicon-mysql-plain colored text-2xl"></i>
              </div>
            </div>
          </figure>
          <div class="card-body">
            <h3 class="card-title">Sistem Manajemen Arsip & Pegawai</h3>
            <p>Aplikasi manajemen arsip dan pegawai berbasis Laravel untuk Biro Kesejahteraan Rakyat.</p>
            <div class="card-actions justify-end mt-4">
              <a href="#" class="btn btn-primary">
                <Eye class="h-4 w-4 mr-2" />
                Lihat Proyek
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Eye } from 'lucide-vue-next'
</script>

<style scoped>
section#projects {
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

/* Project card hover effects */
.card {
  @apply transition-all duration-300;
}

.card:hover {
  @apply transform -translate-y-1;
}

/* Project image styles */
figure img {
  @apply transition-all duration-300;
}

.card:hover figure img {
  @apply transform scale-105;
}

/* Project title styles */
.card-title {
  @apply transition-colors duration-300;
}

.card:hover .card-title {
  @apply text-primary;
}
</style> 