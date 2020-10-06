const app = {
  title: 'Indecision App',
  subtitle: 'what to do, what to do, what to do...',
  options: []
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const option = event.target.elements.option.value;
  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';
    renderApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomNum]);
};

const appRoot = document.getElementById("app");
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <ol>{app.options.map((option, i) => <li key={i.toString()}>{option}</li>)}</ol>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>Make Decision</button>
      <button onClick={removeAll}>Remove all</button>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderApp();
