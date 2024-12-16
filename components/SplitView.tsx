import React from 'react';
import { ThemedView } from "./ThemedView";
import { View, FlatList, StyleSheet,  } from "react-native";
import { ImageCard } from "./ImageCard";
import { Wallpaper } from "@/hooks/userWallpaper";
import { useState } from "react";
import { DownloadPicture } from './BottomSheet';

export function SplitView({wallpapers}: {
    wallpapers: Wallpaper[]
}) {
    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null); 

    return (
        <>
         <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard
                    wallpaper={item}
                    onPress={() => {
                      setSelectedWallpaper(item);
                    }}
                  />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard wallpaper={item} onPress={() => {
                      setSelectedWallpaper(item);
                  }} />
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </ThemedView>
      {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />}
    </>
    );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      flex: 1,
    },
    innerContainer: {
      flex: 1,
      padding: 20,
    },
    imageContainer: {
      paddingVertical: 10,
    },
  });