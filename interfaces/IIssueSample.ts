export interface IIssueSample {
  path: string[];
  getData: () => string[];
  withSubPath: (subPath: string) => IIssueSample;
}
