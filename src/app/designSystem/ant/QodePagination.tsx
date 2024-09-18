// id="426:20497"
import React from "react"
import { Flex } from "antd"
import { Pagination, PaginationProps } from "antd"

export interface QodePaginationProps
  extends Omit<PaginationProps, "total" | "type" | "mini"> {
  total?: string
  type?: "basic" | "jumper" | "more" | "changer" | "total" | "all"
  mini?: "false" | "true"
}

export const QodePagination: React.FC<QodePaginationProps> = ({
  total = "Total 85 items",
  type = "basic",
  mini = "false",
  style,
  ...rest
}) => {
  return (
    <Pagination
      total={total}
      type={type}
      mini={mini}
      style={{ ...style }}
      {...rest}
    />
  )
}
