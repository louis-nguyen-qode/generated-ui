// id="20:6485"
import React from "react";
import { Button, ButtonProps } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

export interface QodeButtonProps
  extends Omit<
    ButtonProps,
    | "iconL"
    | "iconR"
    | "icononly"
    | "title"
    | "type"
    | "size"
    | "content"
    | "danger"
    | "ghost"
  > {
  iconL?: React.ReactNode;
  iconR?: React.ReactNode;
  icononly?: React.ReactNode;
  title?: string;
  type?: "primary" | "default" | "dashed" | "text" | "link";
  size?: SizeType;
  content?: "default" | "icon";
  danger?: boolean;
  ghost?:  boolean;
}

export const QodeButton: React.FC<QodeButtonProps> = ({
  iconL = undefined,
  iconR = undefined,
  icononly = undefined,
  title = "Button",
  type = "primary",
  size = "middle",
  content = "default",
  danger = false,
  ghost = false,
  style,
  ...rest
}) => {
  return (
    <Button
      icon={iconL}
      iconPosition={iconR ? "end" : "start"}
      title={icononly ? title : undefined}
      type={type}
      size={size}
      content={content}
      danger={danger}
      ghost={ghost}
      style={{ ...style }}
      {...rest}
    />
  );
};
