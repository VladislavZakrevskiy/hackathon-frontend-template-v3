import { lazy } from "react";

export const LazyMainPage = lazy(async () => await import("./MainPage"));
