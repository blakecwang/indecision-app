import React from 'react'

// import PropTypes from 'prop-types'

import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  }

  handleMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    this.setState(() => ({ selectedOption: this.state.options[randomNum] }))
  }

  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }))
  }

  handleRemove = (optionText) => {
    this.setState((prevState) => {
      let options = prevState.options
      const i = options.indexOf(optionText);
      options.splice(i, 1);
      return { options }
    })
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Please enter a valid option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => (
      { options: prevState.options.concat([option]) }
    ))
  }

  handleCloseModal = () => {
    this.setState(() => (
      { selectedOption: undefined }
    ))
  }

  render () {
    const subtitle = 'What to do, what to do, what to do..'

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            handleMakeDecision={this.handleMakeDecision}
            noOptions={!this.state.options.length}
          />
          <div className="widget">
            <Options
              handleRemove={this.handleRemove}
              options={this.state.options}
              noOptions={!this.state.options.length}
              handleRemoveAll={this.handleRemoveAll}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: ['Example option 1', 'Example option 2']
}

export default IndecisionApp
