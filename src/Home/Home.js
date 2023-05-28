import React from 'react';
import mercadoLibre from './../assets/img/mercadolibre.svg';

function Home() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="container bg-white p-5">
                    <h3 className="text-center">Bienvenido !!!.</h3>
                    <img src={mercadoLibre} className="img-fluid d-block w-25 m-auto" alt="logo" />
                </div>
            </div>
        </React.Fragment>
    );
}
export { Home };