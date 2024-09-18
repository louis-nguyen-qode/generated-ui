// id="189:7161"
import React from "react"
import { Flex } from "antd"
import { Cascader, CascaderProps } from "antd"

export interface QodeCascaderProps
  extends Omit<CascaderProps, "active" | "size"> {
  active?: "false" | "true"
  size?: "default" | "large" | "small"
}

export const QodeCascader: React.FC<QodeCascaderProps> = ({
  active = "false",
  size = "default",
  ...rest
}) => {
  return <Cascader active={active} size={size} {...rest} />
}
