import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function DefaultHeaderRight() {
  return <View style={styles.Container}></View>;
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
  },
});
