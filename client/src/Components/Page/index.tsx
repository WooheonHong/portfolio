/* eslint-disable no-underscore-dangle */
import RedCircle from "@Atoms/RedCircle";
import { PAGE_INFO } from "@Constant/.";
import { convertPageName, getPageOrder, PageSize } from "@Util/.";
import React from "react";
import { Container, NavigatorContainer } from "./style";

// eslint-disable-next-line react/require-default-props
const MainPage = ({ children, pageName = "AboutMe" }: { children: React.ReactNode; pageName: string }) => {
  const _pageName = convertPageName(pageName);
  const { backgroundColor } = PAGE_INFO[_pageName];
  const nowPage = getPageOrder(pageName);

  return (
    <Container backgroundColor={backgroundColor}>
      {children}
      <NavigatorContainer>{new Array(PageSize).fill(0).map((_, idx) => (idx === nowPage ? <RedCircle fill="red" width="30px" height="30px" /> : <RedCircle fill="none" width="30px" height="30px" />))}</NavigatorContainer>
    </Container>
  );
};

export default MainPage;
