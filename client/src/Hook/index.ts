import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface IndexAction {
  type: string;
}

export const IdxReducer = (state: number, action: IndexAction): number => {
  switch (action.type) {
    case "INCREMENT":
      if (state === 3) return state;
      return state + 1;
    case "DECREMENT":
      if (state === 0) return state;
      return state - 1;
    default:
      return state;
  }
};

export const useScroll = ({ beforePage, afterPage }: { beforePage?: string; afterPage?: string }) => {
  const [y, setY] = useState(window.scrollY);
  const navigator = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleScroll(e: any) {
    if (y > window.scrollY) {
      if (!beforePage) return;
      navigator(`/${beforePage}`);
    } else if (y < window.scrollY) {
      if (!afterPage) return;
      navigator(`/${afterPage}`);
    }
    setY(window.scrollY);
  }
  useEffect(() => {
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);
};
