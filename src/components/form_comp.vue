<template>
  <div
    class="lg:p-[70px] z-[999] md:w-1/2 p-5 bg-gray rounded-[20px] max-w-[633px] bg-[#1d2939]"
  >
    <div class="">
      <p class="text-2xl font-bold mb-10 text-white">
        Book a Consultation with us
      </p>
      <form action="" class="text-sm m-auto grid gap-y-8">
        <reusable_input :placeholder="each" v-for="each in inputs_placeholders" :key="each" />
        <select
          name=""
          id=""
          placeholder="Enter your Email"
          class="outline-none w-full rounded-[8px] p-2 bg-transparent border border-[#dddd]"
        >
          <option value="">Select country</option>
        </select>
        <textarea
          placeholder="Drop a message..."
          class="border-[1px] h-32 resize-none border-[#DDDDDD80] outline-none w-full rounded-[8px] p-2 bg-transparent"
        />
        <button
          class="w-full h-[50px] font-bold p-1 bg-gradient-to-br from-[#5404ff] to-[#bd3bd2] rounded-full bg-gray-500"
        >
          Send a Request
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import reusable_input from "./reusable_input.vue";
const inputs_placeholders = ['Enter your full name', 'Enter your work email', 'Mobile number', 'Company name']

</script>
