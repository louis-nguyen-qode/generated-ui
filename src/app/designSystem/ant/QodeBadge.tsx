// id="26:6986"
import React from "react"
import { Flex } from "antd"
import { Badge, BadgeProps } from "antd"

export interface QodeBadgeProps
  extends Omit<BadgeProps, "icon" | "count" | "type"> {
  icon?: React.ReactNode
  count?: string
  type?: "dot" | "default" | "small" | "icon"
}

export const QodeBadge: React.FC<QodeBadgeProps> = ({
  icon = undefined,
  count = "21",
  type = "dot",
  style,
  ...rest
}) => {
  return (
    <Badge
      icon={icon}
      count={count}
      type={type}
      style={{ ...style }}
      {...rest}
    />
  )
}
