// id="164:2646"
import React from "react"
import { Flex } from "antd"
import { Rate, RateProps } from "antd"

export interface QodeRateProps extends Omit<RateProps, "integrity"> {
  integrity?: "zero" | "helf" | "full"
}

export const QodeRate: React.FC<QodeRateProps> = ({
  integrity = "full",
  style,
  ...rest
}) => {
  return <Rate integrity={integrity} style={{ ...style }} {...rest} />
}
