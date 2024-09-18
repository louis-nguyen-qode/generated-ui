// id="204:9698"
import React from "react"
import { Flex } from "antd"
import { Progress, ProgressProps } from "antd"

export interface QodeProgressProps
  extends Omit<ProgressProps, "size" | "status" | "strokeLinecap"> {
  size?: "mini" | "default"
  status?: "default" | "error" | "success"
  strokeLinecap?: "round" | "butt"
}

export const QodeProgress: React.FC<QodeProgressProps> = ({
  size = "mini",
  status = "default",
  strokeLinecap = "round",
  ...rest
}) => {
  return (
    <Progress
      size={size}
      status={status}
      strokeLinecap={strokeLinecap}
      {...rest}
    />
  )
}
