import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USER_ACCESS_TOKEN } from "@/shared/consts/localStorage";

export const rtkApi = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: __API__,
		prepareHeaders: (headers) => {
			const token = localStorage.getItem(USER_ACCESS_TOKEN) || "";
			if (token) {
				headers.set("Authorization", token);
			}
			return headers;
		},
	}),
	endpoints: (build) => ({}),
});
