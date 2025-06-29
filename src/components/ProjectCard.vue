<template>
  <div class="card w-80 bg-base-100 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in">
    <figure>
      <img :src="project.image" alt="project image" class="h-48 w-full object-cover" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="card-actions justify-end">
        <a :href="project.link" target="_blank" class="btn btn-primary">View</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object
})
</script>
