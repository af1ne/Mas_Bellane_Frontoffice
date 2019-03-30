import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import scrollIntoView from 'scroll-into-view';
import PropTypes from 'prop-types';


class ScrollView extends Component {
  static childContextTypes = {
    scroll: PropTypes.object
  };
  elements = {};
  register = (component, ref) => {
    this.elements[component] = ref;
  };
  unregister = (component) => {
    delete this.elements[component];
  };
  getChildContext() {
    return {
      scroll: {
        register: this.register,
        unregister: this.unregister
      }
    };
  }
  scrollTo = component => {
    const node = findDOMNode(this.elements[component]);
    scrollIntoView(node, {
      time: 500,
      align: {
        top: 0
      }
    });
  };
  render() {
    return React.Children.only(this.props.children);
  }
}

class ScrollElement extends Component {
  static contextypes = {
    scroll : PropTypes.object,
  }
  componentDidMount() {
    this.context.scroll.register(this.props.component, this._element);
  }
  componentWillUnmount() {
    this.context.scroll.unregister(this.props.component);
  }
  render() {
    return (
      React.cloneElement(this.props.children, {
        ref: ref => this.element = ref
      })
    );
  }
}
export { ScrollElement };
export default ScrollView;
