/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Icon from '@ecl/ec-react-component-icon/Icon';
import Link from '@ecl/ec-react-component-link/Link';

const Item = ({
  href,
  label,
  isCurrentPage,
  isLastItem,
  isVisible,
  className,
  children,
  ...props
}) => (
  <li
    {...props}
    className={classnames(className, 'ecl-breadcrumb__segment', {
      'ecl-breadcrumb__current-page': isCurrentPage,
    })}
    {...!!(isCurrentPage && !href) && { 'aria-current': 'page' }}
    data-ecl-breadcrumb-item
    aria-hidden={!isVisible}
  >
    {href ? (
      <Link
        href={href}
        label={label}
        variant="standalone"
        {...isCurrentPage && { 'aria-current': 'page' }}
        className="ecl-breadcrumb__link"
      />
    ) : (
      <Fragment>{label}</Fragment>
    )}
    {!isLastItem && (
      <Icon
        className="ecl-breadcrumb__icon"
        shape="ui--corner-arrow"
        transform="rotate-90"
        size="xs"
        aria-hidden
      />
    )}
  </li>
);

Item.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  isCurrentPage: PropTypes.bool,
  isLastItem: PropTypes.bool,
  isVisible: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Item.defaultProps = {
  href: '',
  isCurrentPage: false,
  isLastItem: false,
  isVisible: false,
  className: '',
  children: null,
};

export default Item;