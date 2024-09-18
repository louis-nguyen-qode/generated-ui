// id="132:932"
import React from "react"
import { Flex } from "antd"
import { Spin, SpinProps } from "antd"

export interface QodeSpinProps
  extends Omit<
    SpinProps,
    "showDescription" | "description" | "size" | "customSpinner"
  > {
  showDescription?: boolean
  description?: string
  size?: "small" | "default" | "large"
  customSpinner?: "false" | "true"
}

export const QodeSpin: React.FC<QodeSpinProps> = ({
  showDescription = true,
  description = "Loading...",
  size = "small",
  customSpinner = "false",
  ...rest
}) => {
  return (
    <Spin
      showDescription={showDescription}
      description={description}
      size={size}
      customSpinner={customSpinner}
      {...rest}
    />
  )
}
