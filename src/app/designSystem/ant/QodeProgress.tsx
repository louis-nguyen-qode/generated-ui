// id="204:9386"
import React from "react"
import { Flex } from "antd"
import { Progress, ProgressProps } from "antd"

export interface QodeProgressProps
  extends Omit<ProgressProps, "showInfo" | "value" | "size" | "stokeLinecap"> {
  showInfo?: boolean
  value?:
    | "5%"
    | "10%"
    | "15%"
    | "20%"
    | "25%"
    | "30%"
    | "35%"
    | "40%"
    | "45%"
    | "50%"
    | "55%"
    | "60%"
    | "65%"
    | "70%"
    | "75%"
    | "80%"
    | "85%"
    | "90%"
    | "95%"
    | "Error"
    | "Success"
  size?: "default" | "small"
  stokeLinecap?: "round" | "butt"
}

export const QodeProgress: React.FC<QodeProgressProps> = ({
  showInfo = true,
  value = "5%",
  size = "default",
  stokeLinecap = "round",
  ...rest
}) => {
  return (
    <Progress
      showInfo={showInfo}
      value={value}
      size={size}
      stokeLinecap={stokeLinecap}
      {...rest}
    />
  )
}
