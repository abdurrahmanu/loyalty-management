<template>
  <header class="">
    <nav
      class="flex mobile:pt-16 pt-4 mobile:justify-between justify-around items-center text-white h-fit max-w-[1240px] mx-auto"
    >
      <loyalty_logo class="scale-50 mobile:scale-100" />
      <div
        class="scale-50 mobile:scale-100 p-[1px] bg-gradient-to-r from-[#5404ff] rounded-full to-[#bd3bd2]"
      >
        <button
          class="rounded-full h-[50px] max-w-[190px] min-w-[150px] bg-[#121b27] p-1 px-5 text-sm mobile:text-base"
        >
          Get Priority Access
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import loyalty_logo from "./svgs/loyalty_logo.vue";
</script>
