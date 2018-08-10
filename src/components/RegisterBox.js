import React, { Component } from 'react';

import Paso from './Paso';

export default class RegisterBox extends Component {
  static Paso = Paso;

  constructor(props){
    super();
    this.state = {
      index: 0,
      activeInput: '',
      errors: {
        error: false,
        errorNombre: false,
        errorCuil: false,
        errorEmail: false,
        errorContrasena: false,
        errorCalle: false,
        errorNumero: false,
        errorProvincia: false,
        errorLocalidad: false
      },
      values: {...props.initialValues}
    }
    this._nextStep.bind(this)
  }


  _nextStep = () => {
    const validated = this.validateForm(Object.values(this.state.errors))

    if (this.state.index !== this.props.children.length - 1 && validated) {
      if(this.state.index === 2){
        this._onSubmit()
      }

      this.setState(prevState => ({
        index: prevState.index + 1,
        errors: { ...prevState.errors, error: true }
      }));

    }
  };

  _prevStep = () => {
    if (this.state.index !== 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
        errors: { ...prevState.errors, error: false }
      }));
    }
  };

  validateForm = ( values ) => { //encontrar algun val con true

    for (let i = 0; i < values.length; i++) {
      if (values[i] === true) {
        return false
      } else {
        return true
      }
    }

  }

  validate = input => {

    switch(input){
      case 'nombre':
        let { nombre } = this.state.values
        let splitNombre = nombre.split(' ');
        
        if ( splitNombre.length > 1 && splitNombre[1].length === 0 || nombre.length === 0 || splitNombre.length === 1 ) {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: true, errorNombre: true }
          }));
        } else {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: false, errorNombre: false }
          }));
        }
        break

      case 'cuil':
        let { cuil } = this.state.values

        if ( cuil.indexOf('-') > -1 ) {
          let cleanCuil = cuil.split('-').join('')
          if ( cleanCuil.length < 11 ) {
            this.setState(prevState => ({
              errors: { ...prevState.errors, error: true, errorCuil: true }
            }));
          } else {
            this.setState(prevState => ({
              errors: { ...prevState.errors, error: false, errorCuil: false }
            }));
          }
        } else if ( cuil.length < 11 ) {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: true, errorCuil: true }
          }));
        } else {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: false, errorCuil: false }
          }));
        }
        break

      case 'calle':
        let { calle } = this.state.values

        if (calle.length !== 0) {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: false, errorCalle: false }
          }));
        } else {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: true, errorCalle: true }
          }));
        }
        break

      case 'numero':
        let { numero } = this.state.values

        if (numero.length !== 0) {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: false, errorNumero: false }
          }));
        } else {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: true, errorNumero: true }
          }));
        }
        break

      case 'provincia':
        let { provincia } = this.state.values

        if (provincia.length !== 0) {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: false, errorProvincia: false }
          }));
        } else {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: true, errorProvincia: true }
          }));
        }
        break

      case 'localidad':
        let { localidad } = this.state.values

        if (localidad.length !== 0) {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: false, errorLocalidad: false }
          }));
        } else {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: true, errorLocalidad: true }
          }));
        }
        break

      case 'email':
        let { email } = this.state.values

        let regxEmail = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (email.length !== 0 && email.length >= 8 && regxEmail.test(email)) {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: false, errorEmail: false }
          }));
        } else {
          this.setState(prevState => ({
            errors: { ...prevState.errors, error: true, errorEmail: true }
          }));
        }
        break

      case 'contrasena':
        let { contrasena } = this.state.values

        let regxPass = /[0-9]$/

        if (contrasena.length !== 0  && contrasena.length >= 8 && regxPass.test(contrasena)) {
          this.setState(prevState => ({
            errors: { ...prevState.errors, errorContrasena: false }
          }));
        } else {
          this.setState(prevState => ({
            errors: { ...prevState.errors, errorContrasena: true }
          }));
        }
        break
      default:
        return
    }
  }

  _onChangeValue = (name, value) => {
    this.setState(prevState => ({
      values: {...prevState.values, [name]: value}
    }))
    this.validate( name )
  };

  _onSubmit = () => {
    var http = new XMLHttpRequest();
    var url = 'http://www.mocky.io/v2/5b6d5448330000ab1ea36ce0';
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function() {
      if (http.status === 200 ) {
          console.log('POST OK');
      }
      else if (http.status !== 200) {
          alert('Request failed.  Returned status of ' + http.status);
      }
    };
    http.send(JSON.stringify(this.state.values));
  };

  render() {

    return (
      <div className="box">
        {React.Children.map(this.props.children, (el, index) => {
          if (index === this.state.index) {
            return React.cloneElement(el, {
              currentIndex: this.state.index,
              nextStep: this._nextStep,
              prevStep: this._prevStep,
              isLast: this.state.index === this.props.children.length - 2,
              isFirst: this.state.index === 0,
              onChangeValue: this._onChangeValue,
              values: this.state.values,
              onSubmit: this._onSubmit,
              errors: this.state.errors,
              index: this.state.index
            });
          }

          return null;
        })}
      </div>
    );
  }
}