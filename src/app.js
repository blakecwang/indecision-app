var app = {
  title: 'Indecision App',
  subtitle: 'what to do, what to do, what to do...',
  options: ['One', 'Two']
};

var options = (
  <ol>
    <li>item 1</li>
    <li>itme 2</li>
  </ol>
)

var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? options : <p>No options</p>}
  </div>
);

var user = {
  name: 'Blake Wang',
  age: 30,
  location: 'San Diego'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}!</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRoot);
