import React from "react";
import { useAbsoluteLocale, useLocale } from "./@locale";
import { TestB } from "./TestB";

export const Test = () => {
  const locale = useAbsoluteLocale("common");
  return (
    <>
      <h1>{locale.title()}</h1>
      <TestB locale={locale} />
    </>
  );
};
