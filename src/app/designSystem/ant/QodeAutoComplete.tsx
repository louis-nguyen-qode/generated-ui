// id="186:156296"
import React from "react"
import { Flex } from "antd"
import { AutoComplete, AutoCompleteProps } from "antd"

export interface QodeAutoCompleteProps
  extends Omit<AutoCompleteProps, "active" | "size"> {
  active?: "no" | "yes"
  size?: "default" | "large" | "small"
}

export const QodeAutoComplete: React.FC<QodeAutoCompleteProps> = ({
  active = "no",
  size = "default",
  ...rest
}) => {
  return <AutoComplete active={active} size={size} {...rest} />
}
