const app = {
  title: 'Indecision App',
  subtitle: 'what to do, what to do, what to do...',
  options: ['One', 'Two']
};

const options = (
  <ol>
    <li>item 1</li>
    <li>itme 2</li>
  </ol>
)

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? options : <p>No options</p>}
  </div>
);



let count = 0;

const increment = () => {
  count++;
  renderCounterApp();
};

const decrement = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
  //ReactDOM.render(template, appRoot);
  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();
