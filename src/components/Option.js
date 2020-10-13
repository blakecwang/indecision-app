import React from 'react'

class Option extends React.Component {
  constructor(props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove() {
    this.props.handleRemove(this.props.optionText)
  }

  render() {
    return (
      <li>
        {this.props.optionText}
        <button onClick={this.handleRemove}>X</button>
      </li>
    )
  }
}

// Option.propTypes = {
//   optionText: PropTypes.string
// }

export default Option
