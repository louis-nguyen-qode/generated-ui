// id="20:6485"
import React from "react"
import { Flex } from "antd"
import { Button, ButtonProps } from "antd"

export interface QodeButtonProps
  extends Omit<
    ButtonProps,
    | "iconL"
    | "iconR"
    | "icononly"
    | "title"
    | "type"
    | "size"
    | "state"
    | "content"
    | "danger"
    | "ghost"
  > {
  iconL?: React.ReactNode
  iconR?: React.ReactNode
  icononly?: React.ReactNode
  title?: string
  type?: "primary" | "default" | "dashed" | "text" | "link"
  size?: "default" | "large" | "small"
  state?: "default" | "disabled" | "focus" | "hover" | "pressed"
  content?: "default" | "icon"
  danger?: "false" | "true"
  ghost?: "false" | "true"
}

export const QodeButton: React.FC<QodeButtonProps> = ({
  iconL = undefined,
  iconR = undefined,
  icononly = undefined,
  title = "Button",
  type = "primary",
  size = "default",
  state = "default",
  content = "default",
  danger = "false",
  ghost = "false",
  style,
  ...rest
}) => {
  return (
    <Button
      iconL={iconL}
      iconR={iconR}
      icononly={icononly}
      title={title}
      type={type}
      size={size}
      state={state}
      content={content}
      danger={danger}
      ghost={ghost}
      style={{ ...style }}
      {...rest}
    />
  )
}
