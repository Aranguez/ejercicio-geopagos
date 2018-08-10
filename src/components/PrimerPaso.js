import React, { Component, Fragment } from 'react'

import Pasos from './Pasos';

export default class PrimerPaso extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render() {
        //console.log(this.props)
        return (
            <Fragment>
                <Pasos level={this.props.index}/>
                <form onSubmit={this.onSubmit} className="mt90">
                    <div>
                        <label>Nombre completo</label>
                        <input type="text"
                               name="nombre"
                               placeholder="Escriba su nombre"
                               onChange={ event => this.props.onChangeText('nombre', event.target.value) }
                               value={this.props.values.nombre}
                               className={ `${ this.props.errors.errorNombre && "error-focus" }` }
                               />
                        { this.props.errors.errorNombre &&
                        <span className="error">No es un nombre completo</span> }
                    </div>
                    <div className="mt50">
                        <label>N° de CUIL</label>
                        <input type="text"
                               name="cuil"
                               placeholder="Ej.: 23-45678901-2"
                               onChange={ event => this.props.onChangeText('cuil', event.target.value) }
                               value={this.props.values.cuil}
                               className={ `${ this.props.errors.errorCuil && "error-focus" }` }
                               />
                        { this.props.errors.errorCuil &&
                        <span className="error">No es un CUIL válido</span> }
                    </div>
                </form>
            </Fragment>
        )
    }
}
