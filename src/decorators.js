'use strict';

import React from 'react';

const DefaultDecorators = [
  
  {
    component: React.createClass({
      render() {
        var self = this;
        var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll, this.props.scrollMode === 'page');
        return (
          <ul style={self.getListStyles()}>
            {
              indexes.map(function(index) {
                return (
                  <li style={self.getListItemStyles()} key={index}>
                    <button
                      style={self.getButtonStyles(self.props.currentSlide === index)}
                      onClick={self.props.goToSlide.bind(null, index)}>
                      &bull;
                    </button>
                  </li>
                )
              })
            }
          </ul>
        )
      },
      getIndexes(count, inc, remainderScroll) {
        const arr = [];

        if (remainderScroll) {
          for (var i = 0; i < count; i += inc) {
            arr.push(i);
          }

          if (arr[arr.length - 1] < count - 1) {
            arr.push(count - 1);
          }
        } else {
          let lastPossibleIndex;

          switch (this.props.cellAlign) {
          case 'left':
            lastPossibleIndex = count - this.props.slidesToShow;
            break;
          case 'center':
            lastPossibleIndex =
              count - Math.ceil(this.props.slidesToShow / 2)
              - (this.props.slidesToShow % 2 === 0 ? 1 : 0);
            break;
          case 'right':
            lastPossibleIndex = count - 1;
            break;
          }

          for (var i = 0; i <= count; i += inc) {
            arr.push(i < lastPossibleIndex ? i : lastPossibleIndex);
          }
        }

        const log = {};
        return arr.filter((val) => {
          if (log[val] === undefined) {
            log[val] = val;

            return true;
          }
        }).sort();
      },
      getListStyles() {
        return {
          position: 'relative',
          margin: 0,
          padding: 0
        }
      },
      getListItemStyles() {
        return {
          listStyleType: 'none',
          display: 'inline-block'
        }
      },
      getButtonStyles(active) {
        return {
          border: 0,
          background: 'transparent',
          color: 'black',
          cursor: 'pointer',
          padding: 10,
          outline: 0,
          fontSize: 24,
          opacity: active ? 0.6 : 0.3
        }
      }
    }),
    position: 'BottomCenter'
  }
];

export default DefaultDecorators;
