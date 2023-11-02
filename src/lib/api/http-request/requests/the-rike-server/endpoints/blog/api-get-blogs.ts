import { request } from "@api/http-request/requests/the-rike-server/request";
import { joinPaths } from "@remix-run/router";
import { generatePath } from "react-router-dom";
import { ROOT_ENDPOINT } from "../../constants";
import { IBlog } from "../../models/blog";
import { IPaginationOptions } from "../interfaces/pagination.interface";
import { IResponsePagination } from "../interfaces/response.interface";

export const GET_BLOG_ENDPOINT = joinPaths([ROOT_ENDPOINT, "blog"]);

export type ApiGetBlogsRequest = IPaginationOptions & {
	title?: string;
	type?: IBlog["type"];
	sortBy?: "newest" | "views";
};

export type ApiGetBlogsResponse = IResponsePagination<IBlog>;

export const getBlogs = async (params: ApiGetBlogsRequest) => request.get<ApiGetBlogsRequest, ApiGetBlogsResponse>(generatePath(joinPaths([ROOT_ENDPOINT, "blog/:slug"]), params));
