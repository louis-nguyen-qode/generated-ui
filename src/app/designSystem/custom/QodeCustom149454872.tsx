// id="1494:54872"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom149454872Props {}

export const QodeCustom149454872: React.FC<
  QodeCustom149454872Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Time" id="1494:54872" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "50px",
            padding: "2px 8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "var(--border-radius-rounded, 999px)",
            border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
            background: "var(--neutral-white, #fff)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-small, 12px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight:
                "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
            },
            ...{},
          }}
        >{`00:01`}</span>
      </div>
    </>
  )
}
