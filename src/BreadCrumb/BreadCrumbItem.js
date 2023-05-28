import React from "react";
import ShareFunction from '../assets/util/shareFunctions';
const shareFunction = new ShareFunction();

function BreadCrumbItem(props) {
    return (
        <React.Fragment>
            <li className="breadcrumb-item" onClick={() => { shareFunction.onDevelop() }}>{props.category}</li>
        </React.Fragment>
    );    
}

export { BreadCrumbItem };