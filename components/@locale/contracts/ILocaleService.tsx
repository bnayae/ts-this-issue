import { TLocaleResult } from './TLocaleResult';

export interface ILocaleService {
  /**
   * Indicate loaded locale
   */
  ready: boolean;
  /**
   * The current language
   */
  language: string;
  /**
   * The current
   */
  store: string;
  /**
   * The local base path (additional path will be concatenate to this base path)
   */
  prefix: string;
  /**
   * Generic locale key (for single line text)
   */
  t: <T extends TLocaleResult = string>(
    keyPath: string,
    parameters?: string | Record<string, unknown>
  ) => T;
  /**
   * Generic locale key (for multi line text)
   */
  ts: (
    keyPath: string,
    parameters?: Record<string, unknown>
  ) => string[] | undefined;

  /**
   * Standard title (base-path/title)
   */
  title: (parameters?: string | Record<string, unknown>) => string;
  /**
   * Standard title (base-path/title)
   */
  titles: (parameters?: Record<string, unknown>) => string[] | undefined;
  /**
   * Standard sub-title (base-path/sub-title)
   */
  subTitle: (parameters?: string | Record<string, unknown>) => string;
  /**
   * Standard sub-title (base-path/sub-title), return multi lines
   */
  subTitles: (parameters?: Record<string, unknown>) => string[] | undefined;

  /**
   * Standard sub-title-alt (base-path/sub-title)
   */
  subTitleAlt: (parameters?: string | Record<string, unknown>) => string;
  /**
   * Standard sub-title-alt (base-path/sub-title), return multi lines
   */
  subTitleAlts: (parameters?: Record<string, unknown>) => string[] | undefined;

  /**
   * Standard tooltip (base-path/tooltip)
   */
  tooltip: (parameters?: string | Record<string, unknown>) => string | string[];
  /**
   * Standard tooltip (base-path/sub-title), return multi lines
   */
  tooltips: (parameters?: Record<string, unknown>) => string[] | undefined;

  /**
   * Standard placeholder (base-path/place-holder)
   */
  placeholder: (parameters?: string | Record<string, unknown>) => string;
  /**
   * Standard placeholder (base-path/sub-title), return multi lines
   */
  placeholders: (parameters?: Record<string, unknown>) => string[] | undefined;

  /**
   * Standard label (base-path/label)
   */
  label: (parameters?: string | Record<string, unknown>) => string;
  /**
   * Standard label (base-path/sub-title), return multi lines
   */
  labels: (parameters?: Record<string, unknown>) => string[] | undefined;

  /**
   * Get sub locale representation of the current locale + additional path (within the json file)
   * @param additionalPrefix
   * @returns locale-service
   */
  withPrefix(additionalPrefix: string): ILocaleService;
}
