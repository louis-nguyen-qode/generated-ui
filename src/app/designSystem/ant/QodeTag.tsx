// id="311:21524"
import React from "react"
import { Flex } from "antd"
import { Tag, TagProps } from "antd"

export interface QodeTagProps
  extends Omit<
    TagProps,
    "rIcon" | "showRIcon" | "color" | "state" | "size" | "rounded"
  > {
  rIcon?: React.ReactNode
  showRIcon?: boolean
  color?:
    | "primary"
    | "neutral"
    | "magenta"
    | "golden purple"
    | "cyan"
    | "polar green"
    | "lime"
    | "calendula gold"
  state?: "default" | "hover"
  size?: "Default" | "rouned" | "small"
  rounded?: "False" | "True"
}

export const QodeTag: React.FC<QodeTagProps> = ({
  rIcon = undefined,
  showRIcon = true,
  color = "magenta",
  state = "default",
  size = "Default",
  rounded = "False",
  style,
  ...rest
}) => {
  return (
    <Tag
      rIcon={rIcon}
      showRIcon={showRIcon}
      color={color}
      state={state}
      size={size}
      rounded={rounded}
      style={{ ...style }}
      {...rest}
    />
  )
}
