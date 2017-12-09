"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var containerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%"
};

exports.AlphaJumper = function (_ref) {
  var _ref$alphabet = _ref.alphabet,
      alphabet = _ref$alphabet === undefined ? defaultAlphabet : _ref$alphabet,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'white' : _ref$color,
      _ref$onTouch = _ref.onTouch,
      onTouch = _ref$onTouch === undefined ? function () {
    return null;
  } : _ref$onTouch,
      style = _ref.style;
  return _react2.default.createElement(
    "div",
    { style: _extends({}, containerStyle, style) },
    alphabet.map(function (character, index) {
      return _react2.default.createElement(
        "div",
        {
          key: index,
          onMouseOver: function onMouseOver() {
            return onTouch(character);
          },
          style: { color: color, flex: 1 }
        },
        character
      );
    })
  );
};
