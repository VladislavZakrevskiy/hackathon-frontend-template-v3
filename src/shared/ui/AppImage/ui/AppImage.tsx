import { DetailedHTMLProps, FC, ImgHTMLAttributes, ReactNode, useLayoutEffect, useState } from "react";
import { IStyledComponent } from "styled-components";
import { FastOmit } from "styled-components/dist/types";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	StyleComponent?: IStyledComponent<
		"web",
		FastOmit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, never>
	>;
	fallback?: ReactNode;
	errorFallback?: ReactNode;
}

export const AppImage: FC<Props> = ({ StyleComponent, src, alt = "image", fallback, errorFallback, ...otherProps }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useLayoutEffect(() => {
		const img = new Image();
		img.src = src ?? "";
		img.onload = () => {
			setIsLoading(false);
		};
		img.onerror = () => {
			setIsLoading(false);
			setHasError(true);
		};
	}, []);

	if (isLoading && fallback) {
		return fallback;
	}

	if (hasError && errorFallback) {
		return errorFallback;
	}

	if (StyleComponent) return <StyleComponent src={src} alt={alt} {...otherProps} />;

	return <img src={src} alt={alt} {...otherProps} />;
};
