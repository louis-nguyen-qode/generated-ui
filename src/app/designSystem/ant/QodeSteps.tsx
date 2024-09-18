// id="27:7861"
import React from "react"
import { Flex } from "antd"
import { Steps, StepsProps } from "antd"

export interface QodeStepsProps
  extends Omit<StepsProps, "step" | "status" | "size"> {
  step?: string
  status?: "finish" | "process" | "wait" | "error" | "progress"
  size?: "default" | "dot" | "small"
}

export const QodeSteps: React.FC<QodeStepsProps> = ({
  step = "2",
  status = "finish",
  size = "default",
  style,
  ...rest
}) => {
  return (
    <Steps
      step={step}
      status={status}
      size={size}
      style={{ ...style }}
      {...rest}
    />
  )
}
