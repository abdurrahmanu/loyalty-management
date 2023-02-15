<template>
  <div
    :class="[i % 2 !== 0 ? `bg-[#175CE1]` : `bg-[#A75FD2]`]"
    class="w-8 h-8 grid place-content-center ml-[-7px] border border-gray-500 rounded-full"
  >
    {{ name }}
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  name: String,
  i: Number,
});
</script>
