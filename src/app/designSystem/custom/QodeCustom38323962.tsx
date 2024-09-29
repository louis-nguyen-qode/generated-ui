// id="383:23962"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom161270 } from "@designSystem/custom/QodeCustom161270"

export interface QodeCustom38323962Props {}

export const QodeCustom38323962: React.FC<
  QodeCustom38323962Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="state=default, status=default, size=default" id="383:23962" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "240px",
            height: "var(--size-height-controlheight, 32px)",
            padding: "10px 12px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            flexShrink: "0",
            borderRadius: "var(--border-radius-base, 8px)",
            border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--background-bg-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon left" id="383:24016" type="INSTANCE" */}
        <QodeCustom161270
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
              color: "var(--text-text-placeholder, #a7a7a7)",
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
        {/* name="🎰 icon right" id="383:24020" type="INSTANCE" */}
        <QodeCustom161270
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
