// id="182:9277"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom1829277Props {}

export const QodeCustom1829277: React.FC<
  QodeCustom1829277Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="tab=pre, size=small" id="182:9277" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "0px var(--size-padding-paddingxs, 8px)",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "5px 0px 0px 5px",
            borderRight:
              "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
            background:
              "var(--color-neutral-fill-colorfillquaternary, rgba(0, 0, 0, 0.02))",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              color: "var(--color-neutral-text-colortext, #000)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`http://`}</span>
        {/* name="Select" id="182:9279" type="INSTANCE" */}
        <Icon.QodeChevronDown
          style={{
            ...{
              display: "flex",
              width: "12px",
              height: "12px",
              padding: "4.199px 1.799px 3px 1.799px",
              justifyContent: "center",
              alignItems: "center",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="Icon" id="182:9280" type="INSTANCE" */}
        <Icon.QodeGear
          style={{
            ...{
              display: "flex",
              width: "16px",
              height: "16px",
              padding: "1.6px 1.969px 1.603px 1.967px",
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
