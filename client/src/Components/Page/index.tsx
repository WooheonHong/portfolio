/* eslint-disable no-underscore-dangle */
import { PAGE_INFO } from "@Constant/.";
import { convertPageName } from "@Util/.";
import React from "react";
import { Container } from "./style";

// eslint-disable-next-line react/require-default-props
const MainPage = ({ children, pageName = "AboutMe" }: { children: React.ReactNode; pageName: string }) => {
  const _pageName = convertPageName(pageName);
  const { backgroundColor } = PAGE_INFO[_pageName];

  return <Container backgroundColor={backgroundColor}>{children}</Container>;
};

export default MainPage;
