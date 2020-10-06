class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

class Count extends React.Component {
  render() {
    return (
      <div>
        <h2>Count: {this.props.count}</h2>
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const action = this.props.action;

    if (action == -1) {
      alert('decrement!');
    } else if (action == 1) {
      alert('increment!');
    } else {
      alert('reset!');
    }
  }
  render() {
    return <button onClick={this.handleClick}>{this.props.buttonText}</button>;
  }
}

class CounterApp extends React.Component {
  render() {
    const title = 'My Counter App';
    const count = 11;

    return (
      <div>
        <Header title={title} />
        <Count count={count} />
        <div>
          <Button buttonText="-1" action={-1} />
          <Button buttonText="+1" action={1} />
          <Button buttonText="reset" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'));
