// id="391:33721"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom39133721Props {}

export const QodeCustom39133721: React.FC<
  QodeCustom39133721Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Type=Text, Show Thumbnail=False" id="391:33721" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "228px",
            height: "48px",
            padding: "12px 16px",
            alignItems: "center",
            gap: "var(--size-size-sizexxs-6px, 6px)",
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flex: "1 0 0",
              alignSelf: "stretch",
              overflow: "hidden",
              color: "var(--text-text-neutral-50, #1d1d1d)",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Text content`}</span>
      </div>
    </>
  )
}
