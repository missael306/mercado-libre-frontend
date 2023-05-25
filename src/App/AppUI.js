import React from 'react';

import { DetailProduct } from '../DetailProduct/DetailProduct.js';
import { ListResult } from '../ListResult/ListResult.js';
import { SearchBar } from '../SearchBar/SearchBar.js';

function AppUI() {
    return (
        <React.Fragment>
            <SearchBar />
            <ListResult />
            <DetailProduct />
        </React.Fragment>
    );
}

export { AppUI };