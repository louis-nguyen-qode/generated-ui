// id="204:14654"
import React from "react"
import { Flex } from "antd"
import { Popconfirm, PopconfirmProps } from "antd"

export interface QodePopconfirmProps
  extends Omit<
    PopconfirmProps,
    "description" | "title" | "icon" | "showArrow" | "placement"
  > {
  description?: string
  title?: string
  icon?: React.ReactNode
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

export const QodePopconfirm: React.FC<QodePopconfirmProps> = ({
  description = "Delete the task",
  title = "Are you sure to delete this task?",
  icon = undefined,
  showArrow = true,
  placement = "left",
  ...rest
}) => {
  return (
    <Popconfirm
      description={description}
      title={title}
      icon={icon}
      showArrow={showArrow}
      placement={placement}
      {...rest}
    />
  )
}
