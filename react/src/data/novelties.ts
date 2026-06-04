import reactImg from "../../public/favicon.svg";

export type Novelty = {
  id: string;
  companyName: string;
  eventName: string;
  thumbnailUrl: string;
  pdfUrl: string;
};

export const novelties: Novelty[] = [
  // OpenAI
  {
    id: "1",
    companyName: "OpenAI",
    eventName: "AI EXPO 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
  {
    id: "2",
    companyName: "OpenAI",
    eventName: "Startup Summit 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },

  // AWS
  {
    id: "3",
    companyName: "AWS",
    eventName: "Interop Tokyo",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
  {
    id: "4",
    companyName: "AWS",
    eventName: "Cloud Conference 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },

  // AI EXPO
  {
    id: "5",
    companyName: "Google",
    eventName: "AI EXPO 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
  {
    id: "6",
    companyName: "Anthropic",
    eventName: "AI EXPO 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
  {
    id: "7",
    companyName: "Meta",
    eventName: "AI EXPO 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
  {
    id: "8",
    companyName: "NVIDIA",
    eventName: "AI EXPO 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },

  // Dev Summit
  {
    id: "9",
    companyName: "Stripe",
    eventName: "Dev Summit 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
  {
    id: "10",
    companyName: "GitHub",
    eventName: "Dev Summit 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },

  // Interop Tokyo
  {
    id: "11",
    companyName: "Cisco",
    eventName: "Interop Tokyo",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
  {
    id: "12",
    companyName: "Datadog",
    eventName: "Interop Tokyo",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
  {
    id: "13",
    companyName: "Cloudflare",
    eventName: "Interop Tokyo",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },

  // Startup Summit
  {
    id: "14",
    companyName: "Notion",
    eventName: "Startup Summit 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
  {
    id: "15",
    companyName: "Figma",
    eventName: "Startup Summit 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
  {
    id: "16",
    companyName: "Vercel",
    eventName: "Startup Summit 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },

  // Cloud Conference
  {
    id: "17",
    companyName: "Snowflake",
    eventName: "Cloud Conference 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
  {
    id: "18",
    companyName: "MongoDB",
    eventName: "Cloud Conference 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },

  // 同じ企業を別イベントにも出す
  {
    id: "19",
    companyName: "Google",
    eventName: "Dev Summit 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
  {
    id: "20",
    companyName: "GitHub",
    eventName: "AI EXPO 2026",
    thumbnailUrl: reactImg,
    pdfUrl:
      "https://drive.google.com/file/d/1pdK-vLXE2DGpaDvcVTTIwjPdl64dKGAR/preview",
  },
];
