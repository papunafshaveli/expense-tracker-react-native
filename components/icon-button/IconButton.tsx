import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, View, Text } from "react-native";
import { styles } from "./styles";

type IconButtonProps = {
  iconName: keyof typeof Ionicons.glyphMap;
  size: number;
  color?: string;
  onPress: () => void;
  text?: string;
};

const IconButton: React.FC<IconButtonProps> = ({
  iconName,
  size,
  color,
  onPress,
  text,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.btnContainer}>
        <Ionicons name={iconName} size={size} color={color} />
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default IconButton;
