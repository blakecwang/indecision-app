// import PropTypes from 'prop-types'

class IndecisionApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      options: []
    }
    this.handleMakeDecision = this.handleMakeDecision.bind(this)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
  }

  handleMakeDecision () {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    alert(this.state.options[randomNum])
  }

  handleRemoveAll () {
    this.setState(() => {
      return { options: [] }
    })
  }

  handleAddOption (option) {
    if (!option) {
      return 'Please enter a valid option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    })
  }

  render () {
    const title = 'Indecision App'
    const subtitle = 'What to do, what to do, what to do..'

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          noOptions={!this.state.options.length}
          handleMakeDecision={this.handleMakeDecision}
          handleRemoveAll={this.handleRemoveAll}
        />
        <Options options={this.state.options}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}

class Header extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    )
  }
}

// Header.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string
// }

class Action extends React.Component {
  render () {
    return (
      <div>
        <button
          disabled={this.props.noOptions}
          onClick={this.props.handleMakeDecision}>
          Make decision
        </button>
        <button
          disabled={this.props.noOptions}
          onClick={this.props.handleRemoveAll}>
          Remove all
        </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render () {
    return (
      <div>
        {
          this.props.options.length
            ? <ol>
              {
                this.props.options.map(
                  (option, i) => <Option key={i} optionText={option} />
                )
              }
            </ol>
            : <p>No options!</p>
        }
      </div>
    )
  }
}

// Options.propTypes = {
//   options: PropTypes.array
// }

class Option extends React.Component {
  render () {
    return <li>{this.props.optionText}</li>
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

    this.setState(() => {
      return { error }
    })

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
