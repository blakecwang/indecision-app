import React from 'react'

import Option from './Option'

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.length
            ? <ol>
              {
                this.props.options.map(
                  (option, i) => <Option key={i} optionText={option} handleRemove={this.props.handleRemove} />
                )
              }
            </ol>
            :
            <p>No options!</p>
        }
      </div>
    )
  }
}

// Options.propTypes = {
//   options: PropTypes.array
// }

export default Options
