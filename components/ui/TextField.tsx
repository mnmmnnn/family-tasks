import { forwardRef } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type Props = TextInputProps & { error?: string | null };

const TextField = forwardRef<TextInput, Props>(({ style, ...rest }, ref) => {
  return <TextInput ref={ref} style={[styles.input, style]} placeholderTextColor="#9AA0A6" {...rest} />;
});
export default TextField;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F7F9FC",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 12,
    fontSize: 16,
  },
});