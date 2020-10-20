import React from 'react'

class Option extends React.Component {
  handleRemove = () => {
    this.props.handleRemove(this.props.optionText)
  }

  render () {
    return (
      <li className="option">
        {this.props.count + '. ' + this.props.optionText}
        <button className="link-button"onClick={this.handleRemove}>X</button>
      </li>
    )
  }
}

// Option.propTypes = {
//   optionText: PropTypes.string
// }

export default Option
