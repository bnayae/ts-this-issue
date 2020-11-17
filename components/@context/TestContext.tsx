import React, { useContext } from "react";

export interface ISomeContext {
  invoke: () => string;
  sub: () => ISomeContext;
}

class SomeSubContext implements ISomeContext {
  private input: () => string;
  constructor(inp: () => string) {
    this.sub.bind(this);
    this.invoke.bind(this);
    this.input = inp;
  }

  public invoke = () => this.input() + " test";
  public sub = () => new SomeSubContext(this.input);
}

export const SomeContext: ISomeContext = {
  invoke: () => "OK",
  sub: () => new SomeSubContext(() => "..."),
};

export const TheContext = React.createContext(SomeContext);

interface ITest4Props {
  instance: ISomeContext;
}

export const Test4 = ({ instance }: ITest4Props) => {
  const theThe = instance.sub(); //.bind(instance); // as any; //.call((instance as SomeSubContext).input);
  // console.log((instance as SomeSubContext).input);

  return (
    <>
      <h4>{theThe.invoke()}</h4>
    </>
  );
};

export const Test3 = () => {
  const the = useContext(TheContext);
  const theThe = the.sub();

  return (
    <>
      <h1>{the.invoke()}</h1>
      <h3>{theThe.invoke()}</h3>
      <Test4 instance={theThe} />
    </>
  );
};
