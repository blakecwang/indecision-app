import React from 'react'
import ReactDOM from 'react-dom'

// import PropTypes from 'prop-types'

import Header from './Header.js'

class IndecisionApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: props.options
    }
    this.handleMakeDecision = this.handleMakeDecision.bind(this)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleMakeDecision () {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randomNum])
  }

  handleRemoveAll () {
    this.setState(() => ({ options: [] }))
  }

  handleRemove (optionText) {
    this.setState((prevState) => {
      let options = prevState.options
      const i = options.indexOf(optionText);
      options.splice(i, 1);
      return { options }
    })
  }

  handleAddOption (option) {
    if (!option) {
      return 'Please enter a valid option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => (
      { options: prevState.options.concat([option]) }
    ))
  }

  render () {
    const subtitle = 'What to do, what to do, what to do..'

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          noOptions={!this.state.options.length}
          handleMakeDecision={this.handleMakeDecision}
          handleRemoveAll={this.handleRemoveAll}
        />
        <Options handleRemove={this.handleRemove} options={this.state.options} />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}

const Action = (props) => {
  return (
    <div>
      <button
        disabled={props.noOptions}
        onClick={props.handleMakeDecision}>
        Make decision
      </button>
      <button
        disabled={props.noOptions}
        onClick={props.handleRemoveAll}>
        Remove all
      </button>
    </div>
  )
}

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

class AddOption extends React.Component {
  constructor (props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleFormSubmit (event) {
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

IndecisionApp.defaultProps = {
  options: ['Example option 1', 'Example option 2']
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
