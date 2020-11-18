import { ILocaleService } from "../contracts/ILocaleService";
import { LocaleStandard } from "../contracts/LocaleStandard";

export class SubLocale implements ILocaleService {
  public prefix: string;

  private single: (
    path: string,
    parameters?: string | Record<string, unknown>,
    defaultValue?: string | undefined
  ) => string;

  constructor(
    init: string,
    trans: (
      path: string,
      parameters?: string | Record<string, unknown>,
      defaultValue?: string | undefined
    ) => string
  ) {
    this.prefix = init.endsWith(".") ? init : `${init}.`;
    this.single = trans.bind(this);
    this.single.bind(this);
  }

  public title = (parameters?: string | Record<string, unknown>) => {
    return this.single(`${this.prefix}${LocaleStandard.title}`, parameters);
  };

  public withPrefix(additionalPrefix: string) {
    const result = new SubLocale(
      `${this.prefix}${additionalPrefix}`,
      this.single // .bind(this)
    );
    return result;
  }
}
