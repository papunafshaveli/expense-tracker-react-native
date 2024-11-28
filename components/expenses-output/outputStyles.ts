import { StyleSheet } from "react-native";

import { GLOBAL_STYLES } from "@/constants/globalStyles";

export const outputStyles = StyleSheet.create({
  outputContainer: {
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 0,

    backgroundColor: GLOBAL_STYLES.colors.primary700,
  },
});
