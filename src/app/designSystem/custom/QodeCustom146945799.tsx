// id="1469:45799"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom146945799Props {}

export const QodeCustom146945799: React.FC<
  QodeCustom146945799Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=waiting, device=Default" id="1469:45799" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "181.333px",
            height: "51px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
          },
          ...style,
        }}
      >
        {/* name="Progress" id="1469:45795" type="RECTANGLE" */}
        <Flex
          style={{
            ...{
              height: "5px",
              flexShrink: "0",
              alignSelf: "stretch",
              borderRadius: "var(--border-radius-rounded, 999px)",
              background: "var(--neutral-gray-20, #d5d5d5)",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
        {/* name="Title" id="1469:45796" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          <span
            style={{
              ...{
                color: "var(--text-text-neutral-50, #1d1d1d)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-heading6, 16px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight:
                  "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
              },
              ...{},
            }}
          >{`Sign in `}</span>
          <span
            style={{
              ...{
                color: "var(--text-text-neutral-20, #878787)",
                textAlign: "center",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-small, 12px)",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight:
                  "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
              },
              ...{},
            }}
          >{`1 min`}</span>
        </div>
      </div>
    </>
  )
}
