<template>
  <section id="contact" class="py-20 px-4">
    <div class="container mx-auto max-w-2xl">
      <h2 class="text-3xl font-bold mb-12 text-center">Hubungi Saya</h2>
      
      <form class="card bg-base-200 p-6" @submit.prevent="handleSubmit">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Nama</span>
          </label>
          <div class="relative">
            <User class="absolute left-3 top-3 h-5 w-5 text-secondary" />
            <input 
              type="text" 
              placeholder="Masukkan nama Anda" 
              class="input input-bordered w-full pl-10" 
              v-model="form.name"
              required
            />
          </div>
        </div>

        <div class="form-control mt-4">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <div class="relative">
            <Mail class="absolute left-3 top-3 h-5 w-5 text-secondary" />
            <input 
              type="email" 
              placeholder="Masukkan email Anda" 
              class="input input-bordered w-full pl-10" 
              v-model="form.email"
              required
            />
          </div>
        </div>

        <div class="form-control mt-4">
          <label class="label">
            <span class="label-text">Pesan</span>
          </label>
          <div class="relative">
            <MessageSquare class="absolute left-3 top-3 h-5 w-5 text-secondary" />
            <textarea 
              class="textarea textarea-bordered w-full pl-10 min-h-[150px]" 
              placeholder="Masukkan pesan Anda"
              v-model="form.message"
              required
            ></textarea>
          </div>
        </div>

        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary">
            <Send class="h-5 w-5 mr-2" />
            Kirim Pesan
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { User, Mail, MessageSquare, Send } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission here
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}
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