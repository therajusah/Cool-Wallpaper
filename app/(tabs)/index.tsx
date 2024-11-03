import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpaper, Wallpaper } from "@/hooks/userWallpaper";
import { Link } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// https://ideogram.ai/assets/progressive-image/balanced/response/Q-C0J7HHQTuVP-4qbOhGqw
// https://ideogram.ai/g/F5r6bdqxQK2WqZMCZHw0cA/3

export default function explore() {
  const wallpapers = useWallpaper();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={<Image style={{ flex: 1 }} source={{ uri: wallpapers[0]?.url ?? "" }} />}
      >
        <View style={styles.container}>
          {wallpapers.map((w: Wallpaper) => <ImageCard wallpaper={w} />)}
        </View>
        <View style={styles.container}>
          {wallpapers.map((w: Wallpaper) => <ImageCard wallpaper={w} />)}
        </View>


      </ParallaxScrollView>


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  }
}) 
