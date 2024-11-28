import React from "react";
import { FlatList } from "react-native";

import { ExpensesData } from "@/types/expensesData";
import ExpenseItem from "../expense-item/ExpenseItem";

type RenderExpenseItemData = {
  item: React.JSX.IntrinsicAttributes & {
    description: string;
    amount: number;
    date: Date;
  };
};

type ExpensesListProps = { expenses: ExpensesData[] };

const renderExpenseItem = (itemData: RenderExpenseItemData) => {
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList: React.FC<ExpensesListProps> = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
