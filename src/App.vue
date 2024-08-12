<template>
  <div class="min-h-full ">
    <Narbar></Narbar>
    <main>
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
import Narbar from './views/Navbar.vue'
import News from './views/News.vue';



</script>