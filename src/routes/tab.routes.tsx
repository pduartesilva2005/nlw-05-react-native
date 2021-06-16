import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { MyPlants } from "../pages/MyPlants";
import { PlantSelect } from "../pages/PlantSelect";

const AppTabs = createBottomTabNavigator();

export function AuthRoutes() {
  return (
    <AppTabs.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: "beside-icon",
        labelStyle: {
          fontFamily: fonts.heading,
        },
        style: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 68,
        },
      }}
    >
      <AppTabs.Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <AppTabs.Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </AppTabs.Navigator>
  );
}
