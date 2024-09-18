// id="188:1147"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1881147Props {}

export const QodeCustom1881147: React.FC<
  QodeCustom1881147Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=active, size=small, style=solid, position=first" id="188:1147" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "0px var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-margin-marginxs, 8px)",
            flexShrink: "0",
            borderRadius:
              "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
            background: "var(--background-bg-primary, #1597f4)",
          },
          ...style,
        }}
      >
        {/* name="icons" id="2889:1854" type="INSTANCE" */}
        <Icon.QodeIcons
          style={{
            ...{
              display: "flex",
              width: "16px",
              height: "16px",
              padding: "1.599px 1.599px 1.599px 1.6px",
              justifyContent: "center",
              alignItems: "center",
            },
            ...{},
          }}
          {...{}}
        />
        <span
          style={{
            ...{
              color: "var(--text-text-white, #fff)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Radio`}</span>
        {/* name="icons" id="2889:2513" type="INSTANCE" */}
        <Icon.QodeIcons
          style={{
            ...{
              display: "flex",
              width: "16px",
              height: "16px",
              padding: "1.599px 1.599px 1.599px 1.6px",
              justifyContent: "center",
              alignItems: "center",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
