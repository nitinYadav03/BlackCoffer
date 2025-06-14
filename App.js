import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoveryPage from "./src/screens/DiscoveryPage";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#003B4A" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName =
                route.name === "Discovery" ? "compass-outline" : "home-outline";
              if (route.name === "Location") {
                iconName = "location-outline";
              }
              if (route.name === "Add") {
                iconName = "add-circle-outline";
              }
              if (route.name === "Notification") {
                iconName = "notifications-outline";
              }
              if (route.name === "Profile") {
                iconName = "person-outline";
              }
              return (
                <View style={{ alignItems: "center" }}>
                  <Ionicons name={iconName} size={24} color="#003B4A" />
                  {focused && (
                    <View
                      style={{
                        height: 2,
                        width: 30,
                        backgroundColor: "#003B4A",
                        marginTop: 4,
                        borderRadius: 1,
                      }}
                    />
                  )}
                </View>
              );
            },
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              height: 60,
              paddingBottom: 10,
              paddingTop: 10,
            },
          })}
        >
          <Tab.Screen name="Discovery" component={DiscoveryPage} />
          <Tab.Screen name="Location" component={DiscoveryPage} />
          <Tab.Screen name="Add" component={DiscoveryPage} />
          <Tab.Screen name="Notification" component={DiscoveryPage} />
          <Tab.Screen name="Profile" component={DiscoveryPage} />
          {/* Add more tabs if needed */}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
