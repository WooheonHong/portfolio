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

const App = () => {
  const { pathname } = useLocation();

  const pageName = pathname.replace("/", "");

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={pathname} className="pageSlider" timeout={500}>
        <MainPage pageName={pageName}>
          <Header logoText={LOGO} infoText={`${PHONE_NUMBER}/${EMAIL}`} pageName={pageName} />
          <Routes>
            <Route path="/AboutMe" element={<AboutMeTemplate pageName={pageName} />} />
            <Route path="/SkillSet" element={<SkillSetTemplate pageName={pageName} />} />
            <Route path="/Career" element={<CareerTemplate pageName={pageName} />} />
            <Route path="/Project" element={<ProjectTemplate pageName={pageName} />} />
            <Route path="/Exprience" element={<ExprienceTemplate pageName={pageName} />} />
            <Route path="/Learned" element={<LearnedTemplate pageName={pageName} />} />
            <Route path="/Introduction" element={<IntroductionTemplate />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </MainPage>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
