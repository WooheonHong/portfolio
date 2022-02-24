import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};

export default ScrollToTop;
