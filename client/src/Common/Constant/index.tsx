import { DefaultBlackColor, DefaultWhiteColor } from "@Style/.";
import { CareerInfoType, PAGES_INFO_TYPE } from "@Type/.";
import pythonIcon from "@asset/python.png";
import r from "@asset/r.jpg";
import pytorch from "@asset/pytorch.png";
import sklearn from "@asset/sklearn.png";
import tidyverse from "@asset/tidyverse.png";

export const LOGO = `HWH`;

export const PHONE_NUMBER = `+82 10-2980-9419 `;

export const EMAIL = ` quasar103@postech.ac.kr`;

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
    backgroundColor: DefaultWhiteColor,
  },
  Career: {
    fontColor: DefaultWhiteColor,
    backgroundColor: DefaultBlackColor,
  },
  Experience: {
    fontColor: DefaultBlackColor,
    backgroundColor: DefaultWhiteColor,
  },
  Introduction: {
    fontColor: DefaultWhiteColor,
    backgroundColor: DefaultBlackColor,
  },
  Learned: {
    fontColor: DefaultBlackColor,
    backgroundColor: DefaultWhiteColor,
  },
  Project: {
    fontColor: DefaultWhiteColor,
    backgroundColor: DefaultBlackColor,
  },
  SkillSet: {
    fontColor: DefaultBlackColor,
    backgroundColor: DefaultWhiteColor,
  },
};

export const SkillSetIcons = [pythonIcon, pytorch, r, sklearn, tidyverse];

export const CAREER_INFOS: CareerInfoType[] = [
  { date: "2020. 09 ~ 2022. 08(졸업 예정)", info: "포항공대 인공지능대학원 석사과정", link: "https://sites.google.com/view/postechdi" },
  { date: "2020. 01. 13 ~ 2020 .02 .28 ", info: "LG 전자 인턴" },
  { date: "2019. 07. 03 ~ 2019. 09. 10", info: "빅콘테스트 퓨처스리그, 최우수상" },
  { date: "2020. 01. 13 ~ 2020 .02 .28", info: "빅데이터 청년 캠프 수료" },
  { date: "2014. 3 ~ 2020. 8", info: "경북대학교 통계학과 전공 및 빅데이터 연계전공" },
];
