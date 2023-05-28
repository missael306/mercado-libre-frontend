import React from 'react';

import { SearchBar } from '../SearchBar/SearchBar.js';
import { RouterProvider, } from "react-router-dom";
import { router } from '../routes/ProductRouter.js';

function AppUI() {
    return (
        <React.Fragment>
            <SearchBar />
            <RouterProvider router={router} >                                
            </RouterProvider>
        </React.Fragment>
    );
}

export { AppUI };