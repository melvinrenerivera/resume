"use client";

import t, { Lang } from "@/lib/translations";
import { createContext, useContext, useState } from "react";

type LangCtx = {
  lang: Lang;
  toggle: () => void;
  tr: typeof t.en;
};

const LanguageContext = createContext<LangCtx>({
  lang: "en",
  toggle: () => {},
  tr: t.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle, tr: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
