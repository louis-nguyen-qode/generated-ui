// id="170:23784"
import React from "react"
import { Flex } from "antd"
import { Select, SelectProps } from "antd"

export interface QodeSelectProps extends Omit<SelectProps, "title" | "state"> {
  title?: string
  state?: "default" | "hover" | "selected" | "selected multiple" | "disabled"
}

export const QodeSelect: React.FC<QodeSelectProps> = ({
  title = "Select menu item",
  state = "default",
  ...rest
}) => {
  return <Select title={title} state={state} {...rest} />
}
