import React, { Component, Fragment } from 'react'

import Pasos from './Pasos';

export default class SegundoPaso extends Component {

  constructor(props){
    super(props);
    this.state = {
      provincias: [],
      localidades: []
    }
  }

  componentDidMount(){
    fetch('https://geopagos-challenge.s3.amazonaws.com/provinces.json')
      .then(res => res.json())
      .then(data => this.setState({provincias: data}))
  }

  getLocalidades = (e) => {
    const id = e.target.value
    console.log(id)
    fetch(`https://geopagos-challenge.s3.amazonaws.com/provinces/${id}.json`)
      .then(res => res.json())
      .then(data => this.setState({localidades: data.cities}))
  }

  render() {
    return (
      <Fragment>
        <Pasos level={this.props.index}/>
        <form onSubmit={this.onSubmit} className="mt90">

            <div className="w60 f-left">
              <label>Calle</label>
              <input type="text"
                     className={ `w60 ${ this.props.errors.errorCalle && "error-focus" }` }
                     placeholder="Ej.: Av. de Mayo"
                     name="calle"
                     value={this.props.values.calle}
                     onChange={ event => this.props.onChangeText('calle', event.target.value) }/>
            </div>
            <div className="w30 f-right">
              <label>Número</label>
              <input type="text"
                     placeholder="Ej.: 3651"
                     name="numero"
                     className={ `${ this.props.errors.errorNumero && "error-focus" }` }
                     value={this.props.values.numero}
                     onChange={ event => this.props.onChangeText('numero', event.target.value) }/>
            </div>

            <div className="clearfix"></div>

            <div className="w45 mt50 f-left">
              <label>Provincia</label>
              <select
                      className={ `${ this.props.errors.errorProvincia && "error-focus" }` }
                      onChange={ event => this.getLocalidades(event) | this.props.onChangeText('provincia', event.target.value) }
                      name="provinciaSeleccionada"
                      value={this.props.values.provincia}
                      >

                <option>Seleccionar</option>
                {this.state.provincias.map( provincia => (
                  <option key={provincia.name}
                          value={provincia.id}>{provincia.name}</option>
                ))}
              </select>
            </div>

            <div className="w45 mt50 f-right">
              <label>Localidad</label>
              <select onChange={ event => this.props.onChangeText('localidad', event.target.value) }
                      className={ `${ this.props.errors.errorLocalidad && "error-focus" }` }
                      value={this.props.values.localidad}>
                <option>Seleccionar</option>
                {this.state.localidades.map( localidad => (
                  <option key={localidad.name} value={localidad.name}>{localidad.name}</option>
                ))}
              </select>
            </div>
        </form>
      </Fragment>
    )
  }
}
