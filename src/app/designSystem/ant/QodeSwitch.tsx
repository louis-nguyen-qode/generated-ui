// id="233:16664"
import React from "react"
import { Flex } from "antd"
import { Switch, SwitchProps } from "antd"

export interface QodeSwitchProps
  extends Omit<SwitchProps, "title" | "state" | "active" | "size" | "content"> {
  title?: string
  state?: "default" | "pressed" | "loading" | "disabled"
  active?: "false" | "true"
  size?: "default" | "small"
  content?: "icon" | "none" | "text"
}

export const QodeSwitch: React.FC<QodeSwitchProps> = ({
  title = "1",
  state = "default",
  active = "true",
  size = "default",
  content = "none",
  style,
  ...rest
}) => {
  return (
    <Switch
      title={title}
      state={state}
      active={active}
      size={size}
      content={content}
      style={{ ...style }}
      {...rest}
    />
  )
}
