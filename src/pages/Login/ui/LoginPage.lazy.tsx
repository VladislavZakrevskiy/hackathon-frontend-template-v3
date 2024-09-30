import { lazy } from "react";

export const LazyLoginPage = lazy(async () => await import("./LoginPage"));
