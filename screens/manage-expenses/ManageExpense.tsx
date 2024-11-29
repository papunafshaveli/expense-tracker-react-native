import React, { useLayoutEffect } from "react";
import { View } from "react-native";

import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { DUMMY_EXPENSES } from "@/data/expensesDammyData";
import { GLOBAL_STYLES } from "@/constants/globalStyles";
import IconButton from "@/components/icon-button/IconButton";

type ManageExpenseRouteParams = {
  expenseId?: string;
};

const ManageExpense = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { expenseId: expenseIdForEditing } =
    route?.params as ManageExpenseRouteParams;

  const isEditing = !!expenseIdForEditing;

  useLayoutEffect(() => {
    const expenseDesc = DUMMY_EXPENSES.find(
      (expense) => expense.id === expenseIdForEditing
    )?.description;

    navigation.setOptions({
      title: `${isEditing ? "Edit " + expenseDesc : "Add Expenses"}`,
      headerStyle: { backgroundColor: GLOBAL_STYLES.colors.gray700 },
      headerTintColor: "white",
    });
  }, [navigation, isEditing]);

  const handleDeleteExpense = () => {
    console.log("delete expense");
  };

  const handleAddOrEditExpense = () => {
    console.log("add or edit expense");
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.manageExpensesContainer}>
      <View style={styles.confirmCancelBtnsWrapper}>
        <IconButton
          iconName={isEditing ? "create-outline" : "add"}
          text={isEditing ? "Edit" : "Add"}
          size={24}
          color={GLOBAL_STYLES.colors.primary50}
          onPress={handleAddOrEditExpense}
        />
        <IconButton
          iconName="exit"
          size={24}
          color={GLOBAL_STYLES.colors.error500}
          onPress={handleCancel}
          text="Cancel"
        />
      </View>

      {isEditing && (
        <View style={styles.deleteBtnWrapper}>
          <IconButton
            iconName="trash"
            color={GLOBAL_STYLES.colors.error500}
            size={24}
            onPress={handleDeleteExpense}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;
