import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import Header from "./Components/Header";
import CarsList from "./Components/CarsList";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-4823328988399637/8472234812"
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={(error) => console.error(error)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
