// id="219:23501"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg21923844 from "@designSystem/icon/svg/QodeSvg21923844"

export interface QodeCustom21923501Props {}

export const QodeCustom21923501: React.FC<
  QodeCustom21923501Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=Tech stack" id="219:23501" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "224.8px",
            height: "148px",
            padding: "16px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            flexShrink: "0",
          },
          ...style,
        }}
      >
        {/* name="Header" id="219:23502" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              alignSelf: "stretch",
            },
            ...{},
          }}
        >
          {/* name="Icon/Techstack" id="219:23844" type="FRAME" */}
          <QodeSvg21923844
            style={{
              ...{
                width: "24px",
                height: "24px",
                fill: "var(--neutral-gray-90, #464646)",
              },
              ...{},
            }}
            {...{}}
          />
          <span
            style={{
              ...{
                flex: "1 0 0",
                color: "var(--text-text-neutral-50, #1d1d1d)",
                fontFamily: 'var(--family-family, "sf pro display")',
                fontSize: "var(--size-base, 14px)",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight:
                  "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
              },
              ...{},
            }}
          >{`Tech stack`}</span>
        </div>
        <span
          style={{
            ...{
              alignSelf: "stretch",
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: '"SF Pro Display"',
              fontSize: "var(--font-size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "var(--line-height-lineheight, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Back-end: Java, PHP, Python, Go and other langauges.`}</span>
      </div>
    </>
  )
}
