import { UserRoles } from "@/entities/User";
import { getRouteMain, getRouteNotFound } from "@/shared/consts/router";
import { useAppSelector } from "@/shared/lib/hooks";
import { FC, ReactNode, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
	children?: ReactNode;
	roles?: UserRoles[];
}

export const RequireAuth: FC<Props> = ({ children, roles }) => {
	const auth = useAppSelector((state) => state.user.authData);
	const location = useLocation();
	const userRoles = auth?.roles;

	const hasRequiredRoles = useMemo(() => {
		if (!roles) {
			return true;
		}
		return roles.some((requireRole) => userRoles?.includes(requireRole));
	}, [roles, userRoles]);

	if (!auth) {
		return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
	}

	if (!hasRequiredRoles) {
		return <Navigate to={getRouteNotFound()} state={{ from: location }} replace />;
	}

	return children;
};
