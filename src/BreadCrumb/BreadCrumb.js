import React from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import { BreadCrumbItem } from "./BreadCrumbItem";
import './BreadCrumb.css';

function BreadCrumb() {
    const { category } = React.useContext(ProductContext);
    return (
        <React.Fragment>
            <nav aria-label="breadcrumb" className='app-breadcrumb rounded-top-1 mt-3 p-2'>
                <ol className="breadcrumb mb-0">
                    {
                        (category.map(categoryItem => (
                            <BreadCrumbItem key={categoryItem.id} category={categoryItem.name} />
                        )))
                    }
                </ol>
            </nav>
        </React.Fragment>
    );
}

export { BreadCrumb };