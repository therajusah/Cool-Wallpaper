import { SplitView } from "./SplitView";
import { useWallpaper } from "@/hooks/userWallpaper";
import { View, Text } from "react-native";

export default function Library() {
  const wallpapers = useWallpaper();
  return (
    <View>
      <Text>Library</Text>
      <SplitView wallpapers={wallpapers} />
    </View>
  );
}