import { FC, ReactNode } from "react";
import { ThemeProvider as ThemeProviderSC } from "styled-components";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector/useAppSelector";

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const { themeStyles } = useAppSelector((state) => state.ui);

	return <ThemeProviderSC theme={themeStyles}>{children}</ThemeProviderSC>;
};
