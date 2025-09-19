import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Button from "../../components/ui/Button";
import TextField from "../../components/ui/TextField";
import { auth, db } from "../../services/firebase";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("uk");
  const [role, setRole] = useState<"parent" | "child">("parent");
  const [loading, setLoading] = useState(false);

  async function onRegister() {
    try {
      setLoading(true);
      const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
      // почему: сохраняем профиль отдельно для ролей и будущих полей
      await setDoc(doc(db, "users", cred.user.uid), {
        uid: cred.user.uid,
        email: email.trim(),
        name: name.trim(),
        language,
        role,
        points: 0,
        createdAt: serverTimestamp(),
      });
      router.replace("/(tabs)");
    } catch (e: any) {
      Alert.alert("Помилка реєстрації", e?.message ?? "Спробуйте ще раз");
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>

      <TextField placeholder="Електронна пошта" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextField placeholder="Пароль" secureTextEntry value={password} onChangeText={setPassword} />
      <TextField placeholder="Ім'я" value={name} onChangeText={setName} />

      <View style={styles.select}>
        <Picker selectedValue={language} onValueChange={(v) => setLanguage(v)}>
          <Picker.Item label="Українська" value="uk" />
          <Picker.Item label="Русский" value="ru" />
          <Picker.Item label="English" value="en" />
        </Picker>
      </View>

      <View style={styles.select}>
        <Picker selectedValue={role} onValueChange={(v) => setRole(v)}>
          <Picker.Item label="Батько / Мати" value="parent" />
          <Picker.Item label="Дитина" value="child" />
        </Picker>
      </View>

      <Button
        title={loading ? "Завантаження..." : "Далі →"}
        onPress={onRegister}
        disabled={loading || !email || !password || !name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", padding: 20 },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 16, textAlign: "center" },
  select: { backgroundColor: "#F7F9FC", borderRadius: 12, marginBottom: 12 },
});