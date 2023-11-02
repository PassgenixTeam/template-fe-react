import { IBlog } from "@api/http-request/requests/the-rike-server/models/blog";
import { request } from "@api/http-request/requests/the-rike-server/request";
import { joinPaths } from "@remix-run/router";
import { generatePath } from "react-router-dom";
import { ROOT_ENDPOINT } from "../../constants";

export const GET_BLOG_BY_SLUG_ENDPOINT = joinPaths([ROOT_ENDPOINT, "blog/:slug"]);

export type ApiGetBlogBySlugRequest = {
	slug: string;
};

export type ApiGetBlogBySlugResponse = IBlog;

export const getBlogBySlug = async (params: ApiGetBlogBySlugRequest) =>
	request.get<ApiGetBlogBySlugRequest, ApiGetBlogBySlugResponse>(generatePath(joinPaths([ROOT_ENDPOINT, "blog/:slug"]), params));
