import DefaultHeaderRight from "@/components/shared/DefaultHeaderRight";
import { Stack, useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const Stacklayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f0f0f0" },
        headerTintColor: "#000000",
        headerTitleStyle: { fontWeight: "regular" },
        // headerLeft: () => <DefaultHeaderLeft />,
        headerRight: () => <DefaultHeaderRight />,
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          //   headerTitle: "Login Screen",
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="forgetPassword"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
      <Stack.Screen
        name="otpCode"
        options={{
          headerShown: false,
          animation: "fade",
        }}
      />
    </Stack>
  );
};
export default Stacklayout;
