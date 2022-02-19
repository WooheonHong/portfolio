import { useReducer } from "react";
import { templateIdxReducer } from "@Hook/.";
import AboutMeTemplate from "@Templates/AboutMe";
import CareerTemplate from "@Templates/Career";

const MainPage = () => {
  const [templateIdxState] = useReducer(templateIdxReducer, 0);
  return (
    <>
      <AboutMeTemplate index={templateIdxState} />
      <CareerTemplate index={templateIdxState} />
    </>
  );
};

export default MainPage;
