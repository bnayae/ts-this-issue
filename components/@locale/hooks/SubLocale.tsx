import { ILocaleService } from '../contracts/ILocaleService';
import { LocaleStandard } from '../contracts/LocaleStandard';
import { TLocaleResult } from '../contracts/TLocaleResult';

export class SubLocale implements ILocaleService {
  public prefix: string;

  constructor(
    public store: string,
    init: string,
    private single: <T extends TLocaleResult = string>(
      path: string,
      parameters?: string | Record<string, unknown>,
      defaultValue?: string | undefined
    ) => T,
    private multi: (
      path: string,
      parameters?: Record<string, unknown>,
      defaultValue?: string | undefined
    ) => string[] | undefined,
    public language: string,
    public ready: boolean
  ) {
    this.prefix = init.endsWith('.') ? init : `${init}.`;
  }

  public t<T extends TLocaleResult = string>(
    keyPath: string,
    parameters?: string | Record<string, unknown>
  ) {
    return this.single<T>(`${this.prefix}${keyPath}`, parameters);
  }

  public ts(keyPath: string, parameters?: Record<string, unknown>) {
    return this.multi(`${this.prefix}${keyPath}`, parameters);
  }

  public title(parameters?: string | Record<string, unknown>) {
    console.log(`## ${JSON.stringify(this)}`);

    return this.single(`${this.prefix}${LocaleStandard.title}`, parameters);
  }

  public titles(parameters?: Record<string, unknown>) {
    return this.multi(`${this.prefix}${LocaleStandard.title}`, parameters);
  }

  public subTitle(parameters?: string | Record<string, unknown>) {
    console.log(`## ${JSON.stringify(this)}`);

    return this.single(`${this.prefix}${LocaleStandard.subTitle}`, parameters);
  }

  public subTitles(parameters?: Record<string, unknown>) {
    return this.multi(`${this.prefix}${LocaleStandard.subTitle}`, parameters);
  }

  public subTitleAlt(parameters?: string | Record<string, unknown>) {
    return this.single(
      `${this.prefix}${LocaleStandard.subTitleAlt}`,
      parameters
    );
  }

  public subTitleAlts(parameters?: Record<string, unknown>) {
    return this.multi(
      `${this.prefix}${LocaleStandard.subTitleAlt}`,
      parameters
    );
  }

  public tooltip(parameters?: string | Record<string, unknown>) {
    return this.single(`${this.prefix}${LocaleStandard.tooltip}`, parameters);
  }

  public tooltips(parameters?: Record<string, unknown>) {
    return this.multi(`${this.prefix}${LocaleStandard.tooltip}`, parameters);
  }

  public label(parameters?: string | Record<string, unknown>) {
    return this.single(`${this.prefix}${LocaleStandard.label}`, parameters);
  }

  public labels(parameters?: Record<string, unknown>) {
    return this.multi(`${this.prefix}${LocaleStandard.label}`, parameters);
  }

  public placeholder(parameters?: string | Record<string, unknown>) {
    return this.single(
      `${this.prefix}${LocaleStandard.placeholder}`,
      parameters
    );
  }

  public placeholders(parameters?: Record<string, unknown>) {
    return this.multi(
      `${this.prefix}${LocaleStandard.placeholder}`,
      parameters
    );
  }

  public withPrefix(additionalPrefix: string) {
    const result = new SubLocale(
      this.store,
      `${this.prefix}${additionalPrefix}`,
      this.single,
      this.multi,
      this.language,
      this.ready
    );
    return result;
  }
}
