import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Library" component={HomeScreen} />
            <Tab.Screen name="Liked" component={SettingsScreen} />
            <Tab.Screen name="Suggested" component={SettingsScreen} />

        </Tab.Navigator>
    );
}

function HomeScreen() {
    return (
        <View>
            <Text>
                Hello, From Home page
            </Text>
        </View>
    )
}
function SettingsScreen() {
    return (
        <View>
            <Text>
                Hello, From Settings page
            </Text>
        </View>
    )
}