import type { ChatFlowItem } from "./types";
import ChatContent from "./components/ChatContent.vue";
import GetName from "./components/GetName.vue";
import GetCategory from "./components//GetCategory.vue";

const auto_gen_id = () => {
  return "T" + Math.random().toString(36).substr(2, 9);
};

export const botFirst: ChatFlowItem = {
  id: auto_gen_id(),
  author: "Anna",
  component: ChatContent,
  validation: () => true,
  meta: {
    typeText: "Hello, my name is Anna. Let's create your site. What is the name of your site?. ",
  },
};

export const botSecond: ChatFlowItem = {
  id: auto_gen_id(),
  author: "Anna",
  component: ChatContent,
  validation: () => true,
  meta: {
    typeText: "What keywords are relevant in your industry?",
  },
};

export const botThird: ChatFlowItem = {
  id: auto_gen_id(),
  author: "Anna",
  component: ChatContent,
  validation: () => true,
  meta: {
    typeText: "Customize your site color and logo.",
  },
};

export const botFourth: ChatFlowItem = {
  id: auto_gen_id(),
  author: "Anna",
  component: ChatContent,
  validation: () => true,
  meta: {
    typeText: "Tell me about your contact details",
  },
};

export const botFifth: ChatFlowItem = {
  id: auto_gen_id(),
  author: "Anna",
  component: ChatContent,
  validation: () => true,
  meta: {
    typeText: "Sit back, sip a coffee and relax, while i put your site together. :",
  },
};

export const userFirst: ChatFlowItem = {
  id: auto_gen_id(),
  author: "User",
  component: GetName,
  currentIndex: 0,
  validation: (payload: any) => {
    return payload?.name?.length > 0 && payload?.tagline?.length > 0;
  },
};

export const userSecond: ChatFlowItem = {
  id: auto_gen_id(),
  author: "User",
  component: GetCategory,
  currentIndex: 1,
  validation: (payload: any) => {
    return payload?.category?.length > 0;
  },
};
