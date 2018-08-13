import React, { Component } from 'react'

export default class Caja extends Component {

    state = {
        index: 0
    }

    _nextStep = (e) => {
        e.preventDefault()
        if (this.props.currentIndex !== this.props.children.length - 1) {
          this.setState(prevState => ({
            index: prevState.index + 1
          }));
        }
      };
    
    _prevStep = (e) => {
        e.preventDefault()
    if (this.props.currentIndex !== 0) {
        this.setState(prevState => ({
        index: prevState.index - 1
        }));
    }};

    render() {

        return (
            <div className="box">
                {React.Children.map(this.props.children, ( child, index ) => {
                    return React.cloneElement( child, {
                        nextStep: this._nextStep,
                        prevStep: this._prevStep,
                        currentIndex: this.state.index,
                        isLast: this.state.index === this.props.children.length,
                        isFirst: this.state.index === 0,
                    });
                })}
            </div>
        )
    }
}
