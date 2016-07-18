import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import CrossSvg from '../../svg/cross.svg';
import { TransitionMotion, spring } from 'react-motion';

import styles from './scroll-pane.css';

class ScrollPane extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    show: PropTypes.func.isRequired,
    className: PropTypes.string,
    closeFn: PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.getDestStyles = this.getDestStyles.bind(this);
  }
  getDefaultStyles() {
    return [
      {
        key: 'helloThere',
        style: {
          widthPercentage: 0,
        },
      },
    ];
  }
  getDestStyles() {
    if (!this.props.show()) {
      return [{
        key: 'a',
        style: {
          widthPercentage: 0,
        },
      }];
    }
    const style = [
      {
        key: 'a',
        style: {
          widthPercentage: spring(100),
        },
      },
    ];
    return style;
  }
  willEnter() {
    return {
      widthPercentage: 0,
    };
  }
  willLeave() {
    return {
      widthPercentage: spring(0),
    };
  }
  render() {
    const a = ({ style, key }) => {
      const newStyle = { width: `${style.widthPercentage}%` };
      const showIcon = () => (this.props.closeFn ?
        <CrossSvg className={styles.icon} onClick={this.props.closeFn} /> : '');
      return (
        <div
          style={newStyle}
          key={key}
          className={classnames(styles.scrollPane, this.props.className)}
        >
          <div className={styles.header}>
            {showIcon()}
          </div>
          {this.props.children}
        </div>
      );
    };
    return (
      <TransitionMotion
        styles={this.getDestStyles()}
        willLeave={this.willLeave}
        willEnter={this.willEnter}
        defaultStyles={this.getDefaultStyles()}
      >
        {interpolatedStyles =>
          <div className={classnames(styles.scrollPane, this.props.className)}>
            {interpolatedStyles.map(a)}
          </div>}
      </TransitionMotion>
    );
  }

}

export default ScrollPane;
export {
  styles,
};

