// id="188:1135"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1881135Props {}

export const QodeCustom1881135: React.FC<
  QodeCustom1881135Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=active, size=default, style=solid, position=first" id="188:1135" type="COMPONENT" */}
      <div
        style={{
          display: "inline-flex",
          height: "var(--size-height-controlheight, 32px)",
          padding: "0px var(--size-padding-padding, 16px)",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--size-margin-marginxs, 8px)",
          flexShrink: "0",
          borderRadius:
            "var(--style-radius-borderround, 999px) 0px 0px var(--style-radius-borderround, 999px)",
          background: "var(--background-bg-primary, #1597f4)",
        }}
      >
        {/* name="icons" id="2889:1848" type="INSTANCE" */}
        <Icon.QodeIcons
          style={{
            display: "flex",
            width: "16px",
            height: "16px",
            padding: "1.599px 1.599px 1.599px 1.6px",
            justifyContent: "center",
            alignItems: "center",
          }}
          {...{}}
        />
        <span
          style={{
            color: "var(--text-text-white, #fff)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-base, 14px)",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight:
              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
          }}
        >{`Radio`}</span>
        {/* name="icons" id="2889:2507" type="INSTANCE" */}
        <Icon.QodeIcons
          style={{
            display: "flex",
            width: "16px",
            height: "16px",
            padding: "1.599px 1.599px 1.599px 1.6px",
            justifyContent: "center",
            alignItems: "center",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
