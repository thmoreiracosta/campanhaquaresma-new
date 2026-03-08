// types/modalContent.ts
export interface ModalContentItem {
  title: string;
  content: string; // Pode ser string HTML ou ReactNode se migrar para JSX
  summary?: string;
}

export type ModalContentData = Record<string, ModalContentItem>;