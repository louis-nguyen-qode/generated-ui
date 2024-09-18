// id="189:2669"
import React from "react"
import { Flex } from "antd"
import { ColorPicker, ColorPickerProps } from "antd"

export interface QodeColorPickerProps
  extends Omit<ColorPickerProps, "title" | "showTitle" | "state" | "size"> {
  title?: string
  showTitle?: boolean
  state?: "default" | "active" | "disabled"
  size?: "default" | "large" | "small"
}

export const QodeColorPicker: React.FC<QodeColorPickerProps> = ({
  title = "#1677FF",
  showTitle = true,
  state = "default",
  size = "default",
  ...rest
}) => {
  return (
    <ColorPicker
      title={title}
      showTitle={showTitle}
      state={state}
      size={size}
      {...rest}
    />
  )
}
