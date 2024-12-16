export interface Wallpaper {
  url: string;
  name: string;
}


interface FullWallpaper extends Wallpaper {
  liked: boolean;
  suggested: boolean;
  library: boolean

}


export function useSuggestedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpaper();  
  return wallpapers.filter(wallpaper => wallpaper.suggested);
}

export function useLikedWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpaper();  
  return wallpapers.filter(wallpaper => wallpaper.liked);
}

export function useLibraryWallpapers(): FullWallpaper[] {
  const wallpapers = useWallpaper();  
  return wallpapers.filter(wallpaper => wallpaper.library);
}

export function useWallpaper(): FullWallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/Q-C0J7HHQTuVP-4qbOhGqw",
      name: "Ai Picture",
      liked: true,
      suggested: true,
      library: false

    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/BGzMFhYPQuGoaFNm5guyMQ",
      name: "Beautiful Girl",
      liked: true,
      suggested: false,
      library: true
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/cyLI7z9uQwadN8L-HH4qtA",
      name: "Nature",
      liked: false,
      suggested: true,
      library: false
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/PwXveU6oQjy1Gpd-EvXoHQ",
      name: "Disaster",
      liked: false,
      suggested: true,
      library: true
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/8cuPo9yZRmC_fJFJuH4Mrw",
      name: "Couple",
      liked: false,
      suggested: true,
      library: true
    },
    {
        url: "https://ideogram.ai/assets/image/lossless/response/mSuK2rvxQqCj9HdWvG3Itw",
        name: "Server AI",
        liked: false,
        suggested: true,
        library: false
      },
  ];
}
