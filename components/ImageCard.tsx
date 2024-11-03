import { Wallpaper } from "@/hooks/useWallpaper";
import { View, Image, StyleSheet } from "react-native";

export function ImageCard({wallpaper}: {
    wallpaper: Wallpaper
}) {
    return <View>
       <Image source={{ uri: wallpaper.url}} style={styles.image} />
    </View>
}

const styles = StyleSheet.create({
image: {
    flex: 1,
    height: 300
}

})