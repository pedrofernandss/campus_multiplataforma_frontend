import Trendings from "@/components/Trendings";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from 'react-native'
import standard from "@/theme";
import Carousel from "@/components/Carousel";
import MasonryVideos from "@/components/MasonryVideos";

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar backgroundColor={standard.colors.primaryWhite} style='dark' />
      <Header />
      <Trendings />
      <Carousel />

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: standard.colors.primaryWhite,
    flex: 1,
  }
})