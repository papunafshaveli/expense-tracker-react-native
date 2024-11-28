import React from "react";
import { View } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { outputStyles } from "./outputStyles";

import { ExpensesData } from "@/types/expensesData";

type ExpensesOutputProps = {
  expenses: ExpensesData[];
  expensesPeriod: string;
};

const ExpensesOutput: React.FC<ExpensesOutputProps> = ({
  expenses,
  expensesPeriod,
}) => {
  return (
    <View style={outputStyles.outputContainer}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesOutput;
