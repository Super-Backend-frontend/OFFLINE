<template>
  <header class="p-2 bg-white border-b-4 border-bg-[#c70101] z-40">
    <nav class="flex justify-between items-center w-full md:w-[92%]  mx-auto">
      <div>
        FIXPHONECNX
      </div>
      <div :class="nav_bar == true ? 'top-[-9%]' : 'top-[-100%]'"
        class="nav-links duration-700 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 md:w-auto w-full flex items-center px-5">
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <div class="w-full md:hidden">
              FIXPHONECNX
            </div>
            <hr class="w-full md:hidden">
          </li>
          <li>
            <router-link :to="{ name: 'home' }" class="transition duration-300 ease-in-out hover:duration-350"
              href="#">หน้าแรก</router-link>
          </li>

          <li>
            <a class="hover:text-gray-500" href="#">สินค้า</a>
          </li>
          <li>
            <a class="hover:text-gray-500" href="#">เกี่ยวกับเรา</a>
          </li>
          <li>
            <router-link :to="{ name: 'news' }" class="hover:text-gray-500" href="#">ข่าวสาร</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'contact' }" class="hover:text-gray-500" href="#">ติดต่อเรา</router-link>
          </li>
        </ul>
      </div>
      <div class="flex items-center gap-6">
        <router-link :to="{ name: 'register' }"
          class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign
          in</router-link>
        <ion-icon @click="onToggleMenu()" :name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const nav_bar = ref(false)
const menu = ref('menu')

function onToggleMenu() {
  nav_bar.value = !nav_bar.value
  menu.value = nav_bar.value ? 'close' : 'menu';
  console.log(RouterView)
}

</script>
