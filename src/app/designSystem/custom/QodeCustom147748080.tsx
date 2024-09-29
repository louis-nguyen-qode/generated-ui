// id="1477:48080"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom147748080Props {}

export const QodeCustom147748080: React.FC<
  QodeCustom147748080Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=done, device=mobile" id="1477:48080" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "100px",
            height: "49px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
          },
          ...style,
        }}
      >
        {/* name="Progress" id="1477:48081" type="RECTANGLE" */}
        <Flex
          style={{
            ...{
              height: "5px",
              flexShrink: "0",
              alignSelf: "stretch",
              borderRadius: "var(--border-radius-rounded, 999px)",
              background: "var(--blue-techblue-50, #1597f4)",
            },
            ...{},
          }}
        >
          <></>
        </Flex>
        {/* name="Title" id="1477:48082" type="FRAME" */}
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
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
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