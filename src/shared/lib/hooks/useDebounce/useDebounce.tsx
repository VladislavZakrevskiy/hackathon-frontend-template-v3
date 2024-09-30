import { useCallback, useRef } from "react";

export const useDebounce = <T,>(callback: (...args: T[]) => void, delay: number) => {
	const timer = useRef<ReturnType<typeof setTimeout>>();

	return useCallback(
		(...args: T[]) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}

			timer.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay],
	);
};
