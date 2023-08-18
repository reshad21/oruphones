import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Connections from "../pages/Dashbord/Connections/Connections";
import Home from "../pages/Dashbord/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/connections",
                element: <Connections />,
            },
        ]
    },
]);

export default router;