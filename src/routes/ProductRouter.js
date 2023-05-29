import { createBrowserRouter } from "react-router-dom";
import { ListResult } from "../ListResult/ListResult";
import { DetailProduct } from "../DetailProduct/DetailProduct";
import { Unexpected } from "../Share/Unexpecetd";
import { Home } from "../Home/Home";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
        errorElement: <Unexpected />,
    },
    {
        path: "/items",
        element: <ListResult />,
        errorElement: <Unexpected />,
    },
    {
        path: "/items/:id",
        element: <DetailProduct />,
        errorElement: <Unexpected />,
    },
]);
export { router };