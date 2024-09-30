import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from "@/app/providers/StoreProvider";
import { FC, ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducerList = {
	[name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface Props {
	children: ReactNode;
	reducers: ReducerList;
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<Props> = ({ children, reducers, removeAfterUnmount = true }) => {
	const store = useStore() as ReduxStoreWithManager;
	const dispatch = useDispatch();

	useEffect(() => {
		const mountedReducers = store.reducerManager.getMountedReducers();

		Object.entries(reducers).forEach(([name, reducer]) => {
			const mounted = mountedReducers[name as StateSchemaKey];
			if (!mounted) {
				store.reducerManager.add(name as StateSchemaKey, reducer);
				dispatch({
					type: `@INIT ${name} reducer`,
				});
			}
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([name]) => {
					store.reducerManager.remove(name as StateSchemaKey);
					dispatch({
						type: `@DESTROY ${name} reducer`,
					});
				});
			}
		};
	}, []);

	return <>{children}</>;
};
