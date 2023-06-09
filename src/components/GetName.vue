<script setup lang="ts">
  import { ref } from "vue";

  const emit = defineEmits<{
    (e: "next", detail: { name: string; tagline: string }): void;
  }>();

  const name = ref("");
  const tagline = ref("");

  const input = "px-4 py-3 bg-neutral-2 br-lg";

  function handleSubmit() {
    emit("next", { name: name.value, tagline: tagline.value });
  }
</script>

<template>
  <form
    class="bg-white shadow p-2 my-5 flex flex-col gap-2 max-w-xs ml-auto"
    @submit.prevent="handleSubmit"
  >
    <input :class="input" type="text" :model="name" placeholder="Enter Name" />
    <input :class="input" type="text" :model="tagline" placeholder="Enter Tagline" />
    <button class="bg-blue py-2 br-xl">Let's Go!</button>
  </form>
</template>
