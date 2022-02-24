import Header from "@Organisms/Header";
import AboutMeTemplate from "@Templates/AboutMe";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LOGO, PHONE_NUMBER, EMAIL } from "@Constant/.";
import CareerTemplate from "@Templates/Career";
import ExprienceTemplate from "@Templates/Exprience";
import IntroductionTemplate from "@Templates/Introduction";
import LearnedTemplate from "@Templates/Learned";
import ProjectTemplate from "@Templates/Project";
import SkillSetTemplate from "@Templates/SkillSet";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MainPage from "./Components/Page";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const { pathname } = useLocation();

  const pageName = pathname.replace("/", "");
  // eslint-disable-next-line no-underscore-dangle
  const _pageName = pageName || "AboutMe";

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={pathname} className="pageSlider" timeout={1000}>
        <MainPage pageName={_pageName}>
          <Header logoText={LOGO} infoText={`${PHONE_NUMBER}/${EMAIL}`} pageName={_pageName} />
          <ScrollToTop />
          <Routes>
            <Route path="/AboutMe" element={<AboutMeTemplate pageName={_pageName} />} />
            <Route path="/SkillSet" element={<SkillSetTemplate pageName={_pageName} />} />
            <Route path="/Career" element={<CareerTemplate pageName={_pageName} />} />
            <Route path="/Project" element={<ProjectTemplate pageName={_pageName} />} />
            <Route path="/Exprience" element={<ExprienceTemplate pageName={_pageName} />} />
            <Route path="/Learned" element={<LearnedTemplate pageName={_pageName} />} />
            <Route path="/Introduction" element={<IntroductionTemplate />} />
            <Route path="*" element={<Navigate replace to="/AboutMe" />} />
          </Routes>
        </MainPage>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
