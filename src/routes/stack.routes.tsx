import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../styles/colors";

import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSave } from "../pages/PlantSave";
import { AuthRoutes } from "./tab.routes";

const AppStack = createStackNavigator();

export function AppRoutes() {
  return (
    <AppStack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <AppStack.Screen name="Welcome" component={Welcome} />
      <AppStack.Screen
        name="UserIdentification"
        component={UserIdentification}
      />
      <AppStack.Screen name="Confirmation" component={Confirmation} />
      <AppStack.Screen name="PlantSelect" component={AuthRoutes} />
      <AppStack.Screen name="PlantSave" component={PlantSave} />
      <AppStack.Screen name="MyPlants" component={AuthRoutes} />
    </AppStack.Navigator>
  );
}
