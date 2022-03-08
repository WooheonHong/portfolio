/* eslint-disable no-underscore-dangle */
import MenuIcon from "@Atoms/Menu";
import { PAGE_INFO } from "@Constant/.";
import { convertPageName } from "@Util/.";
import { useNavigate } from "react-router-dom";
import { Container, Title, ContentText } from "./style";

const Header = ({ logoText, infoText, pageName = "AboutMe" }: { logoText: string; infoText: string; pageName: string }) => {
  const _pageName = convertPageName(pageName);
  const { fontColor } = PAGE_INFO[_pageName];
  const navigator = useNavigate();
  return (
    <Container>
      <Title
        onClick={() => {
          navigator("/AboutMe");
        }}
        color={fontColor}
      >
        {logoText}
      </Title>
      <ContentText color={fontColor}>{infoText}</ContentText>
      <MenuIcon />
    </Container>
  );
};

export default Header;
