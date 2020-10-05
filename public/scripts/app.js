'use strict';

var app = {
  title: 'Indecision App',
  subtitle: 'what to do, what to do, what to do...',
  options: ['One', 'Two']
};

var options = React.createElement(
  'ol',
  null,
  React.createElement(
    'li',
    null,
    'item 1'
  ),
  React.createElement(
    'li',
    null,
    'itme 2'
  )
);

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options.length > 0 ? options : React.createElement(
    'p',
    null,
    'No options'
  )
);

var user = {
  name: 'Blake Wang',
  age: 30,
  location: 'San Diego'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous',
    '!'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
//ReactDOM.render(templateTwo, appRoot);
