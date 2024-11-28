import React from "react";
import { View, Text, Pressable } from "react-native";

import { getFormattedDate } from "@/util/date";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ExpenseItemProps = {
  description: string;
  amount: number;
  date: Date;
};

type StackParamList = {
  ManageExpense: { expenseId: string };
};

type NavigationProp = NativeStackNavigationProp<
  StackParamList,
  "ManageExpense"
>;

const ExpenseItem: React.FC<ExpenseItemProps> = ({
  description,
  amount,
  date,
}) => {
  const formatDate = getFormattedDate(date);

  const navigation = useNavigation<NavigationProp>();

  const onExpenseItemPress = () => {
    navigation.navigate("ManageExpense", {
      expenseId: "1",
    });
  };

  return (
    <Pressable
      onPress={onExpenseItemPress}
      style={({ pressed }) => pressed && styles.pressedExpenseItem}
    >
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
