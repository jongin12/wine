import { RouterProvider } from "react-router-dom";
import useAppRoute from "./useAppRoute";

const AppRoute = () => {
  const hookMember = useAppRoute();

  return (
    <RouterProvider
      router={hookMember.router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export default AppRoute;
