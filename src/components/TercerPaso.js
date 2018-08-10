import React, { Component, Fragment } from 'react'

import Pasos from './Pasos';

export default class TercerPaso extends Component {
  
  constructor(props){
    super();
    this.state = {
      showPassword: false
    }
  }

  show = () => {
    this.setState({ 
      showPassword: !this.state.showPassword
    })
  }

  render() {
    return (
      <Fragment>
           <Pasos level={this.props.index}/>
            <form className="mt90">
            <div>
              <label>Email</label>
              <input type="text"
                     className={ `${ this.props.errors.errorEmail && "error-focus" }` }
                     placeholder="Ingresa tu dirección de correo"
                     onChange={ event => this.props.onChangeText('email', event.target.value) }
                     value={this.props.values.email}/>
              { this.props.errors.errorEmail &&
                        <span className="error">No es un email válido</span> }
            </div>

            <div className="mt50">
              <label>Contraseña</label>
              { !this.state.showPassword ?  
              <input type="password"
                     className={ `${ this.props.errors.errorContrasena && "error-focus" }` }
                     placeholder="Debe ser alfanumérica de al menos 8 caracteres"
                     onChange={ event => this.props.onChangeText('contrasena', event.target.value) }
                     value={this.props.values.contrasena} /> :
              <input type="text"
                     className={ `${ this.props.errors.errorContrasena && "error-focus" }` }
                     placeholder="Debe ser alfanumérica de al menos 8 caracteres"
                     onChange={ event => this.props.onChangeText('contrasena', event.target.value) }
                     value={this.props.values.contrasena} />
                      }
              { this.props.errors.errorContrasena &&
                    <span className="error">Alfanumerico, 8 digitos, 1 número</span> }
            </div>
            <div className="mt50">
              <label>Mostrar contraseña</label>
              <input type="checkbox" onClick={ this.show }/>
            </div>
          </form>
        </Fragment>
    )
  }
}
