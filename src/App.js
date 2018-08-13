import React, { Component } from 'react';
import './App.css';

import Caja         from './componentes/Caja';
import Pasos        from './componentes/Pasos';
import Numero       from './componentes/Numero';
import Formulario   from './componentes/Formulario';
import Primero      from './componentes/pasos/Primero';
import Segundo      from './componentes/pasos/Segundo';
import Tercero      from './componentes/pasos/Tercero';
import Success      from './componentes/pasos/Success';

class App extends Component {

  render() {
    return (
      <div className="container">

        <Caja>
            <Pasos>
                <Numero/>
                <Numero/>
                <Numero/>
            </Pasos>
            <Formulario>
                <Primero/>
                <Segundo/>
                <Tercero/>
                <Success/>
            </Formulario>
        </Caja>

      </div>
    );
  }
}

export default App;
