<template>
  <Home></Home>
  <div class="">
    <div class="container grid min-h-full gap-4 mx-auto my-5 transition ease-in-out sm:grid-cols-2 ">
      <div class="border border-gray-200 rounded-md shadow-2xl">
        <div class="grid m-5 sm:grid-cols-1 ">
          <div class="mx-auto ">
            <img class="max-h-[150px] w-full"
              src="https://notebookspec.com/web/wp-content/uploads/2024/04/iphone-liquid.jpeg" alt="">
          </div>
          <div class="p-5 m-7 h-25">
            <p class="text-wrap">Magazine & Catalogues
              Magna eget est lorem ipsum dolor sit amet consectetur. Ut tortor pretium viverra suspendisse potent
              ac tortor vitae.</p>
          </div>
          <div class="pb-0 mx-auto my-5">
            <router-link class="p-3 text-white rounded-xl bg-sky-500 hover:bg-sky-700">อ่านบทความ</router-link>
          </div>
        </div>
      </div>
      <div class="border border-gray-200 rounded-md shadow-2xl ">
        <div class="grid m-5 sm:grid-cols-1 ">
          <div class="mx-auto ">
            <img class="max-h-[150px] w-full"
              src="https://notebookspec.com/web/wp-content/uploads/2024/07/6PowerBank2024.jpg" alt="">
          </div>
          <div class="p-5 m-7">
            <p>Magazine & Catalogues
              Magna eget est lorem ipsum dolor sit amet consectetur. Ut tortor pretium viverra suspendisse potenti
              nullam
              ac tortor vitae.</p>
          </div>
          <div class="pb-0 mx-auto my-5">
            <router-link class="p-3 text-white rounded-xl bg-sky-500 hover:bg-sky-700">อ่านบทความ</router-link>
          </div>
        </div>
      </div>
      <div class="border border-gray-200 rounded-md shadow-2xl ">
        <div class="grid m-5 sm:grid-cols-1">
          <div class="mx-auto">
            <!-- <img class="max-h-[150px] w-full"
              src="https://notebookspec.com/web/wp-content/uploads/2024/04/Screenshot-2024-04-10-at-1.47.21%E2%80%AFPM-1536x1214.png"
              alt=""> -->
          </div>
          <div class="p-5 m-4">
            <p>Magazine & Catalogues
              Magna eget est lorem ipsum dolor sit amet consectetur. Ut tortor pretium viverra suspendisse potenti
              nullam
              ac tortor vitae.</p>
          </div>
          <div class="pb-0 mx-auto mt-10 ">
            <router-link to="/register"
              class="p-3 text-white rounded-xl bg-sky-500 hover:bg-sky-700">อ่านบทความ</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Home from './Home.vue'


</script>
<style></style>