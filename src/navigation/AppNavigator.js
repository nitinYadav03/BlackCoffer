import React, { memo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiscoveryPage from "../components/DiscoveryPage";

const Stack = createNativeStackNavigator();

const AppNavigator = ({ isFirstLaunch }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Discovery" component={DiscoveryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(AppNavigator);
