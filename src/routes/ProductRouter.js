import { createBrowserRouter } from "react-router-dom";
import { ListResult } from "../ListResult/ListResult";
import { DetailProduct } from "../DetailProduct/DetailProduct";
import { Unexpected } from "../Error/Unexpecetd";

const router = createBrowserRouter([

    {
        path: "/",
        element: <ListResult />,
        errorElement: <Unexpected />,
    },
    {
        path: "/items/:id",
        element: <DetailProduct />,
    },
]);
export { router };