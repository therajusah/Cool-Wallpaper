import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack
                screenOptions={{ headerShown: false }}


            >
                <Stack.Screen name="(nobottombar)/accountInfo" options={{
                    headerShown: true,
                    headerTitle: "Account Info", headerBackTitle: "Go Back"
                }} />

            </Stack>

        </GestureHandlerRootView>
    )
}