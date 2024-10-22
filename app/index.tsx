import Header from "@/components/Header";
import Trendings from "@/components/Trendings"
import React, { useEffect, useRef } from 'react';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "@/components/Carousel";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <Header />
      <Trendings />
      <Carousel />

      <StatusBar className="bg-campusRed"/>
    </SafeAreaView>
  );
}
