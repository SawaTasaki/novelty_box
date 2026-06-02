export type Novelty = {
  id: string;
  companyName: string;
  eventName: string;
  thumbnailUrl: string;
};

export const novelties: Novelty[] = [
  // 共通企業① OpenAI（2つ）
  {
    id: "1",
    companyName: "OpenAI",
    eventName: "AI EXPO 2026",
    thumbnailUrl: "",
  },
  {
    id: "2",
    companyName: "OpenAI",
    eventName: "Startup Summit 2026",
    thumbnailUrl: "",
  },

  // 共通企業② AWS（2つ）
  {
    id: "3",
    companyName: "AWS",
    eventName: "Interop Tokyo",
    thumbnailUrl: "",
  },
  {
    id: "4",
    companyName: "AWS",
    eventName: "Cloud Conference 2026",
    thumbnailUrl: "",
  },

  // 共通イベント①「AI EXPO 2026」（4つ）
  {
    id: "5",
    companyName: "Google",
    eventName: "AI EXPO 2026",
    thumbnailUrl: "",
  },
  {
    id: "6",
    companyName: "Anthropic",
    eventName: "AI EXPO 2026",
    thumbnailUrl: "",
  },
  {
    id: "7",
    companyName: "Meta",
    eventName: "AI EXPO 2026",
    thumbnailUrl: "",
  },
  {
    id: "8",
    companyName: "NVIDIA",
    eventName: "AI EXPO 2026",
    thumbnailUrl: "",
  },

  // 共通イベント②「Dev Summit 2026」（3つ）
  {
    id: "9",
    companyName: "Stripe",
    eventName: "Dev Summit 2026",
    thumbnailUrl: "",
  },
  {
    id: "10",
    companyName: "GitHub",
    eventName: "Dev Summit 2026",
    thumbnailUrl: "",
  },
];
