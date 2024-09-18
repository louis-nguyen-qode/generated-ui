// id="137:4974"
import React from "react"
import { Flex } from "antd"
import { Message, MessageProps } from "antd"

export interface QodeMessageProps
  extends Omit<MessageProps, "title" | "status"> {
  title?: string
  status?: "info" | "success" | "error" | "warning" | "loading"
}

export const QodeMessage: React.FC<QodeMessageProps> = ({
  title = "This is a message",
  status = "info",
  style,
  ...rest
}) => {
  return (
    <Message title={title} status={status} style={{ ...style }} {...rest} />
  )
}
