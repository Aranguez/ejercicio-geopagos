import React from 'react';
import PropTypes from 'prop-types'

const Tercero = ({ userData, errors, onChangeValue, validate, showPassF, showPassV  }) => {
 
    return (
        <form className="mt90">
            <div>
                <label>Email</label>
                <input type="text"
                        className={ `${ errors.errorEmail && "error-focus" }` }
                        placeholder="Ingresa tu dirección de correo"
                        name="email"
                        onChange={ event => onChangeValue( event.target.name , event.target.value) | validate( event.target.name ) }
                        value={ userData.email}/>
                { errors.errorEmail &&
                        <span className="error">No es un email válido</span> }
            </div>

            <div className="mt50">
                <label>Contraseña</label>

                <input  type={ !showPassV ? 'text' : 'password' }
                        name="contrasena"
                        className={ `${ errors.errorContrasena && "error-focus" }` }
                        placeholder="Debe ser alfanumérica de al menos 8 caracteres"
                        onChange={ event => onChangeValue( event.target.name , event.target.value) | validate( event.target.name ) }
                        value={ userData.contrasena} />

                { errors.errorContrasena &&
                    <span className="error">Alfanumerico, 8 digitos, 1 número</span> }
            </div>
            <div className="mt50">
                <label>Mostrar contraseña</label>
                <input type="checkbox" onClick={ showPassF }/>
            </div>
        </form>
    );
};

Tercero.propTypes = {
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
    validate: PropTypes.func,
    showPassF: PropTypes.func,
    showPassV: PropTypes.bool
}

export default Tercero;
