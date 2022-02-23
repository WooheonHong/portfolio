import { DefaultBlackColor, DefaultWhiteColor } from "@Style/.";
import { CareerInfoType, PAGES_INFO_TYPE, ProjectInfoType } from "@Type/.";
import pythonIcon from "@asset/python.png";
import r from "@asset/r.jpg";
import pytorch from "@asset/pytorch.png";
import sklearn from "@asset/sklearn.png";
import tidyverse from "@asset/tidyverse.png";
import book1 from "@asset/book1.png";
import book2 from "@asset/book2.jpg";
import book3 from "@asset/book3.jpg";
import book4 from "@asset/book4.png";

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
  Exprience: {
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

export const PROJECT_INFOS: ProjectInfoType[] = [
  {
    link: "https://github.com/WooheonHong/MAD",
    title: "Semi-supervised Time Series Anomaly Detection",
    date: "2021. 05. 10 ~ 2022. 04. 29",
    organization: "삼성전자",
    info: "기존의 PU Learning anomaly detection 방법과 semi-supervised anomaly detection 방법을 다변량 시계열에서 실험하고 결과를 정리했습니다.\n 대표적으로 PUMAD(2020, InfoScience)와 DeepSAD(2020, ICLR)를 실험하였고 레이블 비율에 비교적 영향을 적게 받는 PUMAD를 기존 unsupervised learning time series anomaly detection방법의 대안으로 제안했습니다.",
  },
  { link: "https://github.com/ML-for-graph-analysis/Traffic-Prediction", title: "Traffic Forecasting(Spatio-temporal Forecasting)", date: "2020. 10. 01 ~ 2020. 12. 31", organization: "course work", info: "그래프 정보를 가지는 복잡한 시공간 데이터의 특성을 반영하기 위해 GCN기반인 (Graph Wavenet,2019 IJCAI) 와 StemGNN (2020 NIPS)을 사용했습니다. \n 사전에 정의한 그래프를 사용하지 않고 attention으로 학습시킨 그래프를 사용하는 것이 좋은 성능을 보였습니다." },
  {
    link: "https://github.com/SEHOON-PARK/SKYscanner",
    title: "항공 지연 예측",
    date: " 2019. 07. 03 ~ 2019. 11. 26",
    organization: "course work",
    info: "삼각함수를 활용한 시간 피쳐 생성, 공간 정보를 활용하는 네트워크 중심성 피쳐를 생성하였고 모델 성능 향상에 큰 도움이 되었습니다. \n 좀 더 정확한 평가를 위해 time series cross validation을 사용하였고 validation set을 test set과 최  대한 비슷하게 맞추고자 노력했습니다. \n 또한 모델이 거의 예측하지 못하는 지연 사유와 날짜를 찾아서 한국공항공사 측에 제공했습니다.",
  },
  {
    link: "https://github.com/WooheonHong/BERD",
    title: "Biomedical Entity Relation Detection(BERD)",
    date: " 2020. 12. 21 ~ 2021. 03. 26",
    organization: " AI Insight",
    info: "PubMed 논문의 entity를 추출하고 이들의 관계를 시각화 한 프로젝트입니다. \n 의료 종사자에게 도움이 되기 위해서 진행했습니다. \n 저는 다음 두 가지 기술을 구현했습니다. \n\n    1. Named Entity Normalization (NEN)entity 쌍의 관계 네트워크를 생성하는 알고리즘 구현(한 문장, 여러 문장, 문헌 단위)\n 2. 2 hop 까지 고려할 수 있는 Swanson ABC model을 사용해서 표현력 향상",
  },
];

export const EXPRIENCE_INFOS = {
  title: "고객프로파일링을 위한 가전 로그 데이터 분석",
  date: "2020. 01. 13 ~ 2020. 02. 27",
  organization: "LG Electronics Intern",
  subtitle: ["고객프로파일링 ideation 및 EDA 로직 설계", " 기기의 패턴을 파악"],
  detail: ["PySpark로 파싱과 필터링을 진행한 뒤 변수 선택", "tidyverse를 통한 냉장고 사용량을 시각화 ", "특히 letter-value plot을 통해 구매날짜로부터의 시간대 별 사용량 분포를 효율적으로 제시"],
};

export const BOOK_LIST = [book1, book2, book3, book4];

export const STUDIED_IFNO = [
  { title: "머신러닝 , 딥러닝 공부 자료", link: "https://github.com/WooheonHong/ML-DL-Book-Summary" },
  { title: "Udemy 추천시스템 강의 정리 ", link: "https://github.com/WooheonHong/ML-DL-OnlineCourses" },
  { title: "데이터 사이언스 공부 자료", link: "https://github.com/WooheonHong/DS-Undergraduate" },
];
