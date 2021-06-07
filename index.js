import {View} from '@fower/taro';
import {default as BaseButton} from '@mxjs/m-button';
import clsx from 'clsx';
import './index.scss';
import PropTypes from 'prop-types';

const FooterBar = ({className, children, ...props}) => {
  return (
    <View className={clsx('mx-footer-bar', className)} {...props}>{children}</View>
  );
};

FooterBar.Button = ({className, children, ...props}) => {
  return (
    <BaseButton className={clsx('mx-footer-bar-btn', className)} {...props}>{children}</BaseButton>
  );
};

FooterBar.Icon = ({className, children, ...props}) => {
  return (
    <BaseButton className={clsx('mx-footer-bar-icon', className)} {...props}>{children}</BaseButton>
  );
};

FooterBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FooterBar.Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FooterBar.Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default FooterBar;
