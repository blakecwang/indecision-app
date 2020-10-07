class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handlePlus() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 } 
    });
  }
  handleMinus() {
    this.setState((prevState) => {
      return { count: prevState.count - 1 } 
    });
  }
  handleReset() {
    this.setState(() => {
      return { count: 0 } 
    });
  }
  render() {
    const title = 'My Counter App';

    return (
      <div>
        <h1>{title}</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'));
