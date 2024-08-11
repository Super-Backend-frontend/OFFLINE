<template>
  <div class="px-4 py-6 mx-auto max-w-3xl bg-[#c70101] rounded-md">
    <div class="grid gap-4 sm:grid-cols-1">
      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            ชื่อ
          </span>
          <input type="username" name="email"
            class="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="กรุณากรอกชื่อ" />
        </label>
      </div>
      <div>
        <label class="block">
          <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
            นามสกุล
          </span>
          <input type="username" name="email"
            class="block w-full px-3 py-2 mt-1 bg-white border rounded-md shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
            placeholder="กรุณากรอกนามสกุล" />
        </label>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
