import { NextPage } from "next";
import React from "react";
import { Test } from "../components/Test";
import { IssueSample } from "../interfaces/IssueSample";

const IndexPage: NextPage = () => {
  const issue = new IssueSample(["a", "b"]);
  return <Test issue={issue} />;
};

export default IndexPage;
