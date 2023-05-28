import React from 'react';
import mercagoLibre from './../assets/img/mercadolibre.svg';
import { Link } from 'react-router-dom';

function Unexpected() {
    return (
        <React.Fragment>
            <div className="container">
                <nav aria-label="breadcrumb" className='app-breadcrumb rounded-top-1 mt-3 p-2'>
                    <ol className="breadcrumb mb-0">
                        <Link to={'/'}>Inicio /</Link>
                    </ol>
                </nav>
                <div className="container col bg-white">
                    <Link to={'/'}>
                        <h3 className="text-center p-3">¡Ups! Algo salió mal</h3>
                        <div className="p-3">
                            <img src={mercagoLibre} className="img-fluid d-block w-25 m-auto" alt="logo" />
                        </div>
                    </Link>
                </div>
            </div>

        </React.Fragment>
    );
}

export { Unexpected };