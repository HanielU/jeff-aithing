import type { ComponentPublicInstance } from "vue";

export type ChatFlowItem = {
  id: string;
  author: "Anna" | "User";
  component: ComponentPublicInstance;
  currentIndex?: number;
  validation: (payload: unknown) => boolean;
  meta?: Record<string, unknown>;
};
