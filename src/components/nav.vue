<template>
  <header class="">
    <nav
      class="flex pt-16 justify-between items-center text-white h-fit max-w-[1240px] mx-auto"
    >
      <loyalty_logo />
      <div
        class="p-[1px] bg-gradient-to-r from-[#5404ff] rounded-full to-[#bd3bd2]"
      >
        <button
          class="rounded-full h-[50px] w-[190px] bg-[#121b27] p-1 px-5 text-sm"
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
