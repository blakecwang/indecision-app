const app = {
  title: 'Visibility Toggle',
  details: 'Here are some details!',
  visible: false
};

const toggleDetails = () => {
  app.visible = !app.visible;
  renderApp();
};

const appRoot = document.getElementById("app");
const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <button onClick={toggleDetails}>{app.visible ? 'Hide' : 'Show'} details</button>
      {app.visible && <p>{app.details}</p>}
    </div>
  );
  ReactDOM.render(template, appRoot);
}

renderApp();
