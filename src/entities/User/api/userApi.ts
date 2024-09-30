import { rtkApi } from "@/shared/api/rtkApi";
import { SignInDto } from "../model/types/dto/SignInDto";
import { User } from "../model/types/User";

const userApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getMe: build.query<User, undefined>({
			query: () => "/user",
		}),

		register: build.mutation<User & { accessToken: string }, SignInDto>({
			query: (authData) => ({
				url: "user/register",
				body: authData,
				method: "POST",
			}),
		}),

		signIn: build.mutation<User & { accessToken: string }, SignInDto>({
			query: (authData) => ({
				url: "/user/signIn",
				body: authData,
				method: "POST",
			}),
		}),

		signOut: build.mutation({
			query: () => "/user/signOut",
		}),
	}),
});

export const { useRegisterMutation, useSignInMutation, useSignOutMutation, useGetMeQuery } = userApi;
