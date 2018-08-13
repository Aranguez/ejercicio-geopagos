import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Botones from './Botones'

export default class Formulario extends Component {

    constructor(props){
        super(props);
        this.state = {
            appData: {
                localidades: '',
                provincias: ''
            },
            userData: {
                nombre: '',
                cuil: '',
                calle: '',
                numero: '',
                provincia: '',
                localidad: '',
                email: '',
                contrasena: '',
            },
            errors: {
                error: true,
                errorNombre: false,
                errorCuil: false,
                errorEmail: false,
                errorContrasena: false,
                errorCalle: false,
                errorNumero: false,
                errorProvincia: false,
                errorLocalidad: false
            },
            showPassword: true
        }
    }

    componentDidMount(){
        fetch('https://geopagos-challenge.s3.amazonaws.com/provinces.json')
            .then(res => res.json())
            .then(data => {
                this.setState( prevState => ({
                    appData: { ...prevState.appData, provincias: data }
                }))
                //console.log(data)
                
            })
    }

    getLocalidades = (e) => {
        const id = e.target.value
        fetch(`https://geopagos-challenge.s3.amazonaws.com/provinces/${id}.json`)
            .then(res => res.json())
            .then(data => {
                this.setState( prevState => ({
                    appData: { ...prevState.appData, localidades: data }
                }))
            })
    }

    _onChangeValue = (name, value) => {
        this.setState(prevState => ({
            userData: {...prevState.userData, [name]: value}
        }))
    };

    validate = input => {
        switch(input){
          case 'nombre':
            let { nombre } = this.state.userData
            let splitNombre = nombre.split(' ');
            // eslint-disable-next-line
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
            let { cuil } = this.state.userData
    
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
            let { calle } = this.state.userData
    
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
            let { numero } = this.state.userData
    
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
            let { provincia } = this.state.userData
    
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
            let { localidad } = this.state.userData
    
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
            let { email } = this.state.userData
    
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
            let { contrasena } = this.state.userData
    
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

    _onSubmit = (e) => {
        e.preventDefault()
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

    showPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    render() {
        return (
            <Fragment>

                {React.Children.map(this.props.children, ( child, index ) => {
                    if (index === this.props.currentIndex) {
                        return React.cloneElement( child, {
                        userData: this.state.userData,
                        appData: this.state.appData,
                        errors: this.state.errors,
                        getLocalidades: this.getLocalidades,
                        onChangeValue: this._onChangeValue,
                        validate: this.validate,
                        showPassF: this.showPassword,
                        showPassV: this.state.showPassword
                        });
                    }
            
                    return null;
                })}

                    { this.props.currentIndex + 1 < this.props.children.length && (
                        <Botones nextStep={ this.props.nextStep }
                                prevStep={ this.props.prevStep }
                                isLast={ this.props.isLast }
                                isFirst={ this.props.isFirst }
                                errors={ this.state.errors }
                                onSubmit={ this._onSubmit }/>
                    )}

            </Fragment>
        )
    }
}


Formulario.propTypes = {
    currentIndex: PropTypes.number,
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,
    nextStep: PropTypes.func,
    prevStep: PropTypes.func
}