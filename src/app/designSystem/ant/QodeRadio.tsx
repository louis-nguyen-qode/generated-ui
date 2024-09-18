// id="188:1042"
import React from "react"
import { Flex } from "antd"
import { Radio, RadioProps } from "antd"

export interface QodeRadioProps
  extends Omit<
    RadioProps,
    "label" | "iconR" | "iconL" | "state" | "size" | "style" | "position"
  > {
  label?: string
  iconR?: boolean
  iconL?: boolean
  state?: "default" | "hover" | "disabled" | "active"
  size?: "default" | "large" | "small"
  style?: "outlined" | "solid"
  position?: "center" | "first" | "last"
}

export const QodeRadio: React.FC<QodeRadioProps> = ({
  label = "Radio",
  iconR = false,
  iconL = false,
  state = "default",
  size = "default",
  style = "outlined",
  position = "center",
  ...rest
}) => {
  return (
    <Radio
      label={label}
      iconR={iconR}
      iconL={iconL}
      state={state}
      size={size}
      style={style}
      position={position}
      {...rest}
    />
  )
}
