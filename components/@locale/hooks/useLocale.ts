import { useTranslation } from "react-i18next";
import { ILocaleService } from "../contracts/ILocaleService";
import { LocaleStandard } from "../contracts/LocaleStandard";
import { TLocaleResult } from "../contracts/TLocaleResult";
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
  const { t, ready, i18n } = useTranslation(store);

  const trans = <T extends TLocaleResult = string>(
    key: string,
    parameters?: string | Record<string, unknown>,
    defaultValue: string | undefined = ""
  ) => {
    const res = t<T>(key, defaultValue, parameters);
    return res;
  };

  const transMulti = (
    key: string,
    parameters?: Record<string, unknown>,
    defaultValue: string | undefined = ""
  ) => {
    const res = trans<string[]>(
      key,
      { returnObjects: true, ...parameters },
      defaultValue
    );
    return res;
  };

  return {
    store,
    prefix: init,
    language: i18n.language,
    ready,
    t: <T extends TLocaleResult = string>(
      keyPath: string,
      parameters?: string | Record<string, unknown>
    ) => trans<T>(`${init}${keyPath}`, parameters),
    ts: (keyPath: string) => transMulti(`${init}${keyPath}`),
    title: (parameters?: string | Record<string, unknown>) =>
      trans(`${init}${LocaleStandard.title}`, parameters),
    titles: (parameters?: Record<string, unknown>) =>
      transMulti(`${init}${LocaleStandard.title}`, parameters),
    subTitle: (parameters?: string | Record<string, unknown>) =>
      trans(`${init}${LocaleStandard.subTitle}`, parameters),
    subTitles: (parameters?: Record<string, unknown>) =>
      transMulti(`${init}${LocaleStandard.subTitle}`, parameters),
    subTitleAlt: (parameters?: string | Record<string, unknown>) =>
      trans(`${init}${LocaleStandard.subTitleAlt}`, parameters),
    subTitleAlts: (parameters?: Record<string, unknown>) =>
      transMulti(`${init}${LocaleStandard.subTitleAlt}`, parameters),
    tooltip: (parameters?: string | Record<string, unknown>) =>
      trans(`${init}${LocaleStandard.tooltip}`, parameters),
    tooltips: () => transMulti(`${init}${LocaleStandard.tooltip}`),
    label: (parameters?: string | Record<string, unknown>) =>
      trans(`${init}${LocaleStandard.label}`, parameters),
    labels: () => transMulti(`${init}${LocaleStandard.label}`),
    placeholder: (parameters?: string | Record<string, unknown>) =>
      trans(`${init}${LocaleStandard.placeholder}`, parameters),
    placeholders: () => transMulti(`${init}${LocaleStandard.placeholder}`),
    withPrefix: (additionalPrefix: string) => {
      const result = new SubLocale(
        store,
        `${init}${additionalPrefix}`,
        trans,
        transMulti,
        i18n.language,
        ready
      );

      console.log(`@@ ${JSON.stringify(result)}`);

      return result;
    },
  };
}
