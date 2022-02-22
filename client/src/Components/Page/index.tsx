import { useReducer } from "react";
import { templateIdxReducer } from "@Hook/.";
import AboutMeTemplate from "@Templates/AboutMe";
import CareerTemplate from "@Templates/Career";
import ExprienceTemplate from "@Templates/Experience";
import LearnedTemplate from "@Templates/Learned";
import IntroductionTemplate from "@Templates/Introduction";
import ProjectTemplate from "@Templates/Project";
import SkillSetTemplate from "@Templates/SkillSet";

const MainPage = () => {
  const [templateIdxState] = useReducer(templateIdxReducer, 0);
  return (
    <>
      <AboutMeTemplate index={templateIdxState} />
      <SkillSetTemplate index={templateIdxState} />
      <CareerTemplate index={templateIdxState} />
      <ProjectTemplate index={templateIdxState} />
      <ExprienceTemplate index={templateIdxState} />
      <LearnedTemplate index={templateIdxState} />
      <IntroductionTemplate index={templateIdxState} />
    </>
  );
};

export default MainPage;
