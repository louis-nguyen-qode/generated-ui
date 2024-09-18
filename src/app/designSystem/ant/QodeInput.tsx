// id="182:9243"
import React from "react"
import { Flex } from "antd"
import { Input, InputProps } from "antd"

export interface QodeInputProps
  extends Omit<
    InputProps,
    "icon" | "showIcon" | "showSelect" | "title" | "showTitle" | "tab" | "size"
  > {
  icon?: React.ReactNode
  showIcon?: boolean
  showSelect?: boolean
  title?: string
  showTitle?: boolean
  tab?: "pre" | "post"
  size?: "default" | "large" | "small"
}

export const QodeInput: React.FC<QodeInputProps> = ({
  icon = undefined,
  showIcon = false,
  showSelect = false,
  title = "http://",
  showTitle = true,
  tab = "pre",
  size = "default",
  ...rest
}) => {
  return (
    <Input
      icon={icon}
      showIcon={showIcon}
      showSelect={showSelect}
      title={title}
      showTitle={showTitle}
      tab={tab}
      size={size}
      {...rest}
    />
  )
}
