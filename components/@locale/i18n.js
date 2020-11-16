const NextI18Next = require("next-i18next").default;

const otherLanguages = ["de", "he"];
const I18Next = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages,
  defaultNS: "common",
  fallbackLng: "en",
  localePath: "public/locales",
  localeStructure: "{{lng}}/{{ns}}",
  nonExplicitWhitelist: true,
});
I18Next.i18n.languages = otherLanguages;

module.exports = I18Next;
