// id="607:41281"
import React from "react"
import { Flex } from "antd"
import { Dropdown, DropdownProps } from "antd"

export interface QodeDropdownProps
  extends Omit<DropdownProps, "type" | "active"> {
  type?: "basic inline" | "button basic" | "button twofold"
  active?: "false" | "true"
}

export const QodeDropdown: React.FC<QodeDropdownProps> = ({
  type = "basic inline",
  active = "false",
  ...rest
}) => {
  return <Dropdown type={type} active={active} {...rest} />
}
