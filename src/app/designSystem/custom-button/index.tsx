import { Button } from 'antd';
import { ButtonProps } from 'antd/es/button';
import React from 'react';

export interface QodeButtonProps extends ButtonProps {
  iconLeft?: boolean;
  iconRight?: boolean;
  selectIconRight?: React.ReactNode;
  onlyIcon?: React.ReactNode;
  buttonName?: string;
  selectIconLeft?: React.ReactNode;
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  size?: 'middle' | 'large' | 'small';
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
  state = 'default',  // Initial state
  content = 'default',
  danger = false,
  ghost = false,
  style,
  ...rest
}) => {
  const isDisabled = state === 'disabled';

  return (
    <Button
      disabled={isDisabled}
      type={type}
      size={size}
      danger={danger}
      ghost={ghost}
      icon={selectIconLeft || selectIconRight || undefined}
      iconPosition={(selectIconLeft ? 'start' : 'end') || undefined}
      style={{
        ...style,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default QodeButton;