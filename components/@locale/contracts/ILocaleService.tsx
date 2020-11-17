export interface ILocaleService {
  /**
   * Standard title (base-path/title)
   */
  title: (parameters?: string | Record<string, unknown>) => string;

  /**
   * Get sub locale representation of the current locale + additional path (within the json file)
   * @param additionalPrefix
   * @returns locale-service
   */
  withPrefix(additionalPrefix: string): ILocaleService;
}
