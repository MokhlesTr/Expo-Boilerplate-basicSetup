import { View, StyleSheet, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useTranslation } from "@/hooks/useTranslation";

interface TabData {
  id: string;
  title: string;
  // can be null
  icon?: (color: string) => JSX.Element;
}

interface UseTabProps {
  tabs: TabData[];
  initialTab: string;
}

const useTab = ({ tabs, initialTab }: UseTabProps) => {
  const [tabValue, setTabValue] = useState(initialTab);
  const [ctabs, setTabs] = useState(tabs);
  const { translate, language } = useTranslation();

  useEffect(() => {
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        title: translate(tab.title),
      }))
    );
  }, [language]);

  const Tab = () => {
    return (
      <View style={styles.wrapper}>
        {ctabs.map((tab) => (
          <Pressable
            key={tab.id}
            style={[
              styles.tabContainer,
              {
                borderBottomColor: tabValue === tab.id ? "#000000" : "#F2F2F2",
              },
            ]}
            onPress={() => setTabValue(tab.id)}
          >
            {tab.icon && tab.icon(tabValue === tab.id ? "#000000" : "#707070")}
            <Text
              style={[
                styles.title,
                {
                  color: tabValue === tab.id ? "#000000" : "#707070",
                },
              ]}
            >
              {translate(tab.title)}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };

  return { Tab, tabValue, setTabValue, setTabs };
};

export default useTab;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 15,
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "white",
    alignItems: "flex-end",
    marginTop: hp("0.5%"),
  },
  tabContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    borderBottomWidth: 2,
    paddingVertical: hp("1.2%"),
    flexWrap: "nowrap",
    paddingHorizontal: wp("3%"),
  },
  title: {
    fontSize: wp("4.75%"),
    fontFamily: "regular",
    color: "#000",
    marginLeft: wp("2%"),
    flexWrap: "wrap",
  },
});
