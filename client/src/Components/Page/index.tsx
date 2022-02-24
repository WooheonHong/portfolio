/* eslint-disable no-underscore-dangle */
import { PAGE_INFO } from "@Constant/.";
import React from "react";
import { Container } from "./style";

// eslint-disable-next-line react/require-default-props
const MainPage = ({ children, pageName = "AboutMe" }: { children: React.ReactNode; pageName: string }) => {
  const { backgroundColor } = PAGE_INFO[pageName];

  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};

export default MainPage;
