import React, { useContext } from "react";

export interface ISomeContext {
  invoke: () => string;
  sub: () => ISomeContext;
}

class SomeSubContext implements ISomeContext {
  constructor(private input: () => string) {
    // this.sub.bind(this);
    // this.invoke.bind(this);
  }

  public invoke = () => this.input() + " test";
  public sub = () => new SomeSubContext(this.invoke);
}

export const SomeContext: ISomeContext = {
  invoke: () => "OK",
  sub: () => new SomeSubContext(() => "..."),
};

export const TheContext = React.createContext(SomeContext);

interface ITest4Props {
  instance: ISomeContext;
}

export const useIt = (): ISomeContext => {
  const { invoke } = useContext(TheContext);

  const invokeIt = () => {
    const res = invoke();
    return res;
  };

  return {
    invoke: invokeIt,
    sub: () => new SomeSubContext(invokeIt),
  };
};

export const Test5 = ({ instance }: ITest4Props) => {
  const theThe = instance.sub();

  return (
    <>
      <h5>{theThe.invoke()}</h5>
    </>
  );
};

export const Test4 = ({ instance }: ITest4Props) => {
  const theThe = instance.sub();

  return (
    <>
      <h4>{theThe.invoke()}</h4>
      <Test5 instance={theThe} />
    </>
  );
};
export const Test3 = () => {
  const the = useIt();
  const theThe = the.sub();

  return (
    <>
      <h1>{the.invoke()}</h1>
      <h3>{theThe.invoke()}</h3>
      <Test4 instance={theThe} />
    </>
  );
};
