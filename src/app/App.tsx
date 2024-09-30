import { Suspense, useEffect } from "react";
import { AppRouter } from "./providers/router";
import { PageLoader } from "@/widgets/PageLoader";
import { GlobalStyles } from "./styles/globalStyles";
import { useGetMeQuery } from "@/entities/User/api/userApi";
import { useUserActions } from "@/entities/User";

const App = () => {
	const { data: user, isLoading } = useGetMeQuery(undefined);
	const { setAuthData } = useUserActions();

	useEffect(() => {
		if (user) setAuthData(user);
	}, [user]);

	if (isLoading) {
		return <PageLoader />;
	}

	return (
		<div>
			<GlobalStyles />
			<Suspense fallback={<PageLoader />}>
				{/* <Navbar /> */}
				<div className="content-page">
					{/* <Sidebar /> */}
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
