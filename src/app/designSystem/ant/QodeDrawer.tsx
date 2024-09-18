// id="214:1422"
import React from "react"
import { Flex } from "antd"
import { Drawer, DrawerProps } from "antd"

export interface QodeDrawerProps
  extends Omit<
    DrawerProps,
    | "slot"
    | "title"
    | "showButtons"
    | "showButtonSecondary"
    | "showClose"
    | "placement"
  > {
  slot?: React.ReactNode
  title?: string
  showButtons?: boolean
  showButtonSecondary?: boolean
  showClose?: boolean
  placement?: "right" | "left" | "bottom" | "top"
}

export const QodeDrawer: React.FC<QodeDrawerProps> = ({
  slot = undefined,
  title = "Drawer Title",
  showButtons = true,
  showButtonSecondary = true,
  showClose = true,
  placement = "right",
  style,
  ...rest
}) => {
  return (
    <Drawer
      slot={slot}
      title={title}
      showButtons={showButtons}
      showButtonSecondary={showButtonSecondary}
      showClose={showClose}
      placement={placement}
      style={{ ...style }}
      {...rest}
    />
  )
}
