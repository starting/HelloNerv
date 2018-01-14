'use strict';

var _nervjs = require('nervjs');

var _nervjs2 = _interopRequireDefault(_nervjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import nervjs
// create a component to hold Hello Message
class HelloMessage extends _nervjs2.default.Component {
  render() {
    return _nervjs2.default.createElement(
      'div',
      null,
      'Hello ',
      this.props.name
    );
  }
}
//Render our element into  with id .
_nervjs2.default.render(_nervjs2.default.createElement(HelloMessage, { name: 'Nerv Enhanced' }), document.getElementById('app'));