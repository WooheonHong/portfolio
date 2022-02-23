import { PAGE_INFO } from "@Constant/.";
import React from "react";
import { Container } from "./style";

const MainPage = ({ children, pageName }: { children: React.ReactNode; pageName: string }) => {
  const { backgroundColor } = PAGE_INFO[pageName];

  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};

export default MainPage;
