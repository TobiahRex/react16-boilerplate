/* eslint-disable lines-between-class-members, react/prop-types, react/require-default-props, react/no-children-prop */

import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import cx from 'classnames';
import PropTypes from 'prop-types';

class CustomButton extends Component {
  render() {
    const {
      type,
      fill,
      simple,
      pullRight,
      round,
      block,
      children,
      title,
      bsStyle
    } = this.props;
    const btnClasses = cx({
      'btn-fill': fill,
      'btn-simple': simple,
      'pull-right': pullRight,
      'btn-block': block,
      'btn-round': round
    });
    return (
      <Button
        type={type}
        className={btnClasses}
        title={title}
        bsStyle={bsStyle}
        children={children}
      />
    );
  }
}

CustomButton.propTypes = {
  fill: PropTypes.bool,
  simple: PropTypes.bool,
  pullRight: PropTypes.bool,
  block: PropTypes.bool,
  round: PropTypes.bool
};

export default CustomButton;
