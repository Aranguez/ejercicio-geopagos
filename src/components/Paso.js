import React, { PureComponent, Fragment } from 'react'

import Botones from './Botones'

export default class Paso extends PureComponent {
    state = {}
    render() {
      return (
        <Fragment>

          {this.props.children({
            onChangeValue: this.props.onChangeValue,
            values: this.props.values,
            index: this.props.index,
            errors: this.props.errors,
          })}

          <div>
            <Botones  currentIndex={this.props.currentIndex}
                      prevStep={this.props.prevStep}
                      nextStep={this.props.nextStep}
                      onSubmit={this.props.onSubmit}
                      isLast={this.props.isLast}
                      isFirst={this.props.isFirst}
                      error={this.props.errors.error}    
            />
          </div>
        </Fragment>
      )
    }
  }