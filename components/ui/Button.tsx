import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "ghost";
  disabled?: boolean;
  style?: ViewStyle;
};

export default function Button({ title, onPress, variant = "primary", disabled, style }: Props) {
  const isPrimary = variant === "primary";
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        isPrimary ? styles.primary : styles.ghost,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text style={isPrimary ? styles.primaryText : styles.ghostText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { paddingVertical: 14, borderRadius: 28, alignItems: "center", marginBottom: 12 },
  primary: { backgroundColor: "#FF4F79" },
  primaryText: { color: "white", fontWeight: "700", fontSize: 16 },
  ghost: { backgroundColor: "white", borderWidth: 1, borderColor: "#FF4F79" },
  ghostText: { color: "#FF4F79", fontWeight: "700", fontSize: 16 },
  pressed: { opacity: 0.9 },
  disabled: { opacity: 0.5 },
});