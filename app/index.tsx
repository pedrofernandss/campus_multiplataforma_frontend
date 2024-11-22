import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <Header />

      <StatusBar backgroundColor='bg-campusRed' style='dark' />
    </SafeAreaView>
  );
}