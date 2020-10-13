import React from 'react'

// import PropTypes from 'prop-types'

import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'

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

IndecisionApp.defaultProps = {
  options: ['Example option 1', 'Example option 2']
}

export default IndecisionApp
