import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";
import { styles } from "./styles";

type IconButtonProps = {
  iconName: keyof typeof Ionicons.glyphMap;
  size: number;
  color?: string;
  onPress: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  size,
  color,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.btnContainer}>
        <Ionicons name={iconName} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;
