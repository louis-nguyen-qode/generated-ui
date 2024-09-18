// id="124:986"
import React from "react"
import { Flex } from "antd"
import { Badge, BadgeProps } from "antd"

export interface QodeBadgeProps extends Omit<BadgeProps, "title" | "color"> {
  title?: string
  color?:
    | "daybreak blue"
    | "volcano"
    | "magenta"
    | "dust red"
    | "cyan"
    | "polar green"
    | "golden purple"
}

export const QodeBadge: React.FC<QodeBadgeProps> = ({
  title = "Ribbon",
  color = "daybreak blue",
  ...rest
}) => {
  return <Badge title={title} color={color} {...rest} />
}
