<template>
  <div role="alert" class="mt-3 alert alert-success" v-if="show_alert_success">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 stroke-current w-100 shrink-0" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>สมัครสมาชิกสำเร็จ!</span>
  </div>
  <div class="max-w-3xl px-4 py-2 mx-auto rounded-md shadow-2xl mt-[50px]">
    <div class="grid gap-4 sm:grid-cols-2">
      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            ชื่อ
          </span>
          <input type="text" name="first_name" v-model="user.first_name"
            class="block w-full px-3 py-2 mt-1 text-black bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="กรุณากรอกชื่อ" />
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            นามสกุล
          </span>
          <input type="text" name="last_name" v-model="user.last_name"
            class="block w-full px-3 py-2 mt-1 text-black bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="กรุณากรอกนามสกุล" />
        </label>
      </div>

      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            Password
          </span>
          <input type="password" name="password" v-model="user.password"
            class="block w-full px-3 py-2 mt-1 text-black bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="Password" />
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-white-500 block text-sm font-medium text-white">
            Email
          </span>
          <input type="email" name="email" v-model="user.email"
            class="block w-full px-3 py-2 mt-1 text-black bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="Email" />
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            เบอร์โทร
          </span>
          <input type="tel" name="tel" v-model="user.tel"
            class="block w-full px-3 py-2 mt-1 text-black bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="เบอร์โทร" />
        </label>
      </div>
    </div>
    <div class="flex justify-center mt-8 ">
      <button @click="confirmRegister()"
        class="px-5 py-3 mx-2 bg-white border rounded-md shadow-sm border-slate-300 focus:outline-none sm:text-sm focus:ring-1">
        ยืนยัน
      </button>
      <router-link :to="{ name: 'home' }"
        class="px-5 py-3 bg-white border border-red-300 rounded-md shadow-sm focus:outline-none sm:text-sm focus:ring-1">
        ยกเลิก
      </router-link>
    </div>

  </div>

</template>
<script setup>
import { ref, reactive, onMounted } from "vue"
import { useRouter, useRoute } from "vue-router"
import { useUserAuth } from '../stores/userAuthStore.js'
const route = useRoute()
const router = useRouter()
const user_auth = useUserAuth()
const user = reactive({
  first_name: "",
  name: "1234",
  last_name: "",
  password: "",
  email: "",
  tel: ""
})

const show_alert_success = ref(false)
const show_alert_error = ref(false)


// function
const resetUser = () => {
  user.first_name = "";
  user.name = "";
  user.last_name = "";
  user.password = "";
  user.email = "";
  user.tel = "";
};

const confirmRegister = async () => {
  let response = await user_auth.sendRegister(user);
  console.log('res con', response)
  if (response.status === true) {
    show_alert_success.value = true
    resetUser()
    setTimeout(() => {
      show_alert_success.value = false
    }, 1500)
  } else {
    alert('เกิดข้อผิดพลาด')
  }
};

</script>
