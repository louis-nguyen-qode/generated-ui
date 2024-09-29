// id="148:9851"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1489851Props {}

export const QodeCustom1489851: React.FC<
  QodeCustom1489851Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="State=View" id="148:9851" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "596px",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "16px",
          },
          ...style,
        }}
      >
        {/* name="Frame 37328" id="148:9860" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "20px",
              height: "20px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexShrink: "0",
              borderRadius: "4px",
              background: "var(--neutral-gray-10, #e3e3e3)",
            },
            ...{},
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
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              },
              ...{},
            }}
          >{`1`}</span>
        </div>
        <span
          style={{
            ...{
              flex: "1 0 0",
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
        >{`Introduce yourself and summarize your background, focusing on your skills and relevant experience?`}</span>
      </div>
    </>
  )
}
