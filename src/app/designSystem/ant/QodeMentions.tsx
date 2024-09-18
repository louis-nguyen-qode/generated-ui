// id="186:155800"
import React from "react"
import { Flex } from "antd"
import { Mentions, MentionsProps } from "antd"

export interface QodeMentionsProps
  extends Omit<MentionsProps, "active" | "size"> {
  active?: "no" | "yes"
  size?: "default" | "large" | "small"
}

export const QodeMentions: React.FC<QodeMentionsProps> = ({
  active = "no",
  size = "default",
  style,
  ...rest
}) => {
  return <Mentions active={active} size={size} style={{ ...style }} {...rest} />
}
