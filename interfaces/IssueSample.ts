import { IIssueSample } from './IIssueSample';

export class IssueSample implements IIssueSample {
  // eslint-disable-next-line no-useless-constructor
  constructor(public path: string[]) {}

  public getData(): string[] {
    return this.path;
  }

  public withSubPath(subPath: string): IIssueSample {
    return new IssueSample([...this.path, subPath]);
  }
}
