// id="139:8596"
import React from "react"
import { Flex } from "antd"
import { Segmented, SegmentedProps } from "antd"

export interface QodeSegmentedProps
  extends Omit<SegmentedProps, "items" | "size"> {
  items?: "2" | "3" | "4" | "5" | "6"
  size?: "default" | "large" | "small"
}

export const QodeSegmented: React.FC<QodeSegmentedProps> = ({
  items = "2",
  size = "default",
  ...rest
}) => {
  return <Segmented items={items} size={size} {...rest} />
}
