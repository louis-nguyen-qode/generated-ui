// id="328:28506"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom32828506Props {}

export const QodeCustom32828506: React.FC<
  QodeCustom32828506Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="color=neutral, state=default, size=small, rounded=False" id="328:28506" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "24px",
            padding: "0px 12px",
            alignItems: "center",
            gap: "var(--size-size-sizexxs-6px, 6px)",
            flexShrink: "0",
            borderRadius: "4px",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--neutral-gray-30, #bfbfbf)",
            background: "var(--neutral-gray-5, #f8f6f6)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Tag`}</span>
      </div>
    </>
  )
}
