// id="137:1303"
import React from "react"
import { Flex } from "antd"
import { Notification, NotificationProps } from "antd"

export interface QodeNotificationProps
  extends Omit<
    NotificationProps,
    "description" | "title" | "showButtons" | "showIcon" | "type"
  > {
  description?: string
  title?: string
  showButtons?: boolean
  showIcon?: boolean
  type?: "info" | "error" | "success" | "warning"
}

export const QodeNotification: React.FC<QodeNotificationProps> = ({
  description = "Hello, Ant Design!",
  title = "Notification Title",
  showButtons = true,
  showIcon = true,
  type = "info",
  ...rest
}) => {
  return (
    <Notification
      description={description}
      title={title}
      showButtons={showButtons}
      showIcon={showIcon}
      type={type}
      {...rest}
    />
  )
}
