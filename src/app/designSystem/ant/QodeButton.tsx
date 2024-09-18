import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';
import React from 'react';

export interface QodeButtonProps extends Omit<ButtonProps, 'iconLeft'
  | 'iconRight'
  | 'selectIconRight'
  | 'onlyIcon'
  | 'buttonname'
  | 'selectIconLeft'
  | 'type'
  | 'size'
  | 'state'
  | 'content'
  | 'danger'
  | 'ghost'> {
  iconLeft?: boolean;
  iconRight?: boolean;
  selectIconRight?: React.ReactNode;
  onlyIcon?: React.ReactNode;
  buttonname?: string;
  selectIconLeft?: React.ReactNode;
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  size?: 'default' | 'middle' | 'large' | 'small';
  state?: 'default' | 'hover' | 'focus' | 'pressed' | 'disabled';
  content?: 'default' | 'icon';
  danger?: boolean;
  ghost?: boolean;
}

export const QodeButton: React.FC<QodeButtonProps> = ({
  iconLeft = false,
  iconRight = false,
  selectIconRight,
  onlyIcon,
  children,
  selectIconLeft,
  type = 'primary',
  size = 'middle',
  state = 'default',
  content = 'default',
  danger = false,
  ghost = false,
  style,
  buttonname,
  ...rest
}) => {
  const isDisabled = state === 'disabled';

  return (
    <Button
      disabled={isDisabled}
      type={type}
      size={size === "default" ? "middle" : size}
      danger={danger}
      ghost={ghost}
      icon={selectIconLeft || selectIconRight || undefined}
      iconPosition={(selectIconLeft ? 'start' : 'end') || undefined}
      style={{
        ...style,
      }}
      {...rest}
    >
      {content === 'default' && buttonname}
    </Button>
  );
};

export default QodeButton;