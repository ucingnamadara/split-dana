import { Stack } from "expo-router";
import HomeScreen from './index';

export default function ScriptLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (<Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="create-new" options={{ headerShown: false }} />
  </Stack>);
}
