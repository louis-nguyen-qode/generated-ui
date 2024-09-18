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
  children,
  ...rest
}) => {
  return (
    <Tag
      // icon={rIcon}
      color={color}
      itemType={state}
      style={{ ...style }}
      {...rest}
    >
      {
        children || (
          <span style={{
            color: "var(--text-text-neutral-50, #1D1D1D)",
            fontFamily: "var(--family-family, \"SF Pro Display\")",
            fontSize: "var(--size-base, 14px)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "var(--lineheight-lineheight-base, 20px) /* 142.857% */"
          }}>Java</span>
        )
      }
    </Tag>
  )
}
