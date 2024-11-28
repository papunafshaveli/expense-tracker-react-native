import React from "react";
import { View } from "react-native";

import ExpensesOutput from "@/components/expenses-output/ExpensesOutput";

import { DUMMY_EXPENSES } from "@/data/expensesDammyData";

import { styles } from "./styles";

const AllExpenses = () => {
  return (
    <View style={styles.allExpensesContainer}>
      <ExpensesOutput expensesPeriod="total" expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default AllExpenses;
