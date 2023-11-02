import { joinPaths } from "@remix-run/router";
import { ROOT } from "@global/constants";

export const ABOUT_US_PAGE = "about-us";
export const ABOUT_US_PAGE_PATH = joinPaths([ROOT, ABOUT_US_PAGE]);
