import React from "react";
import cargando from './../assets/img/icons8-cargando.gif';

const Loading = () => {
    return (
        <React.Fragment>
            <div className="container bg-white py-4">
                <img src={cargando} className="d-block m-auto"  alt="Cargando ..." />
            </div>
        </React.Fragment>
    );
};
export { Loading };
