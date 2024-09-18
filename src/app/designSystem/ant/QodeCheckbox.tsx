// id="289:26227"
import React from "react"
import { Flex } from "antd"
import { Checkbox, CheckboxProps } from "antd"

export interface QodeCheckboxProps
  extends Omit<CheckboxProps, "showTitle" | "title" | "status" | "state"> {
  showTitle?: boolean
  title?: string
  status?: "active" | "inactive" | "indeterminate"
  state?: "default" | "hover" | "focus" | "disabled"
}

export const QodeCheckbox: React.FC<QodeCheckboxProps> = ({
  showTitle = true,
  title = "Checkbox",
  status = "active",
  state = "default",
  style,
  ...rest
}) => {
  return (
    <Checkbox
      showTitle={showTitle}
      title={title}
      status={status}
      state={state}
      style={{ ...style }}
      {...rest}
    />
  )
}
