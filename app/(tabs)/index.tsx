import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
      onPress={() => router.replace("/auth/login")}
    >
      <Text>index</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({});
