<template>
  <div class="max-w-3xl px-4 py-6 mx-auto rounded-md shadow-2xl">
    <div class="grid gap-4 sm:grid-cols-2">
      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-black">
            ชื่อ
          </span>
          <input type="username" name="email"
            class="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="กรุณากรอกชื่อ" />
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-black">
            นามสกุล
          </span>
          <input type="username" name="email"
            class="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="กรุณากรอกนามสกุล" />
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-black">
            Username
          </span>
          <input type="username" name="email"
            class="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="Username" />
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-black">
            Password
          </span>
          <input type="username" name="email"
            class="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="Password" />
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-black-500 block text-sm font-medium text-black">
            Email
          </span>
          <input type="username" name="email"
            class="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="Email" />
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-black">
            เบอร์โทร
          </span>
          <input type="username" name="email"
            class="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="เบอร์โทร" />
        </label>
      </div>
    </div>
    <div class="flex justify-center mt-8 ">
      <button
        class="px-5 py-3 mx-2 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none sm:text-sm focus:ring-1">
        ยืนยัน
      </button>
      <button
        class="px-5 py-3 bg-white border border-red-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none sm:text-sm focus:ring-1">
        ยกเลิก
      </button>
    </div>
  </div>

</template>
<script setup>
</script>
