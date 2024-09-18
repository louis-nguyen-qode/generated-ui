// id="188:1077"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1881077Props {}

export const QodeCustom1881077: React.FC<
  QodeCustom1881077Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=default, size=small, style=solid, position=last" id="188:1077" type="COMPONENT" */}
      <div
        style={{
          display: "inline-flex",
          height: "var(--size-height-controlheightsm, 24px)",
          padding: "0px var(--size-padding-paddingxs, 8px)",
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
        {/* name="icons" id="2889:1819" type="INSTANCE" */}
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
        {/* name="icons" id="2889:2478" type="INSTANCE" */}
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
