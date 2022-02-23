import LGIcon from "@asset/LG.png";
import refrigerator from "@asset/refrigerator.png";
import { LgLogoStyle, RefrigeratorStyle } from "@Style/.";
import { Arrow } from "./style";

const ExprienceLogos = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <img src={LGIcon} alt="LG Logo" style={LgLogoStyle as any} />
      <img src={refrigerator} alt="LG refrigerator" style={RefrigeratorStyle as any} />
      <Arrow onClick={onClick}>{">"}</Arrow>
    </>
  );
};

export default ExprienceLogos;
