import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Link } from "expo-router";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// https://ideogram.ai/assets/progressive-image/balanced/response/Q-C0J7HHQTuVP-4qbOhGqw
// https://ideogram.ai/g/F5r6bdqxQK2WqZMCZHw0cA/3

export default function explore() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={<Image style={{flex: 1}} source={{ uri: "https://ideogram.ai/assets/progressive-image/balanced/response/Q-C0J7HHQTuVP-4qbOhGqw" }} />}
      >
        <Text>
          Explore Page
        </Text>

      </ParallaxScrollView>


    </SafeAreaView>
  )
}