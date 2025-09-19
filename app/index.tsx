import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.root}>
      <LinearGradient
        colors={["#73C5FF", "#FF9CE1"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.background}
      >
        <StatusBar barStyle="dark-content" />

        {/* Котик */}
        <Image
          source={require("../assets/images/welcome-cat.png")}
          style={styles.illustration}
          resizeMode="contain"
        />

        {/* Название */}
        <Image
          source={require("../assets/images/name.png")}
          style={styles.nameImage}
          resizeMode="contain"
        />

        {/* Текст */}
        <Text style={styles.subtitle}>
          Поверніть{" "}
          <Text style={styles.bold}>домашні справи та звички до гри</Text>{" "}
          та щоденні перемоги для дітей!
        </Text>

        {/* Кнопки */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push("/(auth)/login")}
          >
            <Text style={styles.primaryText}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push("/(auth)/register")}
          >
            <Text style={styles.primaryText}>Реєстрація</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push("/(auth)/child-code")}
          >
            <Text style={styles.secondaryText}>Я дитина, хочу ввести код</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Platform.select({ ios: 64, android: StatusBar.currentHeight ?? 32 }),
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  illustration: {
    width: "100%",
    height: 280,
  },
  nameImage: {
    width: 180,
    height: 40,
    marginTop: 8,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#262A32",
    textAlign: "center",
    lineHeight: 22,
    opacity: 0.9,
    letterSpacing: -0.2,
    fontFamily: "Onest",
    marginBottom: 32,
    paddingHorizontal: 10,
  },
  bold: {
    fontWeight: "700",
  },
  buttonGroup: {
    width: "100%",
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#FF6D92",
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Onest",
  },
  secondaryButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryText: {
    color: "#0066FF",
    fontSize: 18,
    fontWeight: "500",
    fontFamily: "Onest",
  },
});
