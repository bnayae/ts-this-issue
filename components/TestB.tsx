import React from "react";
import { ILocaleService } from "./@locale";

interface IBProps {
  locale: ILocaleService;
}

export const TestB = ({ locale }: IBProps) => {
  const { title } = locale.withPrefix("sub");
  return <h1>{title()}</h1>;
};
