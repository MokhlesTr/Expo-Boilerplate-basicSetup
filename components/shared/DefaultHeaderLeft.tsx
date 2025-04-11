import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeftStoreIcon } from "@/assets/svgs/Svg";

export default function DefaultHeaderLeft() {
  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <Pressable
        style={styles.IconContainer}
        onPress={() => {
          navigation.goBack();
          // null
        }}
      >
        <ArrowLeftStoreIcon />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  IconContainer: {
    height: hp("5%"),
    justifyContent: "center",
    alignItems: "flex-start",
    width: wp("20%"),
    paddingBottom: wp("1%"),
  },
});
