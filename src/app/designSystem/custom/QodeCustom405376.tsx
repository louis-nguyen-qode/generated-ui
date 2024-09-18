// id="40:5376"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg21923526 from "@designSystem/icon/svg/QodeSvg21923526"

export interface QodeCustom405376Props {}

export const QodeCustom405376: React.FC<
  QodeCustom405376Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=Expertise" id="40:5376" type="COMPONENT" */}
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
        {/* name="Header" id="40:7494" type="FRAME" */}
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
          {/* name="Icon/Expertise" id="219:23526" type="FRAME" */}
          <QodeSvg21923526
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
          >{`Expertise`}</span>
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
        >{`Proven expertise with many certificates & awards including Employee of the year.`}</span>
      </div>
    </>
  )
}
