/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@ecl/ec-react-component-icon/Icon';

const BreadcrumbEllipsis = ({ label, isVisible, onClick }) => (
  <li
    className="ecl-breadcrumb__segment ecl-breadcrumb__segment--ellipsis"
    aria-hidden={!isVisible}
  >
    <button
      type="button"
      className="ecl-breadcrumb__ellipsis"
      aria-label={label}
      onClick={onClick}
    >
      …
    </button>
    <Icon
      className="ecl-breadcrumb__icon"
      shape="ui--corner-arrow"
      transform="rotate-90"
      size="xs"
      aria-hidden
    />
  </li>
);

BreadcrumbEllipsis.propTypes = {
  label: PropTypes.string,
  isVisible: PropTypes.bool,
  onClick: PropTypes.func,
};

BreadcrumbEllipsis.defaultProps = {
  label: '',
  isVisible: false,
  onClick: () => {},
};

export default BreadcrumbEllipsis;
