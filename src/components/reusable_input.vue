<template>
  <input
    :placeholder="placeholder"
    class="border border-[#DDDDDD80] outline-none rounded-lg p-2 h-[53px] bg-transparent"
  />
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  placeholder: String,
});
</script>
