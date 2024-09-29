// id="1510:57743"
import React from "react"
import { Flex } from "antd"
import { Tooltip, TooltipProps } from "antd"

export interface QodeTooltipProps
  extends Omit<TooltipProps, "button" | "title" | "showArrow" | "placement"> {
  button?: boolean
  title?: string
  showArrow?: boolean
  placement?:
    | "left"
    | "left top"
    | "left bottom"
    | "right"
    | "right top"
    | "right bottom"
    | "bottom"
    | "bottom left"
    | "bottom right"
    | "Top"
    | "Top Left"
    | "Top Right"
}

export const QodeTooltip: React.FC<QodeTooltipProps> = ({
  button = false,
  title = "Prompt text",
  showArrow = true,
  placement = "left",
  style,
  ...rest
}) => {
  return (
    <Tooltip
      button={button}
      title={title}
      showArrow={showArrow}
      placement={placement}
      style={{ ...style }}
      {...rest}
    />
  )
}
