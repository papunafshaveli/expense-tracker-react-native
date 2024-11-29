import { GLOBAL_STYLES } from "@/constants/globalStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  manageExpensesContainer: {
    flex: 1,
    padding: 22,
    backgroundColor: GLOBAL_STYLES.colors.primary800,
  },
  confirmCancelBtnsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteBtnWrapper: {
    marginTop: 16,
    paddingTop: 8,

    alignItems: "center",

    borderTopWidth: 1,

    borderTopColor: GLOBAL_STYLES.colors.primary200,
  },
});
