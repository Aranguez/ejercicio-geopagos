import React from 'react';
import PropTypes from 'prop-types'

const Segundo = ({ appData, userData, errors, onChangeValue, getLocalidades, validate }) => {

    return (
        <form className="mt90">
            <div className="w60 f-left">
                <label>Calle</label>
                <input type="text"
                        className={ `w60 ${ errors.errorCalle && "error-focus" }` }
                        placeholder="Ej.: Av. de Mayo"
                        name="calle"
                        value={ userData.calle}
                        onChange={ event => onChangeValue( event.target.name , event.target.value) | validate( event.target.name ) }/>
            </div>
            <div className="w30 f-right">
                <label>Número</label>
                <input type="text"
                        placeholder="Ej.: 3651"
                        name="numero"
                        className={ `${ errors.errorNumero && "error-focus" }` }
                        value={ userData.numero}
                        onChange={ event => onChangeValue( event.target.name , event.target.value) | validate( event.target.name ) }/>
            </div>

            <div className="clearfix"></div>

            <div className="w45 mt50 f-left">
                <label>Provincia</label>
                <select 
                        className={ `${ errors.errorProvincia && "error-focus" }` }
                        onChange={ event => getLocalidades(event) | onChangeValue( event.target.name , event.target.value) | validate( event.target.name ) }
                        name="provincia"
                        >

                <option>Seleccionar</option>
                { appData.provincias.map( provincia => (
                    <option key={provincia.id}
                            value={provincia.id}>{provincia.name}</option>
                ))}
                </select>
            </div>

            <div className="w45 mt50 f-right">
                <label>Localidad</label>
                <select name="localidad" 
                        onChange={ event => onChangeValue( event.target.name , event.target.value) | validate( event.target.name )  }
                        className={ `${ errors.errorLocalidad && "error-focus" }` }
                        value={ userData.localidad }>
                <option>Seleccionar</option>
                { appData.localidades.length !== 0 && appData.localidades.cities.map( localidad => (
                    <option key={localidad.name} value={localidad.name}>{localidad.name}</option>
                ))}
                </select>
            </div>
        </form>
    );
};

Segundo.propTypes = {
    appData: PropTypes.object,
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
    getLocalidades: PropTypes.func,
    validate: PropTypes.func
}

export default Segundo;