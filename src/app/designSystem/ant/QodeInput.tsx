// id="434:30497"
import React from "react"
import { Flex } from "antd"
import { Input, InputProps } from "antd"

export interface QodeInputProps
  extends Omit<
    InputProps,
    | "showIconRight"
    | "suffix"
    | "showSuffix"
    | "title"
    | "prefix"
    | "iconRight"
    | "showPrefix"
    | "iconLeft"
    | "showIconLeft"
    | "state"
    | "status"
    | "size"
  > {
  showIconRight?: boolean
  suffix?: string
  showSuffix?: boolean
  title?: string
  prefix?: string
  iconRight?: React.ReactNode
  showPrefix?: boolean
  iconLeft?: React.ReactNode
  showIconLeft?: boolean
  state?: "default" | "hover" | "focused" | "typing" | "filled" | "disabled"
  status?: "default" | "error" | "warning"
  size?: "default" | "large" | "small"
}

export const QodeInput: React.FC<QodeInputProps> = ({
  showIconRight = false,
  suffix = "SUF",
  showSuffix = false,
  title = "Input",
  prefix = "PRE",
  iconRight = undefined,
  showPrefix = false,
  iconLeft = undefined,
  showIconLeft = true,
  state = "default",
  status = "default",
  size = "default",
  style,
  ...rest
}) => {
  return (
    <Input
      suffix={iconRight}
      title={title}
      prefix={iconLeft}
      status={status === "default" ? "" : status}
      size={size === "default" ? "middle" : size}
      style={{ ...style }}
      {...rest}
    />
  )
}
