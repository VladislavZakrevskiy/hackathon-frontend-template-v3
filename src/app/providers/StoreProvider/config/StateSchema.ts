import { Action, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { UserSchema } from "@/entities/User";
import { UISchema } from "@/features/UI";
import { NavigateOptions, To } from "react-router-dom";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
	user: UserSchema;
	ui: UISchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

	// Async reducers
	// **here**
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export type MountedReducer = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: Action) => Reducer<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
	getMountedReducers: () => MountedReducer;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
	nav?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T = string> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateSchema;
}
