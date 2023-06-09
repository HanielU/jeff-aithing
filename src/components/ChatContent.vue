<script setup lang="ts">
  import aiImage from "@/assets/ai.svg";
  // @ts-ignore
  import Typewriter from "typewriter-effect/dist/core";
  import { inject, onMounted, type Ref } from "vue";

  const props = defineProps<{
    meta: { typeText: string; id: string };
  }>();

  const emit = defineEmits<{ (e: "next"): void }>();

  const timeout = inject<Ref<NodeJS.Timeout>>("timeout")!;

  onMounted(() => {
    enterDom(document.querySelector("#" + props.meta.id)!);
  });

  function enterDom(node: HTMLElement) {
    clearTimeout(timeout.value);

    const typewriter = new Typewriter(node, {
      delay: 40,
    });
    typewriter.typeString(props.meta.typeText).start();

    timeout.value = setTimeout(() => emit("next"), 3000);
  }
</script>
<template>
  <div class="flex-s-start gap-5 w-full min-h-300px">
    <img class="anna-img scale-x-[-1]" :src="aiImage" alt="" />

    <div class="w-full max-w-300px translate-y-[3rem] flex-s-start">
      <div class="chat-content p-6 text-(white base)">
        <span :id="props.meta.id" />

        <slot name="action" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .chat-content {
    @apply bg-gradient-to-r from-primarydark relative 
		via-primary to-primarydark  br-xl rounded-tl-0;
  }

  .anna-img {
    @apply square-143.18px br-full duration-300 ease-in;
  }

  .chat-content::after {
    @apply border-primarydark;
    content: " ";
    position: absolute;
    top: 0%;
    left: 0%;
    width: 150px;
    transform: rotate(180deg) translateX(100%);
    border-width: 28px 20px 0px;
    border-style: solid;
    border-color: transparent transparent transparent #1e252b;
  }
</style>
