import React from 'react'

import Option from './Option'

class Options extends React.Component {
  render() {
    return (
      <div>
        <div className='widget-header'>
          <h3 className='widget-header__title'>Your Options</h3>
          <button
            className="link-button"
            disabled={this.props.noOptions}
            onClick={this.props.handleRemoveAll}>
            Remove all
          </button>
        </div>
        {
          this.props.options.length
            ? <ol className="option-list">
              {
                this.props.options.map(
                  (option, i) => (
                    <Option
                      key={i}
                      optionText={option}
                      count={i + 1}
                      handleRemove={this.props.handleRemove}
                    />
                  )
                )
              }
            </ol>
            :
            <p className="widget-message">Please add an option to get started</p>
        }
      </div>
    )
  }
}

// Options.propTypes = {
//   options: PropTypes.array
// }

export default Options
