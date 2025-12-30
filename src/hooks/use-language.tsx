"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { DICTIONARY } from "@/data/dictionary";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof DICTIONARY.en; // Helper untuk TypeScript autocomplete
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default bahasa Inggris
  const [language, setLanguageState] = useState<Language>("en");

  // Cek LocalStorage saat pertama kali load (agar pilihan user tersimpan)
  useEffect(() => {
    const savedLang = localStorage.getItem("app-language") as Language;
    if (savedLang) {
      setLanguageState(savedLang);
    }
  }, []);

  // Fungsi ganti bahasa sekaligus simpan ke LocalStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app-language", lang);
  };

  const t = DICTIONARY[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook Custom agar mudah dipanggil
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
