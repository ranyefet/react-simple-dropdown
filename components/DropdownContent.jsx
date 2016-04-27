import React, { createClass, PropTypes } from 'react';

const DropdownContent = createClass({
  propTypes: {
    children: PropTypes.any,
    className: PropTypes.string,
    caretStyle: PropTypes.any,
  },
  getDefaultProps: function(){
    return {
      className: ''
    }
  },
  render: function(){
    const { children, className, caretStyle } = this.props;
    const classes = 'dropdown__content ' + className;
    return (
      <div
        style={this.props.style}
        className={classes}
      >
        <div className="dropdown__caret" style={caretStyle}></div>
        {children}
      </div>
    )
  }
});

export default DropdownContent;
