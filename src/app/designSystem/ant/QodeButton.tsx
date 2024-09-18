// id="35:13238"
import React from "react"
import { Flex } from "antd"
import { Button, ButtonProps } from "antd"

export interface QodeButtonProps
  extends Omit<
    ButtonProps,
    | "iconLeft"
    | "iconRight"
    | "selectIconRight"
    | "onlyIcon"
    | "buttonname"
    | "selectIconLeft"
    | "type"
    | "size"
    | "state"
    | "content"
    | "danger"
    | "ghost"
  > {
  iconLeft?: boolean
  iconRight?: boolean
  selectIconRight?: React.ReactNode
  onlyIcon?: React.ReactNode
  buttonname?: string
  selectIconLeft?: React.ReactNode
  type?: "primary" | "default" | "dashed" | "text" | "link"
  size?: "default" | "large" | "small"
  state?: "default" | "disabled" | "focus" | "hover" | "pressed"
  content?: "default" | "icon"
  danger?: "false" | "true"
  ghost?: "false" | "true"
}

export const QodeButton: React.FC<QodeButtonProps> = ({
  iconLeft = false,
  iconRight = false,
  selectIconRight = undefined,
  onlyIcon = undefined,
  buttonname = "Button",
  selectIconLeft = undefined,
  type = "primary",
  size = "default",
  state = "default",
  content = "default",
  danger = "false",
  ghost = "false",
  ...rest
}) => {
  return (
    <Button
      iconLeft={iconLeft}
      iconRight={iconRight}
      selectIconRight={selectIconRight}
      onlyIcon={onlyIcon}
      buttonname={buttonname}
      selectIconLeft={selectIconLeft}
      type={type}
      size={size}
      state={state}
      content={content}
      danger={danger}
      ghost={ghost}
      {...rest}
    />
  )
}
