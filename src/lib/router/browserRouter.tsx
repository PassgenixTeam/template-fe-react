import { createBrowserRouter } from "react-router-dom";
import { Root } from "@global/Root";
import { ROOT } from "@global/constants";
import { ErrorPage } from "@pages/error";
import { homeRoute } from "@pages/home";
import { aboutUsRoute } from "@pages/about-us";

export const router = createBrowserRouter([
	{
		path: ROOT,
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [homeRoute, aboutUsRoute],
	},
]);
