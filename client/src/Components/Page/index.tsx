import React from "react";
import { Container } from "./style";

const MainPage = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default MainPage;
