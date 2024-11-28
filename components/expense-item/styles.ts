import { StyleSheet } from "react-native";

import { GLOBAL_STYLES } from "@/constants/globalStyles";

export const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,

    marginVertical: 7,

    backgroundColor: GLOBAL_STYLES.colors.primary500,

    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 6,

    elevation: 4,
    shadowColor: GLOBAL_STYLES.colors.gray500,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  text: {
    color: GLOBAL_STYLES.colors.primary50,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "bold",

    color: GLOBAL_STYLES.colors.primary50,
  },
  amountWrapper: {
    paddingHorizontal: 11,
    paddingVertical: 4,

    backgroundColor: GLOBAL_STYLES.colors.primary50,

    borderRadius: 6,
    padding: 12,

    justifyContent: "center",
    alignItems: "center",

    elevation: 4,
    shadowColor: GLOBAL_STYLES.colors.gray500,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  amountText: {
    color: GLOBAL_STYLES.colors.primary700,
    fontWeight: "bold",
  },
});
