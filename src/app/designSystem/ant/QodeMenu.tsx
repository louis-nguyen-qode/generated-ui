// id="168:7916"
import React from "react"
import { Flex } from "antd"
import { Menu, MenuProps } from "antd"

export interface QodeMenuProps
  extends Omit<MenuProps, "items" | "mode" | "collapsed"> {
  items?: "2" | "3" | "4" | "5" | "6" | "7" | "8"
  mode?: "inline" | "vertical"
  collapsed?: "false" | "true"
}

export const QodeMenu: React.FC<QodeMenuProps> = ({
  items = "2",
  mode = "inline",
  collapsed = "false",
  style,
  ...rest
}) => {
  return (
    <Menu
      items={items}
      mode={mode}
      collapsed={collapsed}
      style={{ ...style }}
      {...rest}
    />
  )
}
