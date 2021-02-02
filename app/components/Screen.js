import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, Stylesheet } from "react-native"; // SafeAreaView imported from here does not work for android
//import { SafeAreaView } from "react-native-safe-area-context";     // SafeAreaView here works for android

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  //   screen: {
  //     // only use on android if SafeAreaView does not work
  //     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  //   },

  //Alternative
  screen: {
    // only use if SafeAreaView does not work
    paddingTop: Constants.statusBarHeight,
    flex: 1, //remember this so it stretch to the whole screen
  },
});
export default Screen;
