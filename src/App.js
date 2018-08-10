import React, { Component } from 'react';
import RegisterBox from './components/RegisterBox'
import './App.css';

import PrimerPaso from './components/PrimerPaso';
import SegundoPaso from './components/SegundoPaso';
import TercerPaso from './components/TercerPaso';
import Success from './components/Success';

class App extends Component {

  render() {
    return (
      <div className="container">
        <RegisterBox initialValues={{
            nombre: '',
            cuil: '',
            calle: '',
            numero: '',
            provincia: '',
            localidad: '',
            email: '',
            contrasena: '',
        }}>

          <RegisterBox.Paso>
            { ({ values, onChangeValue, index, errors }) => (
              <PrimerPaso values={values} onChangeText={onChangeValue} index={index} errors={errors} />
            )}
          </RegisterBox.Paso>

          <RegisterBox.Paso>
            { ({ values, onChangeValue, index, errors }) => (
              <SegundoPaso values={values} onChangeText={onChangeValue} index={index} errors={errors} />
            )}
          </RegisterBox.Paso>

          <RegisterBox.Paso>
            { ({ values, onChangeValue, index, errors }) => (
              <TercerPaso values={values} onChangeText={onChangeValue} index={index} errors={errors} />
            )}
          </RegisterBox.Paso>

          <Success index={3} />
          
        </RegisterBox>
      </div>
    );
  }
}

//agregar proptypes

export default App;
