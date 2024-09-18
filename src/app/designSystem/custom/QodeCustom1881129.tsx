// id="188:1129"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1881129Props {}

export const QodeCustom1881129: React.FC<
  QodeCustom1881129Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=active, size=small, style=outlined, position=first" id="188:1129" type="COMPONENT" */}
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
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
            background: "var(--text-text-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="icons" id="2889:1845" type="INSTANCE" */}
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
              color: "var(--text-text-primary-20, #1597f4)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Radio`}</span>
        {/* name="icons" id="2889:2504" type="INSTANCE" */}
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
