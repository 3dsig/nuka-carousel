'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var DefaultDecorators = [{
  component: _react2['default'].createClass({
    displayName: 'component',

    render: function render() {
      var self = this;
      var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll, this.props.scrollMode === 'page');
      return _react2['default'].createElement(
        'ul',
        { style: self.getListStyles() },
        indexes.map(function (index) {
          return _react2['default'].createElement(
            'li',
            { style: self.getListItemStyles(), key: index },
            _react2['default'].createElement(
              'button',
              {
                style: self.getButtonStyles(self.props.currentSlide === index),
                onClick: self.props.goToSlide.bind(null, index) },
              '•'
            )
          );
        })
      );
    },
    getIndexes: function getIndexes(count, inc, remainderScroll) {
      var arr = [];

      if (remainderScroll) {
        for (var i = 0; i < count; i += inc) {
          arr.push(i);
        }

        if (arr[arr.length - 1] < count - 1) {
          arr.push(count - 1);
        }
      } else {
        var lastPossibleIndex = undefined;

        switch (this.props.cellAlign) {
          case 'left':
            lastPossibleIndex = count - this.props.slidesToShow;
            break;
          case 'center':
            lastPossibleIndex = count - Math.ceil(this.props.slidesToShow / 2) - (this.props.slidesToShow % 2 === 0 ? 1 : 0);
            break;
          case 'right':
            lastPossibleIndex = count - 1;
            break;
        }

        for (var i = 0; i <= count; i += inc) {
          arr.push(i < lastPossibleIndex ? i : lastPossibleIndex);
        }
      }

      var log = {};
      return arr.filter(function (val) {
        if (log[val] === undefined) {
          log[val] = val;

          return true;
        }
      }).sort();
    },
    getListStyles: function getListStyles() {
      return {
        position: 'relative',
        margin: 0,
        padding: 0
      };
    },
    getListItemStyles: function getListItemStyles() {
      return {
        listStyleType: 'none',
        display: 'inline-block'
      };
    },
    getButtonStyles: function getButtonStyles(active) {
      return {
        border: 0,
        background: 'transparent',
        color: 'black',
        cursor: 'pointer',
        padding: 10,
        outline: 0,
        fontSize: 24,
        opacity: active ? 0.6 : 0.3
      };
    }
  }),
  position: 'BottomCenter'
}];

exports['default'] = DefaultDecorators;
module.exports = exports['default'];