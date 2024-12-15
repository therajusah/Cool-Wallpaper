import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpaper, Wallpaper } from "@/hooks/userWallpaper";
import { Link } from "expo-router";
import  Text  from "expo";
import { View, Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
  const wallpapers = useWallpaper();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={<Image style={{ flex: 1 }} source={{ uri: wallpapers[0]?.url ?? "" }} />}
      >
        <ThemedView style={styles.container
        }>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index)  => index % 2 === 0)}
              renderItem={({ item }) => <View style={styles.imageContainer}><ImageCard wallpaper={item} /></View>}
              keyExtractor={item => item.name}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index)  => index % 2 === 1)}
              renderItem={({ item }) => <View style={styles.imageContainer}><ImageCard wallpaper={item} /></View>}
              keyExtractor={item => item.name}
            />
          </ThemedView>
        </ThemedView>


      </ParallaxScrollView>


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 20
  },
  imageContainer: {
    paddingVertical: 10
  }
}) 
