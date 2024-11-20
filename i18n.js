import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    lng: "en",
    fallbackLng: "en",
    ns: [
      "home",
      "features",
      "aboutUs",
      "HajjGroupPackage",
      "HajjIndividual",
      "ServiceMenu",
      "Contact",
      "STDGroupUmrah",
      "UmrahRamzanGroup",
      "UmrahFamily",
      "UmrahIndiVIP",
      "Navbar",
      "footer",
    ],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
