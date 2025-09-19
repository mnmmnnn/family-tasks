import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    // TODO: Авторизация
    console.log("Логин с:", email, password);
  };

  const handleGoogleLogin = () => {
    // TODO: Google auth
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/images/login-cat.png")} style={styles.catImage} />
      
      <Text style={styles.title}>Авторизация</Text>

      <TextInput
        style={styles.input}
        placeholder="Электронная почта"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Пароль"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Войти</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Image source={require("../../assets/images/google-icon.webp")} style={styles.googleIcon} />
        <Text style={styles.googleText}>Войти с Google</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotText}>Забыли пароль?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={() => router.push("/register")}>
        <Text style={styles.registerText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  catImage: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    color: "#212121",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f2f6ff",
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 12,
  },
  loginButton: {
    width: "100%",
    height: 52,
    backgroundColor: "#ff5a94",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  loginText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1.5,
    borderRadius: 16,
    height: 52,
    width: "100%",
    justifyContent: "center",
    marginTop: 12,
    backgroundColor: "#fff",
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  googleText: {
    fontSize: 16,
    color: "#000",
  },
  forgotText: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "underline",
    marginTop: 16,
  },
  registerButton: {
    marginTop: 24,
    borderColor: "#0066ff",
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  registerText: {
    color: "#0066ff",
    fontSize: 16,
    fontWeight: "600",
  },
});
