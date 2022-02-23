import Header from "@Organisms/Header";
import AboutMeTemplate from "@Templates/AboutMe";
import { Routes, Route, Navigate } from "react-router-dom";
import { LOGO, PHONE_NUMBER, EMAIL } from "@Constant/.";
import CareerTemplate from "@Templates/Career";
import ExprienceTemplate from "@Templates/Experience";
import IntroductionTemplate from "@Templates/Introduction";
import LearnedTemplate from "@Templates/Learned";
import ProjectTemplate from "@Templates/Project";
import SkillSetTemplate from "@Templates/SkillSet";
import MainPage from "./Components/Page";

const App = () => {
  return (
    <MainPage>
      <Header logoText={LOGO} infoText={`${PHONE_NUMBER}/${EMAIL}`} />
      <Routes>
        <Route path="/AboutMe" element={<AboutMeTemplate pageName="AboutMe" />} />
        <Route path="/SkillSet" element={<SkillSetTemplate pageName="SkillSet" />} />
        <Route path="/Career" element={<CareerTemplate index={0} />} />
        <Route path="/Project" element={<ProjectTemplate index={0} />} />
        <Route path="/Exprience" element={<ExprienceTemplate index={0} />} />
        <Route path="/Learned" element={<LearnedTemplate index={0} />} />
        <Route path="/Introduction" element={<IntroductionTemplate index={0} />} />
        <Route path="*" element={<Navigate replace to="/AboutMe" />} />
      </Routes>
    </MainPage>
  );
};

export default App;
