"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VisibilityApp = function (_React$Component) {
  _inherits(VisibilityApp, _React$Component);

  function VisibilityApp(props) {
    _classCallCheck(this, VisibilityApp);

    var _this = _possibleConstructorReturn(this, (VisibilityApp.__proto__ || Object.getPrototypeOf(VisibilityApp)).call(this, props));

    _this.handleToggle = _this.handleToggle.bind(_this);
    _this.state = {
      isVisible: false
    };
    return _this;
  }

  _createClass(VisibilityApp, [{
    key: "handleToggle",
    value: function handleToggle() {
      this.setState(function (prevState) {
        return { isVisible: !prevState.isVisible };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Toggle Visibility";
      var details = "sweet deets";

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          title
        ),
        React.createElement(
          "button",
          { onClick: this.handleToggle },
          this.state.isVisible ? 'Hide' : 'Show',
          " details"
        ),
        this.state.isVisible && React.createElement(
          "p",
          null,
          details
        )
      );
    }
  }]);

  return VisibilityApp;
}(React.Component);

ReactDOM.render(React.createElement(VisibilityApp, null), document.getElementById("app"));
