import React from 'react'

const Pasos = (props) => {

    return (
        <div>
            { React.Children.map( props.children, ( child, index ) => {

                if (index === props.currentIndex) {
                    return React.cloneElement( child, {
                    isActive: props.currentIndex === index,
                    currentIndex: props.currentIndex,
                    children: props.children,
                    isLast: props.currentIndex === props.children.length,
                    isFirst: props.currentIndex === 0,
                    });
                }

                return null;
            }) }
        </div>
    )
    
}

export default Pasos;