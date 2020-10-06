console.log('hello');

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision App</h1>
        <p>What to do, what to do, what to do...</p>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>Make decision</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li>item 1</li>
          <li>item 2</li>
        </ol>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <button>Add option</button>
      </div>
    );
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
