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
import { GLOBAL_STYLES } from "@/constants/globalStyles";

import { Ionicons } from "@expo/vector-icons";
import IconButton from "@/components/icon-button/IconButton";

export default function Index() {
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();

  const ExpensesOverview = () => {
    return (
      <BottomTabs.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: GLOBAL_STYLES.colors.primary500 },
          headerTintColor: "white",
          tabBarStyle: { backgroundColor: GLOBAL_STYLES.colors.primary500 },
          tabBarActiveTintColor: GLOBAL_STYLES.colors.accent500,
          headerRight: ({ tintColor }) => (
            <IconButton
              iconName="add"
              color={tintColor}
              size={24}
              onPress={() =>
                navigation.navigate("ManageExpense", {
                  expenseId: undefined,
                })
              }
            />
          ),
        })}
      >
        <BottomTabs.Screen
          name="RecentExpenses"
          component={RecentExpenses}
          options={{
            title: "Recent Expenses",
            tabBarLabel: "Recent Expenses",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass" size={size} color={color} />
            ),
          }}
        />
        <BottomTabs.Screen
          name="AllExpenses"
          component={AllExpenses}
          options={{
            title: "All Expenses",
            tabBarLabel: "All Expenses",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" size={size} color={color} />
            ),
          }}
        />
      </BottomTabs.Navigator>
    );
  };

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GLOBAL_STYLES.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
