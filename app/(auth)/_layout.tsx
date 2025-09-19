import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,      // Скрываем шапку
        gestureEnabled: true,    // ✅ Свайп-назад включён
        animation: "default",    // Красивые переходы
      }}
    />
  );
}
