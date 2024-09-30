import { PayloadAction } from "@reduxjs/toolkit";
import { UISchema } from "../types/UISchema";
import { buildSlice } from "@/shared/lib/store/buildSlice";
import { darkTheme, lightTheme, Themes } from "@/app/styles";

const initialState: UISchema = {
	scroll: {},
	themeStyles: lightTheme,
};

const UISlice = buildSlice({
	name: "ui",
	initialState,
	reducers: {
		setScrollPosition: (
			state,
			action: PayloadAction<{
				path: string;
				position: number;
			}>,
		) => {
			state.scroll[action.payload.path] = action.payload.position;
		},

		toggleTheme: (state) => {
			const nextTheme = Themes.light == state.themeStyles.type ? darkTheme : lightTheme;
			state.themeStyles = nextTheme;
		},
	},
});

export const { actions: UIActions, reducer: UIReducer, useActions: useUIActions } = UISlice;
