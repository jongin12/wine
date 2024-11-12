import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/main/mainLayout";
import Home from "../screens/home/home";
import NotFound from "../components/layouts/error/notFound";

interface hookMember {
  router: any;
}

const useAppRoute = (): hookMember => {
  const routes = {
    "/": [{ path: "", element: <Home /> }],
    "/a": [{ path: "/home", element: <div>a/home</div> }],
    "/b": [{ path: "/home", element: <div>b/home</div> }],
    "/*": [{ path: "", element: <NotFound /> }],
  };

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <MainLayout />,
        children: Object.entries(routes).flatMap(([basePath, routes]) =>
          routes.map(({ path, element }) => ({
            path: basePath + path,
            element,
          }))
        ),
      },
    ],
    {
      future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return { router };
};

export default useAppRoute;
