import React from "react";
import { View, Text, Pressable } from "react-native";

import { getFormattedDate } from "@/util/date";

import { styles } from "./styles";

type ExpenseItemProps = {
  description: string;
  amount: number;
  date: Date;
};

const ExpenseItem: React.FC<ExpenseItemProps> = ({
  description,
  amount,
  date,
}) => {
  const formatDate = getFormattedDate(date);
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.text, styles.descriptionText]}>
            {description}
          </Text>
          <Text style={styles.text}>{formatDate}</Text>
        </View>
        <View style={styles.amountWrapper}>
          <Text style={styles.amountText}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;
