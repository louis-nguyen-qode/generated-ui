// id="531:30112"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom53130112Props {}

export const QodeCustom53130112: React.FC<
  QodeCustom53130112Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=view" id="531:30112" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "720px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "var(--border-radius-small, 4px)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              flex: "1 0 0",
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-size-sizemd-20px, 20px)",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "var(--lineheight-lineheight-xl, 28px) /* 140% */",
            },
            ...{},
          }}
        >{`Section header`}</span>
      </div>
    </>
  )
}
