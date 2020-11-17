import { useTranslation } from "react-i18next";
import { ILocaleService } from "../contracts/ILocaleService";
import { LocaleStandard } from "../contracts/LocaleStandard";
import { SubLocale } from "./SubLocale";

/**
 * Uses locale
 * @param absoluteLocaleStore Absolute path to target Locale's file (use '/' or arrays of folder + file)
 * @param [prefix] Optional prefix within the file.
 * @returns locale
 */
export function useAbsoluteLocale(
  absoluteLocaleStore: string | string[],
  prefix?: string
): ILocaleService {
  const store = Array.isArray(absoluteLocaleStore)
    ? absoluteLocaleStore.join("/")
    : absoluteLocaleStore;

  let init = prefix || "";
  init = init.length !== 0 && !init.endsWith(".") ? `${init}.` : init;
  const { t } = useTranslation(store);

  const trans = (
    key: string,
    parameters?: string | Record<string, unknown>,
    defaultValue: string | undefined = ""
  ) => {
    const res = t<string>(key, defaultValue, parameters);
    return res;
  };

  return {
    title: (parameters?: string | Record<string, unknown>) =>
      trans(`${init}${LocaleStandard.title}`, parameters),

    withPrefix: (additionalPrefix: string) => {
      const result = new SubLocale(`${init}${additionalPrefix}`, trans);
      return result;
    },
  };
}
