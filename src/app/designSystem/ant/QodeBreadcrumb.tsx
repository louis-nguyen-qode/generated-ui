// id="150:939"
import React from "react"
import { Flex } from "antd"
import { Breadcrumb, BreadcrumbProps } from "antd"

export interface QodeBreadcrumbProps extends Omit<BreadcrumbProps, "count"> {
  count?: "2" | "3" | "4" | "5"
}

export const QodeBreadcrumb: React.FC<QodeBreadcrumbProps> = ({
  count = "2",
  style,
  ...rest
}) => {
  return <Breadcrumb count={count} style={{ ...style }} {...rest} />
}
