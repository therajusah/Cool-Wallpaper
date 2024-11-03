export interface Wallpaper {
  url: string;
  name: string;
}

export function useWallpaper(): Wallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/Q-C0J7HHQTuVP-4qbOhGqw",
      name: "Ai Picture",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/BGzMFhYPQuGoaFNm5guyMQ",
      name: "Beautiful Girl",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/cyLI7z9uQwadN8L-HH4qtA",
      name: "Nature",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/PwXveU6oQjy1Gpd-EvXoHQ",
      name: "Disaster",
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/8cuPo9yZRmC_fJFJuH4Mrw",
      name: "Couple",
    },
    {
        url: "https://ideogram.ai/assets/image/lossless/response/mSuK2rvxQqCj9HdWvG3Itw",
        name: "Server AI",
      },
  ];
}
