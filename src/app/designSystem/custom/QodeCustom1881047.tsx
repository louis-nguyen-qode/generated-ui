// id="188:1047"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1881047Props {}

export const QodeCustom1881047: React.FC<
  QodeCustom1881047Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=default, size=default, style=outlined, position=last" id="188:1047" type="COMPONENT" */}
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
            "0px var(--style-radius-borderround, 999px) var(--style-radius-borderround, 999px) 0px",
          borderTop:
            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
          borderRight:
            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
          borderBottom:
            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
          background: "var(--text-text-white, #fff)",
        }}
      >
        {/* name="icons" id="2889:1804" type="INSTANCE" */}
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
            color: "var(--text-text-neutral-40, #464646)",
            fontFamily: 'var(--family-family, "sf pro display")',
            fontSize: "var(--size-base, 14px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight:
              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
          }}
        >{`Radio`}</span>
        {/* name="icons" id="2889:2463" type="INSTANCE" */}
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
