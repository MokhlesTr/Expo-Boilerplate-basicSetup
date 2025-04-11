import { getItemAsync, setItemAsync } from "expo-secure-store";
import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { I18nManager, Platform } from "react-native";
import { LocaleConfig } from "react-native-calendars";
import * as Updates from "expo-updates";
interface Translation {
  [key: string]: string;
}

interface Translations {
  [key: string]: Translation;
}

interface TranslationContextType {
  language: string;
  translate: (key: string, optional?: Record<string, any>) => string;
  switchLanguage: (newLanguage: string) => void;
}

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  today: "Today",
};

LocaleConfig.locales["ar"] = {
  monthNames: [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ],
  monthNamesShort: [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ],
  dayNames: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  dayNamesShort: ["احد", "اثن", "ثلا", "ارب", "خمي", "جمع", "سبت"],
  today: "اليوم",
};

const translations: Translations = {
  ar: {
    Welcome: "مرحبا بك",
  },
};

const TranslationContext = createContext<TranslationContextType | undefined>(
  undefined
);

interface TranslationProviderProps {
  children: ReactNode;
}

const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [language, setLanguage] = useState("ar");

  const translate = (key: string, params?: Record<string, any>) => {
    let translation =
      language === "ar" ? translations[language][key] || key : key;
    LocaleConfig.defaultLocale = language === "ar" ? "ar" : "en";

    if (params) {
      for (const placeholder in params) {
        if (params.hasOwnProperty(placeholder)) {
          const placeholderValue = params[placeholder];
          const placeholderRegex = new RegExp(`{${placeholder}}`, "g");
          translation = translation.replace(placeholderRegex, placeholderValue);
        }
      }
    }
    return translation;
  };

  const switchLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    setItemAsync("language", newLanguage);

    if (Platform.OS === "android") {
      if (newLanguage === "ar") {
        I18nManager.allowRTL(true);
        I18nManager.forceRTL(true);
        Updates.reloadAsync();
      } else {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
        Updates.reloadAsync();
      }
    }
  };

  const contextValue: TranslationContextType = {
    language,
    translate,
    switchLanguage,
  };

  useEffect(() => {
    getItemAsync("language").then((language) => {
      if (language) {
        setLanguage(language);
      } else {
        setLanguage("ar");
      }
    });
  }, []);

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }

  return context;
};

export { TranslationProvider, useTranslation };
