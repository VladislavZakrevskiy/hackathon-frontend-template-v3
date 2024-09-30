import { lazy } from "react";

export const LazyRegisterPage = lazy(async () => await import("./RegisterPage"));
