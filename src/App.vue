<template>
  <div class="min-h-full">
    <header class="shadow bg-[#c70101]">
      <div class="flex justify-between px-4 py-6 mx-auto items-center max-w-7xl sm:px-6 lg:px-8">
        <ul>
          <li>
            <router-link to="/" class="text-2xl tracking-tight text-white">OFFLINE</router-link>
          </li>

        </ul>
        <div>
          <router-link to="/register" type="button" class="p-2  text-white bg-[#1a1a1a] border-spacing-2 rounded-md">
            Register
          </router-link>
        </div>

      </div>
    </header>
    <main>
      <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>