'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Count = function (_React$Component2) {
  _inherits(Count, _React$Component2);

  function Count() {
    _classCallCheck(this, Count);

    return _possibleConstructorReturn(this, (Count.__proto__ || Object.getPrototypeOf(Count)).apply(this, arguments));
  }

  _createClass(Count, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h2',
          null,
          'Count: ',
          this.props.count
        )
      );
    }
  }]);

  return Count;
}(React.Component);

var Button = function (_React$Component3) {
  _inherits(Button, _React$Component3);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this3 = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this3.handleClick = _this3.handleClick.bind(_this3);
    return _this3;
  }

  _createClass(Button, [{
    key: 'handleClick',
    value: function handleClick() {
      var action = this.props.action;

      if (action == -1) {
        alert('decrement!');
      } else if (action == 1) {
        alert('increment!');
      } else {
        alert('reset!');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'button',
        { onClick: this.handleClick },
        this.props.buttonText
      );
    }
  }]);

  return Button;
}(React.Component);

var CounterApp = function (_React$Component4) {
  _inherits(CounterApp, _React$Component4);

  function CounterApp() {
    _classCallCheck(this, CounterApp);

    return _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).apply(this, arguments));
  }

  _createClass(CounterApp, [{
    key: 'render',
    value: function render() {
      var title = 'My Counter App';
      var count = 11;

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title }),
        React.createElement(Count, { count: count }),
        React.createElement(
          'div',
          null,
          React.createElement(Button, { buttonText: '-1', action: -1 }),
          React.createElement(Button, { buttonText: '+1', action: 1 }),
          React.createElement(Button, { buttonText: 'reset' })
        )
      );
    }
  }]);

  return CounterApp;
}(React.Component);

ReactDOM.render(React.createElement(CounterApp, null), document.getElementById('app'));
