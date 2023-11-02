import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { ABOUT_US_PAGE_PATH } from "./constants";

const AboutUsPage = lazy(() => import("./about-us"));

export const aboutUsRoute: RouteObject = {
	index: true,
	path: ABOUT_US_PAGE_PATH,
	element: <AboutUsPage />,
};
