import { create } from "zustand";

const useLanguage = create((set) => ({
  language: "en",
  dir: "ltr",
  changeLanguage: () =>
    set((state) => ({
      language: state.language === "en" ? "ar" : "en",
      dir: state.dir === "ltr" ? "rtl" : "ltr",
    })),
}));
export default useLanguage;
