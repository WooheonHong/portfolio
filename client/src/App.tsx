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
import MainPage from "./Components/Page";

const App = () => {
  const location = useLocation();
  console.log(location);
  const pageName = "AboutMe";

  return (
    <MainPage pageName={pageName}>
      <Header logoText={LOGO} infoText={`${PHONE_NUMBER}/${EMAIL}`} pageName={pageName} />
      <Routes>
        <Route path="/AboutMe" element={<AboutMeTemplate pageName="AboutMe" />} />
        <Route path="/SkillSet" element={<SkillSetTemplate pageName="SkillSet" />} />
        <Route path="/Career" element={<CareerTemplate pageName="Career" />} />
        <Route path="/Project" element={<ProjectTemplate pageName="Project" />} />
        <Route path="/Exprience" element={<ExprienceTemplate pageName="Exprience" />} />
        <Route path="/Learned" element={<LearnedTemplate pageName="Learned" />} />
        <Route path="/Introduction" element={<IntroductionTemplate />} />
        <Route path="*" element={<Navigate replace to="/AboutMe" />} />
      </Routes>
    </MainPage>
  );
};

export default App;
