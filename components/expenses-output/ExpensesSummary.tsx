import React from "react";
import { View, Text } from "react-native";

import { ExpensesData } from "@/types/expensesData";

import { summaryStyles } from "./summaryStyles";

type ExpensesSummaryProps = {
  expenses: ExpensesData[];
  periodName: string;
};

const ExpensesSummary: React.FC<ExpensesSummaryProps> = ({
  expenses,
  periodName,
}) => {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={summaryStyles.summaryStylesContainer}>
      <Text style={summaryStyles.period}>{periodName}</Text>
      <Text style={summaryStyles.sumAmount}>{expensesSum.toFixed(2)}$</Text>
    </View>
  );
};

export default ExpensesSummary;
