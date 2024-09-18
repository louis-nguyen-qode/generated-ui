// id="124:1534"
import React from "react"
import { Flex } from "antd"
import { Tooltip, TooltipProps } from "antd"

export interface QodeTooltipProps
  extends Omit<TooltipProps, "title" | "color"> {
  title?: string
  color?:
    | "volcano"
    | "sunset orange"
    | "calendula gold"
    | "sunrise yellow"
    | "lime"
    | "polar green"
    | "cyan"
    | "daybreak blue"
    | "geek blue"
    | "Golden Purple"
    | "Magneta"
}

export const QodeTooltip: React.FC<QodeTooltipProps> = ({
  title = "Prompt text",
  color = "volcano",
  ...rest
}) => {
  return <Tooltip title={title} color={color} {...rest} />
}
