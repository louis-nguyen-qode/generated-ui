// id="157:2695"
import React from "react"
import { Flex } from "antd"
import { Anchor, AnchorProps } from "antd"

export interface QodeAnchorProps
  extends Omit<AnchorProps, "direction" | "links"> {
  direction?: "vertical" | "horizontal"
  links?: "2" | "3" | "4" | "5" | "6" | "7" | "8"
}

export const QodeAnchor: React.FC<QodeAnchorProps> = ({
  direction = "vertical",
  links = "2",
  ...rest
}) => {
  return <Anchor direction={direction} links={links} {...rest} />
}
