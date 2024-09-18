// id="171:26738"
import React from "react"
import { Flex } from "antd"
import { Pagination, PaginationProps } from "antd"

export interface QodePaginationProps
  extends Omit<PaginationProps, "state" | "direction"> {
  state?: "default" | "hover"
  direction?: "left" | "right"
}

export const QodePagination: React.FC<QodePaginationProps> = ({
  state = "default",
  direction = "left",
  ...rest
}) => {
  return <Pagination state={state} direction={direction} {...rest} />
}
