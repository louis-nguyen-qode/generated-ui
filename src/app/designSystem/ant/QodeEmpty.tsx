// id="124:2772"
import React from "react"
import { Flex } from "antd"
import { Empty, EmptyProps } from "antd"

export interface QodeEmptyProps
  extends Omit<EmptyProps, "showDescription" | "type"> {
  showDescription?: boolean
  type?: "basic" | "customize" | "simple"
}

export const QodeEmpty: React.FC<QodeEmptyProps> = ({
  showDescription = true,
  type = "basic",
  style,
  ...rest
}) => {
  return (
    <Empty
      showDescription={showDescription}
      type={type}
      style={{ ...style }}
      {...rest}
    />
  )
}
