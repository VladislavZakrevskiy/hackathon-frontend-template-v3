import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";
import { ReducersMapObject } from "@reduxjs/toolkit";

interface Props {
	children: ReactNode;
	initialSchema?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<Props> = ({ children, initialSchema, asyncReducers }) => {
	// const nav = useNavigate()

	const store = createReduxStore(
		initialSchema as StateSchema,
		asyncReducers as ReducersMapObject<StateSchema>,
		// nav
	);

	return <Provider store={store}>{children}</Provider>;
};
