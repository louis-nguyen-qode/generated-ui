// id="296:17657"
import React from "react"
import { Flex } from "antd"
import { Tabs, TabsProps } from "antd"

export interface QodeTabsProps
  extends Omit<TabsProps, "slot" | "position" | "size"> {
  slot?: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  size?: "default" | "large" | "small"
}

export const QodeTabs: React.FC<QodeTabsProps> = ({
  slot = undefined,
  position = "top",
  size = "default",
  ...rest
}) => {
  return <Tabs slot={slot} position={position} size={size} {...rest} />
}
