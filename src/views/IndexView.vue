<script setup lang="ts">
  import cn from "clsx";
  import type { ChatFlowItem } from "@/types";
  import { botFirst, userFirst, botSecond, userSecond } from "@/anna";
  import { provide, ref } from "vue";

  const chatFlow = [botFirst, userFirst, botSecond, userSecond]; // Define your chat flow items
  let currentChatIndex = 0;
  let currentChatItem = chatFlow[currentChatIndex];
  const chatItems = ref([currentChatItem]);

  const timeout = ref(0);
  provide("timeout", timeout);

  const handleNextChatItem = (currentChatItem: ChatFlowItem, payload: unknown) => {
    const isFromUser = currentChatItem.author === "User";
    const isLastChatItem = currentChatIndex === chatFlow.length - 1;

    if ((isFromUser && currentChatItem.validation(payload)) || isLastChatItem) return;

    currentChatIndex++;
    chatItems.value.push(chatFlow[currentChatIndex]);
    console.log({ payload, v: chatItems.value });
  };
</script>

<template>
  <div class="p-5 lg-p-8">
    <div class="max-w-700px mx-a bg-neutral p-5">
      <div
        v-for="chatItem in chatItems"
        :key="chatItem.id"
        :class="cn('w-auto', chatItem.author === 'User' ? 'bg-pink ml-auto' : 'bg-white')"
      >
        <component
          :is="chatItem.component"
          :meta="{ ...chatItem.meta, id: chatItem.id }"
          @next="handleNextChatItem(chatItem, $event)"
        ></component>
      </div>
    </div>
  </div>
</template>
