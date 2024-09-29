// id="43:8719"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom438719Props {}

export const QodeCustom438719: React.FC<
  QodeCustom438719Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="State=Default" id="43:8719" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "40px",
            padding: "8px 20px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-base, 8px)",
            border: "2px solid var(--border-border-primary-20, #158de2)",
            background: "var(--neutral-white, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              textAlign: "right",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Shortlisted`}</span>
        {/* name="counter" id="40:10775" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              padding: "0px 12px",
              alignItems: "center",
              gap: "10px",
              borderRadius: "99px",
              background: "var(--blue-techblue-60, #158de2)",
            },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                color: "var(--text-text-white, #fff)",
                textAlign: "right",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              },
              ...{},
            }}
          >{`12`}</span>
        </div>
      </div>
    </>
  )
}
