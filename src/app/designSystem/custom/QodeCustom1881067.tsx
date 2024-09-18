// id="188:1067"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1881067Props {}

export const QodeCustom1881067: React.FC<
  QodeCustom1881067Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, size=large, style=solid, position=center" id="188:1067" type="COMPONENT" */}
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
            borderTop:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
            borderRight:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
            borderBottom:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
            background: "var(--text-text-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="icons" id="2889:1814" type="INSTANCE" */}
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
              color: "var(--text-text-neutral-40, #464646)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-large, 16px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px /* 150% */",
            },
            ...{},
          }}
        >{`Radio`}</span>
        {/* name="icons" id="2889:2473" type="INSTANCE" */}
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
