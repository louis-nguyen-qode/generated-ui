// id="137:5131"
import React from "react"
import { Flex } from "antd"
import { Alert, AlertProps } from "antd"

export interface QodeAlertProps
  extends Omit<
    AlertProps,
    | "showClose"
    | "showIcon"
    | "description"
    | "title"
    | "status"
    | "banner"
    | "showDescription"
  > {
  showClose?: boolean
  showIcon?: boolean
  description?: string
  title?: string
  status?: "info" | "error" | "success" | "warning"
  banner?: "false" | "true"
  showDescription?: "false" | "true"
}

export const QodeAlert: React.FC<QodeAlertProps> = ({
  showClose = true,
  showIcon = true,
  description = "Additional description and information about copywriting.",
  title = "Alert title",
  status = "info",
  banner = "false",
  showDescription = "false",
  style,
  ...rest
}) => {
  return (
    <Alert
      showClose={showClose}
      showIcon={showIcon}
      description={description}
      title={title}
      status={status}
      banner={banner}
      showDescription={showDescription}
      style={{ ...style }}
      {...rest}
    />
  )
}
