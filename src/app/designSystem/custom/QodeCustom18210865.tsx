// id="182:10865"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom18210865Props {}

export const QodeCustom18210865: React.FC<
  QodeCustom18210865Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=filled, status=default, size=small" id="182:10865" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "240px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "10px var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-base, 8px)",
            border:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--background-bg-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon left" id="182:10866" type="INSTANCE" */}
        <Icon.QodeUser
          style={{
            ...{ width: "16px", height: "16px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
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
        >{`PRE`}</span>
        <span
          style={{
            ...{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "1",
              flex: "1 0 0",
              overflow: "hidden",
              color: "var(--text-text-neutral-50, #1d1d1d)",
              textOverflow: "ellipsis",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Input`}</span>
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
        >{`SUF`}</span>
        {/* name="🎰 icon right" id="182:10870" type="INSTANCE" */}
        <Icon.QodeUser
          style={{
            ...{
              display: "flex",
              width: "16px",
              height: "16px",
              padding: "1.6px 2.4px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
