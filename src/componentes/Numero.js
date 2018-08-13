import React from 'react';

const Numero = ({ currentIndex, isActive, children }) => {

    const numeros = []

    for (let i = 0; i < children.length; i++) {
        numeros.push(i+1)
    }

    return (

        
        <div>
            <h1 className="f-left">Registro</h1>
            <div className="numeros f-right">
                { numeros.map( numero => {
                    return (
                        <div key={numero} className={`badge ${ numero > 1 ? 'line' : '' } ${ currentIndex+1 === numero ? 'active' : ''}`}>
                            <span>{numero}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Numero;
