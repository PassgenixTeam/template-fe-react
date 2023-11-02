import { baseQueryObserverOptions } from "@api/http-request/base";
import { API_NAME } from "@api/http-request/requests/the-rike-server/constants";
import { QueryObserverOptions, useQuery } from "@tanstack/react-query";
import { ApiGetBlogsRequest, ApiGetBlogsResponse, getBlogs } from "../../endpoints/blog";

export const useApiGetBlogs = (params: ApiGetBlogsRequest, options?: QueryObserverOptions<ApiGetBlogsResponse, any>) => {
	return useQuery<ApiGetBlogsResponse, any>({
		queryKey: [API_NAME, "get-blog-by-slug", params],
		queryFn: async () => getBlogs(params),
		...baseQueryObserverOptions,
		...options,
	});
};
