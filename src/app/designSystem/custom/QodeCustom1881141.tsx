// id="188:1141"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1881141Props {}

export const QodeCustom1881141: React.FC<
  QodeCustom1881141Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=active, size=large, style=solid, position=first" id="188:1141" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "var(--size-height-controlheightlg, 40px)",
            padding:
              "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
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
        {/* name="icons" id="2889:1851" type="INSTANCE" */}
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
              fontFamily: '"SF Pro Display"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "24px /* 150% */",
            },
            ...{},
          }}
        >{`Radio`}</span>
        {/* name="icons" id="2889:2510" type="INSTANCE" */}
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
