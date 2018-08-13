import React from 'react'

const Botones = ({ isLast, isFirst, nextStep, prevStep, errors, onSubmit }) => (
    <div>
        { !isFirst ? 
            <button onClick={ event => prevStep(event) }
                    className={`btn btn-border-blue f-left mt50 w45`}
            >Atras</button> :
        '' }
        { isLast ? (
            <button type="submit"
                    onClick={ event => nextStep(event) | onSubmit(event) }
                    className={`btn btn-fill-blue f-right mt50 w45 ${ errors.error && 'disabled'} `}
            >Finalizar</button>
        ) : (
            <button disabled={ errors.error }
                    onClick={ event => nextStep(event) }
                    className={`btn btn-fill-blue f-right mt50 w45 ${ errors.error && 'disabled'} `}
            >Siguiente</button>
        )}
    </div>
)

export default Botones