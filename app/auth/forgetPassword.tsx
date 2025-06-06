import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { ImageBackground } from "expo-image";
import { Controller, useForm } from "react-hook-form";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useRef } from "react";
import Input from "@/components/shared/Input";
import { blurHashCode } from "@/utils/Utils";

const forgetPassword = () => {
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = () => {
    const values = getValues();
    console.log("Email:", values.email);
    router.replace("/auth/otpCode");
  };
  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
      <ImageBackground
        style={styles.styledBackground}
        placeholder={{
          blurhash: blurHashCode,
        }}
        // source={require("./../../assets/images/forgetPassBackground.jpg")}
      >
        <Text style={styles.styledTitle}>Forget{"\n"}Password</Text>
        <View style={styles.formContainer}>
          <View style={styles.formGap}>
            <Controller
              control={control}
              name="email"
              rules={{
                required: "This field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email",
                },
              }}
              render={() => (
                <Input
                  ref={emailRef}
                  onSubmitEditing={() => {
                    passwordRef.current?.focus();
                  }}
                  control={control}
                  name="email"
                  placeholder={"Enter your email"}
                  errors={errors}
                  style={styles.valueInput}
                  rules={undefined}
                  width={50}
                />
              )}
            />
          </View>

          <TouchableOpacity
            // onPress={handleSubmit(onSubmit)}
            onPress={onSubmit} //static until we fix the backend
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default forgetPassword;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  styledBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    gap: hp("10%"),
  },
  styledTitle: {
    color: "white",
    textAlign: "center",
    paddingTop: hp("17%"),
    fontSize: hp("4.5%"),
    fontFamily: "secondary",
  },
  formContainer: { width: wp("90%"), height: hp("50%") },
  formGap: { gap: hp("3%") },
  valueInput: {
    width: wp("90%"),
    height: hp("6.5%"),
    textAlign: "left",
    fontSize: hp("1.75%"),
    backgroundColor: "white",
    borderRadius: wp("3%"),
    alignItems: "center",
    alignContent: "center",
    paddingStart: wp("4.5%"),
  },

  loginButton: {
    backgroundColor: "#7C42D8",
    height: wp("15%"),
    width: wp("85%"),
    alignSelf: "center",
    marginTop: hp("5%"),
    marginBottom: hp("2%"),
    borderRadius: wp("50%"),
    justifyContent: "center",
  },
  loginButtonText: {
    textAlign: "center",
    color: "white",
    fontSize: hp("2.5%"),
    fontWeight: "bold",
  },
});
