// id="354:6719"
import React from "react"
import { Flex } from "antd"
import { FloatButton, FloatButtonProps } from "antd"

export interface QodeFloatButtonProps
  extends Omit<
    FloatButtonProps,
    "icon" | "type" | "state" | "shape" | "badge"
  > {
  icon?: React.ReactNode
  type?: "default" | "primary"
  state?: "default" | "hover"
  shape?: "square" | "circle"
  badge?: "none" | "dot" | "small"
}

export const QodeFloatButton: React.FC<QodeFloatButtonProps> = ({
  icon = undefined,
  type = "default",
  state = "default",
  shape = "square",
  badge = "none",
  ...rest
}) => {
  return (
    <FloatButton
      icon={icon}
      type={type}
      state={state}
      shape={shape}
      badge={badge}
      {...rest}
    />
  )
}
