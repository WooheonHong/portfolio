import { DefaultBlackColor, DefaultWhiteColor } from "@Style/.";
import { PAGES_INFO_TYPE } from "@Type/.";
import pythonIcon from "@asset/python.png";
import r from "@asset/r.jpg";
import pytorch from "@asset/pytorch.png";
import sklearn from "@asset/sklearn.png";
import tidyverse from "@asset/tidyverse.png";

export const LOGO = `HWH`;

export const PHONE_NUMBER = `+82 10-2980-9419 `;

export const EMAIL = ` WOOHEON@GMAIL.COM`;

export const IntroductionMessage = ["데이터로", "말하는", "분석가", "홍우헌"];

export const LinkedInLink = "https://www.linkedin.com/in/wooheon-hong-b33621200/";

export const GithubLink = "https://github.com/WooheonHong";

export const HelloMessage = "안녕하세요! 데이터로 말하는 분석가 홍우헌입니다";

export const SkillSetInfo = [
  { title: "연구기술", text: "semi-supervsied learning, anomaly detection 그리고 time series forecasting 을 연구하였습니다." },
  { title: "Data Science 기술", text: "데이터가 굉장히 클 때 pyspark로 1차로 처리한 뒤 효율적인 시각화 방법을 제시하였습니다. 시공간 정보를 활용하는 피쳐 엔지니어링을 통해 항공지연예측 프로젝트를 성공적으로 완료했습니다" },
];

export const PAGE_INFO: PAGES_INFO_TYPE = {
  AboutMe: {
    fontColor: DefaultBlackColor,
  },
  Career: {
    fontColor: DefaultWhiteColor,
  },
  Experience: {
    fontColor: DefaultBlackColor,
  },
  Introduction: {
    fontColor: DefaultWhiteColor,
  },
  Learned: {
    fontColor: DefaultBlackColor,
  },
  Project: {
    fontColor: DefaultWhiteColor,
  },
  SkillSet: {
    fontColor: DefaultBlackColor,
  },
};

export const SkillSetIcons = [pythonIcon, pytorch, r, sklearn, tidyverse];
