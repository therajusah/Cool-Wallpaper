import React, { useCallback, useMemo, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  useColorScheme,
  TextComponent,
  Pressable,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";

export const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? "light";

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <BottomSheet
      onClose={onClose}
      snapPoints={["95%"]}
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <Image style={styles.image} source={{ uri: wallpaper.url }} />
        <View style={styles.topbar}>
          <Ionicons
            name={"close"}
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
          <View style={styles.topbarInner}>
            <Ionicons
              name={"heart"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
            />
            <Ionicons
              name={"share"}
              size={24}
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
              style={{ paddingLeft: 4 }}
            />
          </View>
        </View>
        <View style={styles.textContainer}>
          <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
        </View>
        <DownloadButton />
      </BottomSheetView>
    </BottomSheet>
  );
};

function DownloadButton() {
    const theme = useColorScheme() ?? "light";
  return (
    <Pressable
      style={{
        backgroundColor: "black",
        padding: 10,
        marginHorizontal: 40,
        paddingVertical: 20,
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        marginTop : 20,
      }}
    >
        
      <Text style={{ color: "white", fontSize: 20, fontWeight: "600",  }}>
        Download
      </Text> 
      <Ionicons
      style={{marginLeft: 10}}
            name={"download"}
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />

    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "70%",
    borderRadius: 15,
  },

  topbar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  topbarInner: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    width: "100%",
  },
  text: {
    paddingTop: 32,
    textAlign: "center",
    fontSize: 36,
    fontWeight: "600",
  },
});
