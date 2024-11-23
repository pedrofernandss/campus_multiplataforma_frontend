import Trendings from "@/components/Trendings";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <Header />
      <Trendings />

      <StatusBar backgroundColor='bg-campusRed' style='light' />
    </SafeAreaView>
  );
}