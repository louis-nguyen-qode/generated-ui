// id="137:810"
import React from "react"
import { Flex } from "antd"
import { Skeleton, SkeletonProps } from "antd"

export interface QodeSkeletonProps
  extends Omit<SkeletonProps, "avatar" | "type"> {
  avatar?: React.ReactNode
  type?: "Basic" | "Complex"
}

export const QodeSkeleton: React.FC<QodeSkeletonProps> = ({
  avatar = undefined,
  type = "Basic",
  ...rest
}) => {
  return <Skeleton avatar={avatar} type={type} {...rest} />
}
