import { PAGE_INFO } from "@Constant/.";

export const convertPageName = (pageName: string) =>
  // eslint-disable-next-line no-nested-ternary
  pageName.split("/")[0] === "Project" ? "Project" : pageName in PAGE_INFO ? pageName : "AboutMe";
