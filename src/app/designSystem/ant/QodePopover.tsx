// id="202:42087"
import React from "react"
import { Flex } from "antd"
import { Popover, PopoverProps } from "antd"

export interface QodePopoverProps
  extends Omit<
    PopoverProps,
    "title" | "description" | "showArrow" | "placement"
  > {
  title?: string
  description?: string
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

export const QodePopover: React.FC<QodePopoverProps> = ({
  title = "Title",
  description = "Content\nContent",
  showArrow = true,
  placement = "left",
  ...rest
}) => {
  return (
    <Popover
      title={title}
      description={description}
      showArrow={showArrow}
      placement={placement}
      {...rest}
    />
  )
}
