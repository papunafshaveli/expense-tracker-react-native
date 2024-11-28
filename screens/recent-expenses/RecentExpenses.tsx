import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import ExpensesOutput from "@/components/expenses-output/ExpensesOutput";
import { DUMMY_EXPENSES } from "@/data/expensesDammyData";

const RecentExpenses = () => {
  return (
    <View style={styles.recentExpensesContainer}>
      <ExpensesOutput expensesPeriod="last 7 days" expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default RecentExpenses;
