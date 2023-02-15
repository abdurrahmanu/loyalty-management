<template>
  <div class="-z-[999] text-center pt-[122px] grid">
    <Big_ellipse class="top-[382px] -right-5" />
    <Medium_elipse class="hidden md:block top-[231px] left-[31px]" />
    <Small_ellipse class="top-32 right-[313px]" />
    <Small_star class="top-[314px] right-[249px]" />
    <Small_star class="top-[216px] left-[462px]" />
    <big_star class="hidden md:block top-[799px] right-[100px]" />
    <big_star class="hidden md:block top-[873px] left-[157px]" />
    <transparent_ellipse class="-top-[20px] translate-x-[90%]" />
    <curve_arrow class="bottom-[321.86px] right-[311.52px]" />

    <h1
      class="m-auto z-[999] font-bold text-[64px] max-w-[802px] leading-[83.2px] mb-3"
    >
      Turn your best customers into
      <span class="text-[#a75fd2]">Loyal fans</span>
    </h1>
    <p class="m-auto z-[999] max-w-[938px] text-2xl mb-12 text-[#fcfcfc]">
      Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
      programs to their customers. With our AI Powered platform, you can easily
      create and manage custom loyalty and rewards programs, track customer
      engagement, and gain valuable insights to improve your business. Sign up
      now to get early access.
    </p>
    <div class="z-[999]">
      <div class="text-center grid gap-y-6 m-auto max-w-[443px] bg-yellow">
        <div
          class="flex max-w-[443px] justify-start px-[14px] py-[30px] gap-2 items-center h-[52px] border border-white rounded-lg"
        >
          <user_svg />
          <input
            placeholder="Tell us your name"
            class="outline-none w-full bg-transparent"
          />
        </div>

        <div
          class="flex max-w-[443px] justify-start px-[14px] py-[30px] gap-2 items-center border border-white h-[52px] rounded-lg"
        >
          <email_svg />
          <input
            placeholder="Enter your emai address"
            class="outline-none w-full rounded-[8px] bg-transparent"
          />
        </div>

        <button
          class="w-full p-1 rounded-full bg-gradient-to-br from-[#5404ff] to-[#bd3bd2] h-[50px]"
        >
          Get early access
        </button>

        <div class="flex justify-center items-center">
          <round_head :name="name" :i="i" v-for="(name, i) in names" :key="i" />
          <span class="ml-2">+57 joined</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import user_svg from "./svgs/user_svg.vue";
import email_svg from "./svgs/email_svg.vue";
import round_head from "./round_head.vue";
import curve_arrow from "./svgs/curve_arrow.vue";
import Big_ellipse from "./svgs/big_ellipse.vue";
import Medium_elipse from "./svgs/medium_elipse.vue";
import Small_ellipse from "./svgs/small_ellipse.vue";
import Small_star from "./svgs/small_star.vue";
import big_star from "./svgs/big_star.vue";
import transparent_ellipse from "./svgs/transparent_ellipse.vue";
const names = ["G", "O", "U", "M"];
</script>

<style></style>
