import { QueryObserverOptions } from "@tanstack/react-query";

export const baseQueryObserverOptions: QueryObserverOptions<any, any> = {
	retry(failureCount, error) {
		if (failureCount < 3) return true;
		else return false;
	},
};
