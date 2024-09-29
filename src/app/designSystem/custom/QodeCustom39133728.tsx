// id="391:33728"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom39133728Props {}

export const QodeCustom39133728: React.FC<
  QodeCustom39133728Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Type=Number, Show Thumbnail=False" id="391:33728" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "228px",
            height: "48px",
            padding: "12px 16px",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "4px",
            flexShrink: "0",
            borderBottom: "1px solid var(--border-border-neutral-20, #e3e3e3)",
            background: "var(--background-bg-white, #fff)",
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
              fontWeight: "500",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`012345`}</span>
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-20, #878787)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`₫`}</span>
      </div>
    </>
  )
}
