/* eslint-disable @typescript-eslint/no-unused-vars */
import LGIcon from "@asset/LG.png";
import refrigerator from "@asset/refrigerator.png";
import { LgLogoStyle, RefrigeratorStyle } from "@Style/.";

const ExprienceLogos = () => {
  return (
    <>
      <img src={LGIcon} alt="LG Logo" style={LgLogoStyle as any} />
      {/* <img src={refrigerator} alt="LG refrigerator" style={RefrigeratorStyle as any} /> */}
    </>
  );
};

export default ExprienceLogos;
