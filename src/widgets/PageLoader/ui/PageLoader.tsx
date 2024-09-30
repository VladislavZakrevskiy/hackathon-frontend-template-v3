import { FC } from "react";
import { Loader } from "@/shared/ui/Loader";
import { SPageLoader } from "./PageLoader.style";

interface Props {}

export const PageLoader: FC<Props> = () => {
	return (
		<SPageLoader>
			<Loader />
		</SPageLoader>
	);
};
