class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subtitle = 'What to do, what to do, what to do..';
    const options = ['thing 1', 'thing 2'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('yo!');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>Make decision</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove all</button>
          {
            this.props.options.length > 0 ?
              <ol>{
                this.props.options.map(
                  (option, i) => <Option key={i} optionText={option} />
                )
              }</ol>
            :
              <p>No options!</p>
          }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.optionText}</li>;
  }
}

class AddOption extends React.Component {
  handleFormSubmit(event) {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
