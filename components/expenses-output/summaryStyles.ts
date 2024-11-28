import { StyleSheet } from "react-native";

import { GLOBAL_STYLES } from "@/constants/globalStyles";

export const summaryStyles = StyleSheet.create({
  summaryStylesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: GLOBAL_STYLES.colors.primary50,

    padding: 8,

    borderRadius: 6,
  },
  period: {
    fontSize: 13,

    color: GLOBAL_STYLES.colors.primary500,
  },
  sumAmount: {
    fontSize: 15,
    fontWeight: 800,

    color: GLOBAL_STYLES.colors.primary700,
  },
});
