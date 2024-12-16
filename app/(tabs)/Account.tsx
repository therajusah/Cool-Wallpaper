import React from "react";
import { DownloadPicture } from "@/components/BottomSheet";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  useColorScheme,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Account() {
  const [pictureOpen, setPictureOpen] = useState(false);
  const theme = useColorScheme() ?? "light";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1 }}>
        <LoginButtons />
        <ThemeSelector />
      </View>
    </SafeAreaView>
  );
}

function ThemeSelector() {
  return (
    <View style={styles.margin}>
      <ThemedText style={styles.textBig}>Settings</ThemedText>
      <ThemedText>Theme</ThemedText>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
        <ThemeButton title={"Dark"} selected={false} />
        <ThemeButton title={"Light"} selected={false} />
        <ThemeButton title={"System"} selected={false} />
      </View>
    </View>
  );
}

function ThemeButton({
  title,
  selected,
}: {
  selected: boolean;
  title: string;
}) {
  return (
    <Pressable style={{padding: 10, borderColor: "black", borderWidth: 1,
        borderRadius: 5, flex: 0.3
    }}>
      <ThemedText style={{textAlign: "center"}}>{title}</ThemedText>
    </Pressable>
  );
}

function LoginButtons() {
  const theme = useColorScheme() ?? "light";
  return (
    <>
      <AuthButton
        label={"Sign in"}
        icon={
          <Ionicons
            name={"logo-google"}
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
        }
      />
      <AuthButton
        label={"Sign in"}
        icon={
          <Ionicons
            name={"logo-apple"}
            size={24}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
        }
      />
    </>
  );
}
function Header() {
  return (
    <View style={styles.topBar}>
      <ThemedText style={styles.textBig}>Panels</ThemedText>
      <ThemedText>Sign in to save your data</ThemedText>
    </View>
  );
}

function AuthButton({ label, icon }: { label: string; icon: any }) {
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
        marginTop: 20,
      }}
    >
      {icon}
      <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  textBig: {
    fontSize: 25,
    fontWeight: "600",
  },
  topBar: {
    padding: 20,
  },
  themeSelectorContainer: {
    flex: 1,
  },
  themeSelectorChild: {
    flex: 0.33,
  },
  margin: {
    padding: 20,
  },
});
