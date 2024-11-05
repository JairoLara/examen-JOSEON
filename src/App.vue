<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
</script>

<template>
  <div class="ps-8 pe-10">
    <Navbar />
    <RouterView />
  </div>
</template>
