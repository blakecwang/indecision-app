'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import PropTypes from 'prop-types'

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: props.options
    };
    _this.handleMakeDecision = _this.handleMakeDecision.bind(_this);
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    _this.handleRemove = _this.handleRemove.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleMakeDecision',
    value: function handleMakeDecision() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randomNum]);
    }
  }, {
    key: 'handleRemoveAll',
    value: function handleRemoveAll() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleRemove',
    value: function handleRemove(optionText) {
      this.setState(function (prevState) {
        var options = prevState.options;
        var i = options.indexOf(optionText);
        options.splice(i, 1);
        return { options: options };
      });
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Please enter a valid option';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return { options: prevState.options.concat([option]) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var subtitle = 'What to do, what to do, what to do..';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, {
          noOptions: !this.state.options.length,
          handleMakeDecision: this.handleMakeDecision,
          handleRemoveAll: this.handleRemoveAll
        }),
        React.createElement(Options, { handleRemove: this.handleRemove, options: this.state.options }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    React.createElement(
      'p',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision'

  // Header.propTypes = {
  //   title: PropTypes.string,
  //   subtitle: PropTypes.string
  // }

};var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        disabled: props.noOptions,
        onClick: props.handleMakeDecision },
      'Make decision'
    ),
    React.createElement(
      'button',
      {
        disabled: props.noOptions,
        onClick: props.handleRemoveAll },
      'Remove all'
    )
  );
};

var Options = function (_React$Component2) {
  _inherits(Options, _React$Component2);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        null,
        this.props.options.length ? React.createElement(
          'ol',
          null,
          this.props.options.map(function (option, i) {
            return React.createElement(Option, { key: i, optionText: option, handleRemove: _this3.props.handleRemove });
          })
        ) : React.createElement(
          'p',
          null,
          'No options!'
        )
      );
    }
  }]);

  return Options;
}(React.Component);

// Options.propTypes = {
//   options: PropTypes.array
// }

var Option = function (_React$Component3) {
  _inherits(Option, _React$Component3);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this4 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

    _this4.handleRemove = _this4.handleRemove.bind(_this4);
    return _this4;
  }

  _createClass(Option, [{
    key: 'handleRemove',
    value: function handleRemove() {
      this.props.handleRemove(this.props.optionText);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        null,
        this.props.optionText,
        React.createElement(
          'button',
          { onClick: this.handleRemove },
          'X'
        )
      );
    }
  }]);

  return Option;
}(React.Component);

// Option.propTypes = {
//   optionText: PropTypes.string
// }

var AddOption = function (_React$Component4) {
  _inherits(AddOption, _React$Component4);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this5 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this5.handleFormSubmit = _this5.handleFormSubmit.bind(_this5);
    _this5.state = {
      error: undefined
    };
    return _this5;
  }

  _createClass(AddOption, [{
    key: 'handleFormSubmit',
    value: function handleFormSubmit(event) {
      event.preventDefault();
      var option = event.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return { error: error };
      });

      if (!error) {
        event.target.elements.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleFormSubmit },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

IndecisionApp.defaultProps = {
  options: ['Example option 1', 'Example option 2']
};

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
