<script setup>
import foot from "./components/foot.vue";
import navbar from "./components/nav.vue";
import Loyal_fans from "./components/loyal_fans.vue";
import Priority_access from "./components/priority_access.vue";
</script>

<template>
  <div class="bg-primary_bg sm:p-0 p-6 font-sans text-white overflow-hidden">
    <div class="md:pb-[157px] relative sm:px-[100px]">
      <navbar />
      <loyal_fans />
    </div>
    <Priority_access />
    <foot />
  </div>
</template>
