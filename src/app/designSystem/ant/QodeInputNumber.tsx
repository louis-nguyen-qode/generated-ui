// id="328:30196"
import React from "react"
import { Flex } from "antd"
import { InputNumber, InputNumberProps } from "antd"

export interface QodeInputNumberProps
  extends Omit<
    InputNumberProps,
    | "showPostTab"
    | "showPreTab"
    | "number"
    | "prefix"
    | "showPrefix"
    | "iconLeft"
    | "showIconLeft"
    | "state"
    | "status"
    | "size"
  > {
  showPostTab?: boolean
  showPreTab?: boolean
  number?: string
  prefix?: string
  showPrefix?: boolean
  iconLeft?: React.ReactNode
  showIconLeft?: boolean
  state?: "default" | "hover" | "focus" | "typing" | "filled" | "disabled"
  status?: "default" | "error" | "warning"
  size?: "default" | "large" | "small"
}

export const QodeInputNumber: React.FC<QodeInputNumberProps> = ({
  showPostTab = false,
  showPreTab = false,
  number = "3",
  prefix = "PRE",
  showPrefix = false,
  iconLeft = undefined,
  showIconLeft = false,
  state = "default",
  status = "default",
  size = "default",
  style,
  ...rest
}) => {
  return (
    <InputNumber
      showPostTab={showPostTab}
      showPreTab={showPreTab}
      number={number}
      prefix={prefix}
      showPrefix={showPrefix}
      iconLeft={iconLeft}
      showIconLeft={showIconLeft}
      state={state}
      status={status}
      size={size}
      style={{ ...style }}
      {...rest}
    />
  )
}
