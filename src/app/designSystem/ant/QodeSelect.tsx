// id="426:20481"
import React from "react"
import { Flex } from "antd"
import { Select, SelectProps } from "antd"

export interface QodeSelectProps extends Omit<SelectProps, "active" | "size"> {
  active?: "false" | "true"
  size?: "default" | "large" | "small"
}

export const QodeSelect: React.FC<QodeSelectProps> = ({
  active = "false",
  size = "default",
  ...rest
}) => {
  return <Select active={active} size={size} {...rest} />
}
