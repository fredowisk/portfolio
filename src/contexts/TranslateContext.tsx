import React, { ReactNode, createContext, useState } from "react";
import { useTranslation } from "next-i18next";
import { TFunction } from "next-i18next";

interface TranslateContextValues {
  language: { abbreviation: string; url: string; flag: string };
  toggleLanguage: () => void;
  translate: TFunction;
}

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslateContext = createContext({} as TranslateContextValues);

export const TranslationProvider = ({ children }: TranslationProviderProps) => {
  const [language, setLanguage] = useState({
    abbreviation: "en",
    url: "https://s.w.org/images/core/emoji/14.0.0/svg/1f1fa-1f1f8.svg",
    flag: ":us:",
  });
  const { t: translate } = useTranslation("common");

  const toggleLanguage = () => {
    setLanguage(
      language.abbreviation === "en"
        ? {
            abbreviation: "pt",
            url: "https://s.w.org/images/core/emoji/14.0.0/svg/1f1e7-1f1f7.svg",
            flag: "🇧🇷",
          }
        : {
            abbreviation: "en",
            url: "https://s.w.org/images/core/emoji/14.0.0/svg/1f1fa-1f1f8.svg",
            flag: "🇺🇸",
          }
    );
  };

  return (
    <TranslateContext.Provider value={{ language, toggleLanguage, translate }}>
      {children}
    </TranslateContext.Provider>
  );
};
