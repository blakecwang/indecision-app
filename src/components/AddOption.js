import React from 'react'

class AddOption extends React.Component {
  state = {
    error: undefined
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const option = event.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() => ({ error }))

    if (!error) {
      event.target.elements.option.value = ''
    }
  }

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    )
  }
}

export default AddOption
