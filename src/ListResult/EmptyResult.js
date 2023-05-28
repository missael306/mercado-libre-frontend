import React from "react";
import mercadoLibre from './../assets/img/mercadolibre.svg';


const EmptyResult = () => {
    return (
        <React.Fragment>
            <div className="container bg-white py-4">
                <h3 className="text-center p-3">No se encontraron resultados para su búsqueda.</h3>
                <img src={mercadoLibre} className="img-fluid d-block w-25 m-auto" alt="logo" />
            </div>
        </React.Fragment>
    );
};
export { EmptyResult };
