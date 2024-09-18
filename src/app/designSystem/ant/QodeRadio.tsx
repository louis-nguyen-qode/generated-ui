// id="496:30226"
import React from "react"
import { Flex } from "antd"
import { Radio, RadioProps } from "antd"

export interface QodeRadioProps
  extends Omit<RadioProps, "showTitle" | "title" | "state" | "checked"> {
  showTitle?: boolean
  title?: string
  state?: "default" | "hover" | "focused" | "disabled"
  checked?: "false" | "true"
}

export const QodeRadio: React.FC<QodeRadioProps> = ({
  showTitle = true,
  title = "Radio",
  state = "default",
  checked = "false",
  style,
  ...rest
}) => {
  return (
    <Radio
      showTitle={showTitle}
      title={title}
      state={state}
      checked={checked}
      style={{ ...style }}
      {...rest}
    />
  )
}
