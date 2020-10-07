class VisibilityApp extends React.Component {
  constructor (props) {
    super(props)
    this.handleToggle = this.handleToggle.bind(this)
    this.state = {
      isVisible: false
    }
  }

  handleToggle () {
    this.setState((prevState) => {
      return { isVisible: !prevState.isVisible }
    })
  }

  render () {
    const title = 'Toggle Visibility'
    const details = 'sweet deets'

    return (
      <div>
        <h1>{title}</h1>
        <button onClick={this.handleToggle}>
          {this.state.isVisible ? 'Hide' : 'Show'} details
        </button>
        {this.state.isVisible && <p>{details}</p>}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityApp />, document.getElementById('app'))
