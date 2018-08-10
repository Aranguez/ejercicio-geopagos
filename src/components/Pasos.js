import React, { Fragment } from 'react'

const Pasos = ({ level }) => (
    <Fragment>
        <h1 className="f-left">Registro</h1>

        <div className="f-right">
            <div className={`badge ${level === 0 && 'active'}`}>
                <span>1</span>
            </div>
            <div className={`badge line ${level === 1 && 'active'}`}>
                <span>2</span>
            </div>
            <div className={`badge line ${level === 2 && 'active'}`}>
                <span>3</span>
            </div>
        </div>
    </Fragment>
)

export default Pasos;