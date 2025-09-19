import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "../../components/ui/Button";
import TextField from "../../components/ui/TextField";

export default function ChildCode() {
  const router = useRouter();
  const [code, setCode] = useState("");

  function onContinue() {
    // почему: пока заглушка; позже проверим код-приглашение и авторизуем ребёнка
    if (!code.trim()) {
      Alert.alert("Код", "Введіть код запрошення");
      return;
    }
    Alert.alert("OK", `Код прийнято: ${code}`);
    // router.replace("/(tabs)");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Код для дитини</Text>
      <TextField placeholder="Введіть код" value={code} onChangeText={setCode} autoCapitalize="characters" />
      <Button title="Продовжити" onPress={onContinue} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 16, textAlign: "center" },
});