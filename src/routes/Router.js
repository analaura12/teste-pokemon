import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Páginas ****/
const Cards = lazy(() => import("../views/ui/Cards"));


/*****Rotas******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Cards/> },
    ],
  },
];

export default ThemeRoutes;
