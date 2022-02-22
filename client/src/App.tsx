import Header from "@Organisms/Header";
import AboutMeTemplate from "@Templates/AboutMe";
import { Routes, Route, Navigate } from "react-router-dom";
import { LOGO, PHONE_NUMBER, EMAIL } from "@Constant/.";

const App = () => {
  return (
    <>
      <Header logoText={LOGO} infoText={`${PHONE_NUMBER}/${EMAIL}`} />
      <Routes>
        <Route path="/AboutMe" element={<AboutMeTemplate index={0} />} />
        <Route path="/SkillSet" />
        <Route path="/Career" />
        <Route path="/Project" />
        <Route path="/Exprience" />
        <Route path="/Learned" />
        <Route path="/Introduction" />
        <Route path="*" element={<Navigate replace to="/AboutMe" />} />
      </Routes>
    </>
  );
};

export default App;
