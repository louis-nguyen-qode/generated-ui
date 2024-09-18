// id="114:42632"
import React from "react"
import { Flex } from "antd"
import { Typography, TypographyProps } from "antd"

export interface QodeTypographyProps
  extends Omit<TypographyProps, "title" | "underlined"> {
  title?: string
  underlined?: "False" | "True"
}

export const QodeTypography: React.FC<QodeTypographyProps> = ({
  title = "Link",
  underlined = "False",
  ...rest
}) => {
  return <Typography title={title} underlined={underlined} {...rest} />
}
