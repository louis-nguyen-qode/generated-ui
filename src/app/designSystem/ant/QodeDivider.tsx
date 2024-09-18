// id="155:1192"
import React from "react"
import { Flex } from "antd"
import { Divider, DividerProps } from "antd"

export interface QodeDividerProps
  extends Omit<
    DividerProps,
    "showTitle" | "title" | "text" | "orientation" | "dashed"
  > {
  showTitle?: boolean
  title?: string
  text?: "heading" | "text"
  orientation?: "default" | "left" | "right"
  dashed?: "false" | "true"
}

export const QodeDivider: React.FC<QodeDividerProps> = ({
  showTitle = true,
  title = "Label",
  text = "text",
  orientation = "default",
  dashed = "false",
  ...rest
}) => {
  return (
    <Divider
      showTitle={showTitle}
      title={title}
      text={text}
      orientation={orientation}
      dashed={dashed}
      {...rest}
    />
  )
}
