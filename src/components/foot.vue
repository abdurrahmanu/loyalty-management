<template>
  <div class="sm:px-[100px] text-sm mobile:text-[16px]">
    <footer class="border-t border-t-white flex justify-between pt-6 pb-16">
      <div class="flex gap-4 max-w-[287px]">
        <home_svg />
        <p class="leading-[21.6px]">
          2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
          Nigeria.
        </p>
      </div>
      <div class="max-w-[231px]">Loyalbaze is almost here.</div>
      <div class="flex gap-4 max-w-[138px]">
        <phone_svg />
        <p>+234 903 618 9485</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import phone_svg from "./svgs/phone_svg.vue";
import home_svg from "./svgs/home_svg.vue";
</script>
