<template>
  <div class="sm:px-[100px]">
    <div
      class="mx-auto md:flex : justify-between pt-[178px] items-center pb-[140px] max-w-[1240px] relative"
    >
      <small_ellipse class="hidden lg:block top-[138px] left-[101px]" />
      <big_star class="bottom-[60px] right-[123px]" />
      <big_star class="top-[796px] left-[495px]" />
      <small_star class="top-[265px] left-[415px]" />
      <transparent_ellipse class="top-[290px] left-0" />
      <vector_box class="hidden lg:block top-[138px] left-[486.25px]" />
      <vector_box class="hidden lg:block top-[70.25px] right-[70.25px]" />

      <div class="m-auto md:m-0 w-[100%] md:w-[42%] max-w-[525px] pb-5">
        <h1 class="text-[4rem] font-bold text-center md:text-left">
          Priority Access
        </h1>
        <ziz_zag />
        <p
          class="md:text-left text-center leading-[31.2px] text-[#fcfcfc] font-medium max-w-[525px] text-2xl"
        >
          Get ready to revolutionize the way you interact with your customers
          and drive sales with Loyalbaze. Skip the waitlist and get exclusive
          priority access to LoyalBaze. Limited slots available. Please tell us
          a bit about your business and needs and of our consultants will be in
          touch Immediately!
        </p>
      </div>
      <form_comp />
    </div>
  </div>
</template>

<script setup>
import form_comp from "./form_comp.vue";
import ziz_zag from "./svgs/ziz_zag.vue";
import vector_box from "./svgs/vector_box.vue";
import small_star from "./svgs/small_star.vue";
import small_ellipse from "./svgs/small_ellipse.vue";
import big_star from "./svgs/big_star.vue";
import transparent_ellipse from "./svgs/transparent_ellipse.vue";
</script>
