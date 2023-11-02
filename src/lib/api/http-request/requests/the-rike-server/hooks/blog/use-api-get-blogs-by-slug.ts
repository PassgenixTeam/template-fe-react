import { baseQueryObserverOptions } from "@api/http-request/base";
import { API_NAME } from "@api/http-request/requests/the-rike-server/constants";
import { QueryObserverOptions, useQuery } from "@tanstack/react-query";
import { ApiGetBlogBySlugRequest, ApiGetBlogBySlugResponse, getBlogBySlug } from "../../endpoints/blog";

export const useApiGetBlogBySlug = (params: ApiGetBlogBySlugRequest, options?: QueryObserverOptions<ApiGetBlogBySlugResponse, any>) => {
	return useQuery<ApiGetBlogBySlugResponse, any>({
		queryKey: [API_NAME, "get-blog-by-slug", params],
		queryFn: async () => getBlogBySlug(params),
		...baseQueryObserverOptions,
		...options,
	});
};
