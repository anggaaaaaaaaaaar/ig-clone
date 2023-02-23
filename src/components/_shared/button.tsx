import { Button } from 'antd';
import React from 'react';

type ButtonType = {
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'icon' | 'default';
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

const ButtonComponent: React.FunctionComponent<ButtonType> = ({
  icon,
  className,
  onClick,
  type,
  children,
}) => {
  return (
    <Button
      icon={icon}
      onClick={onClick}
      className={`custom-button custom-button-${type} ${className}`}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
