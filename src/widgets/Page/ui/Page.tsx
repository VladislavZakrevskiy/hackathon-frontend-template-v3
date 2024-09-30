import { FC, HTMLAttributes, MutableRefObject, ReactNode, UIEvent, useEffect, useRef } from "react";
import classes from "./Page.module.css";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { UIActions } from "@/features/UI";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateSchema } from "@/app/providers/StoreProvider";
import { useThrottling } from "@/shared/lib/hooks/useThrottling/useThrottling";

interface Props extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	onScrollEnd?: () => void;
}

export const PAGE_ID = "page-id";

export const Page: FC<Props> = ({ children, onScrollEnd }) => {
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const scrollPosition = useSelector((state: StateSchema) => state.ui.scroll[pathname]);

	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const wrapperRef = useRef() as MutableRefObject<HTMLElement>;

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd,
	});

	useEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	}, []);

	const onScroll = useThrottling((e: UIEvent<HTMLDivElement>) => {
		dispatch(
			UIActions.setScrollPosition({
				position: e.currentTarget.scrollTop,
				path: pathname,
			}),
		);
	}, 400);

	return (
		<main ref={wrapperRef} onScroll={onScroll} id={PAGE_ID}>
			{children}
			{onScrollEnd ? <div className={classes.trigger} ref={triggerRef} /> : null}
		</main>
	);
};
