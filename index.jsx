import {useEffect, useContext} from 'react';
import {View} from '@fower/taro';
import {default as BaseButton} from '@mxjs/m-button';
import clsx from 'clsx';
import './index.scss';
import Taro from '@tarojs/taro';
import {PageContext} from '@mxjs/m-page';
import PropTypes from 'prop-types';
import useUid from 'use-uid';

const FooterBar = ({className, children, ...props}) => {
  const {setCss} = useContext(PageContext);
  const cls = useUid('__mx-footer-bar-');

  useEffect(() => {
    setTimeout(() => {
      const query = Taro.createSelectorQuery();
      query.select('.' + cls).boundingClientRect(rect => {
        if (!rect) {
          return;
        }

        setCss({pb: rect.height + 'px'});
      }).exec();
    });
  }, []);

  return (
    <View className={clsx('mx-footer-bar', cls, className)} {...props}>{children}</View>
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
