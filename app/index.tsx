import React from "react";

import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ManageExpense from "@/screens/manage-expenses/ManageExpense";
import RecentExpenses from "@/screens/recent-expenses/RecentExpenses";
import AllExpenses from "@/screens/all-expenses/AllExpenses";

export default function Index() {
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  const ExpensesOverview = () => {
    return (
      <BottomTabs.Navigator>
        <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
        <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
      </BottomTabs.Navigator>
    );
  };

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
