import { PAGE_INFO, PROJECT_INFOS } from "@Constant/.";

export const convertPageName = (pageName: string) =>
  // eslint-disable-next-line no-nested-ternary
  pageName.split("/")[0] === "Project" ? "Project" : pageName in PAGE_INFO ? pageName : "AboutMe";

export const getProjectBeforeAfter = (index: number) => {
  let before = "Career";
  let after = `Project/${index + 1}`;
  const projectContentSize = PROJECT_INFOS.length + 1;
  if (index > 1) before = `Project/${index - 1}`;
  if (index === projectContentSize - 1) after = `Learned`;

  return [before, after];
};

export const getPageOrder = (pageName: string) => Object.keys(PAGE_INFO).indexOf(pageName);

export const PageSize = Object.keys(PAGE_INFO).length;
