<template>
  <div class="min-h-screen bg-base-100" :data-theme="isDark ? 'dark' : 'light'">
    <!-- Desktop Navigation -->
    <nav class="navbar bg-base-100 shadow-lg fixed top-0 z-50 hidden lg:flex">
      <div class="navbar-start">
        <a class="btn btn-ghost text-xl">My Portfolio</a>
      </div>
      
      <div class="navbar-center">
        <ul class="menu menu-horizontal px-1">
          <li><a href="#home" class="hover:text-primary">Home</a></li>
          <li><a href="#about" class="hover:text-primary">About</a></li>
          <li><a href="#projects" class="hover:text-primary">Projects</a></li>
          <li><a href="#contact" class="hover:text-primary">Contact</a></li>
        </ul>
      </div>
      
      <div class="navbar-end">
        <!-- Dark mode toggle -->
        <button class="btn btn-ghost btn-circle" @click="toggleDarkMode">
          <Sun v-if="isDark" class="h-5 w-5" />
          <Moon v-else class="h-5 w-5" />
        </button>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16 pb-20 lg:pb-0">
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>

    <!-- Mobile Navigation -->
    <nav class="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div class="flex items-center gap-1 bg-base-100/80 backdrop-blur-sm shadow-lg rounded-full p-1">
        <a href="#home" class="nav-item" :class="{ 'active': currentSection === 'home' }">
          <div class="nav-icon">
            <HomeIcon class="h-5 w-5" />
          </div>
        </a>
        <a href="#about" class="nav-item" :class="{ 'active': currentSection === 'about' }">
          <div class="nav-icon">
            <User class="h-5 w-5" />
          </div>
        </a>
        <a href="#projects" class="nav-item" :class="{ 'active': currentSection === 'projects' }">
          <div class="nav-icon">
            <FolderGit2 class="h-5 w-5" />
          </div>
        </a>
        <a href="#contact" class="nav-item" :class="{ 'active': currentSection === 'contact' }">
          <div class="nav-icon">
            <Mail class="h-5 w-5" />
          </div>
        </a>
        <div class="h-8 w-px bg-base-300 mx-1"></div>
        <button class="nav-item" @click="toggleDarkMode">
          <div class="nav-icon">
            <Sun v-if="isDark" class="h-5 w-5" />
            <Moon v-else class="h-5 w-5" />
          </div>
        </button>
      </div>
    </nav>

    <!-- Footer -->
    <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav class="grid grid-flow-col gap-4">
        <a href="https://github.com" target="_blank" class="link link-hover hover:text-primary">
          <Github class="h-6 w-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" class="link link-hover hover:text-primary">
          <Linkedin class="h-6 w-6" />
        </a>
        <a href="https://instagram.com" target="_blank" class="link link-hover hover:text-primary">
          <Instagram class="h-6 w-6" />
        </a>
      </nav> 
      <aside>
        <p>Copyright © 2024 - All rights reserved</p>
      </aside>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon, Github, Linkedin, Instagram, HomeIcon, User, FolderGit2, Mail } from 'lucide-vue-next'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const isDark = ref(false)
const currentSection = ref('home')

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  // Update theme in localStorage
  localStorage.setItem('darkMode', isDark.value)
  // Update data-theme attribute
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
}

const handleScroll = () => {
  const sections = ['home', 'about', 'projects', 'contact']
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        currentSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('darkMode')
  if (savedTheme === 'true') {
    isDark.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }

  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
/* Local styles for App.vue */
[data-theme="light"] .nav-item:hover .nav-icon {
  @apply bg-gray-800 text-white transform -translate-y-1;
}

[data-theme="dark"] .nav-item:hover .nav-icon {
  @apply bg-primary text-white transform -translate-y-1;
}

[data-theme="light"] .menu li a {
  @apply text-gray-800 hover:text-gray-900;
}

[data-theme="light"] .text-base-content {
  @apply text-gray-800;
}

[data-theme="light"] .btn-ghost {
  @apply text-gray-800 hover:bg-gray-100;
}

[data-theme="light"] .btn-primary {
  @apply bg-gray-800 text-white hover:bg-gray-900;
}
</style>
