import { SplitView } from "@/components/SplitView";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers, useWallpaper } from "@/hooks/userWallpaper";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
    </Tab.Navigator>
  );
}

function LibraryScreen() {
  const wallpapers = useLibraryWallpapers();
  return (
    <View style={styles.container}>
      <SplitView wallpapers={wallpapers} />
    </View>
  );
}
function LikedScreen() {
  const wallpapers = useLikedWallpapers();
  return (
    <View style={styles.container}>
      <SplitView wallpapers={wallpapers} />
    </View>
  );
}
  function SuggestedScreen() {
    const wallpapers = useSuggestedWallpapers();
    return (
      <View style={styles.container}>
        <SplitView wallpapers={wallpapers} />
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    });
