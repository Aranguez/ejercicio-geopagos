import React from 'react'

const Botones = (props) => (
    <div>
        { !props.isFirst ? 
        <button onClick={ props.prevStep }
                className={`btn btn-border-blue f-left mt50 w45`}
        >Atras</button> :
        '' }
        { props.isLast ? (
            <button onClick={ props.nextStep }
                    className={`btn btn-fill-blue f-right mt50 w45 ${props.error && 'disabled'} `}
            >Finalizar</button>
        ) : (
            <button disabled={ props.error }
                    onClick={ props.nextStep }
                    className={`btn btn-fill-blue f-right mt50 w45 ${props.error && 'disabled'} `}
            >Siguiente</button>
            )}
    </div>
)

export default Botones
