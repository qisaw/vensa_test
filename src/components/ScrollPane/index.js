import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import CrossSvg from '../../svg/cross.svg';
import {TransitionMotion, Motion, spring} from 'react-motion';

import styles from './scroll-pane.css';
const hide = false;

class ScrollPane extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    closeFn: PropTypes.func.isRequired,
    className: PropTypes.string,
    show: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.getDestStyles = this.getDestStyles.bind(this);
  }
  willEnter() {
    return {
      widthPercentage: 0,
    }
  }
  willLeave() {
    return {
      widthPercentage: spring(0),
    }
  }
  getDestStyles() {
    if(!this.props.show()) {
      return []
    }
    const style = [
      {
        key: 'a',
        style: {
          widthPercentage: spring(100),
        }
      }
    ] 
    return style;
  }
  getDefaultStyles() {
    return [
      {
        key: 'a',
        style: {
          widthPercentage: 0,
        }
      }
    ]
  }
  render() {
    const a = ({style, key}) => {
      const newStyle = {width: `${style.widthPercentage}%` }
      return (
        <div style={newStyle} key={key} className={classnames(styles.scrollPane, this.props.className)}>
          <div className={styles.header}>
          <CrossSvg className={styles.icon} onClick={this.props.closeFn}/>
          </div>
          {this.props.children}
        </div>
      )
    };
    return (
      <TransitionMotion
        defaultStyles={this.getDefaultStyles()}
        styles={this.getDestStyles}
        willLeave={this.willLeave}
        willEnter={this.willEnter}
        
      >
        {interpolatedStyles => <div className={classnames(styles.scrollPane, this.props.className)} >{interpolatedStyles.map(a)}</div>}
      </TransitionMotion>
    );
  }

}

export default ScrollPane;
export {
  styles,
}

