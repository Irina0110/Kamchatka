import {createBrowserRouter} from "react-router-dom";
import {lazy} from "react";

const Main = lazy(() => import("@/pages/MainPage"));

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: (
                <Main/>
            ),
        },
    ],
    {
        basename: "/Kamchatka",
    }
);

export default router;