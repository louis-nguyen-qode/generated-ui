// id="188:1049"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1881049Props {}

export const QodeCustom1881049: React.FC<
  QodeCustom1881049Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="state=default, size=large, style=outlined, position=center" id="188:1049" type="COMPONENT" */}
      <div
        style={{
          display: "inline-flex",
          height: "var(--size-height-controlheightlg, 40px)",
          padding:
            "var(--size-padding-paddingxs, 8px) var(--size-padding-padding, 16px)",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--size-margin-marginxs, 8px)",
          flexShrink: "0",
          borderTop:
            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
          borderRight:
            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
          borderBottom:
            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
          background: "var(--text-text-white, #fff)",
        }}
      >
        {/* name="icons" id="2889:1805" type="INSTANCE" */}
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
            fontSize: "var(--size-large, 16px)",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px /* 150% */",
          }}
        >{`Radio`}</span>
        {/* name="icons" id="2889:2464" type="INSTANCE" */}
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
