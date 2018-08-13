import React from 'react';
import PropTypes from 'prop-types'

const Primero = ({ userData, errors, onChangeValue, validate }) => {

    return (
        <form className="mt90">
            <div>
                <label>Nombre completo</label>
                <input  type="text"
                        name="nombre"
                        placeholder="Escriba su nombre"
                        onChange={ event => onChangeValue( event.target.name , event.target.value) | validate( event.target.name ) }
                        defaultValue={ userData.nombre }
                        className={ `${ errors.errorNombre && "error-focus" }` }
                        />
                { errors.errorNombre &&
                <span className="error">No es un nombre completo</span> }
            </div>
            <div className="mt50">
                <label>N° de CUIL</label>
                <input  type="text"
                        name="cuil"
                        placeholder="Ej.: 23-45678901-2"
                        onChange={ event => onChangeValue( event.target.name , event.target.value) | validate( event.target.name ) }
                        defaultValue={ userData.cuil }
                        className={ `${ errors.errorCuil && "error-focus" }` }
                        />
                { errors.errorCuil &&
                <span className="error">No es un CUIL válido</span> }
            </div>
        </form>
    )
};

Primero.propTypes = {
    userData: PropTypes.shape(
        {
            nombre: PropTypes.string.isRequired,
            cuil: PropTypes.string.isRequired,
            calle: PropTypes.string.isRequired,
            numero: PropTypes.string.isRequired,
            provincia: PropTypes.string.isRequired,
            localidad: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            contrasena: PropTypes.string.isRequired,
        }
    ),
    errors: PropTypes.objectOf(PropTypes.bool),
    onChangeValue: PropTypes.func,
    validate: PropTypes.func
}

export default Primero