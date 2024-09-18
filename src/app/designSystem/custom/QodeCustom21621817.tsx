// id="216:21817"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg21923826 from "@designSystem/icon/svg/QodeSvg21923826"

export interface QodeCustom21621817Props {}

export const QodeCustom21621817: React.FC<
  QodeCustom21621817Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=Industry experience" id="216:21817" type="COMPONENT" */}
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
        {/* name="Header" id="216:21818" type="FRAME" */}
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
          {/* name="Icon/Industry experience" id="219:23826" type="FRAME" */}
          <QodeSvg21923826
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
          >{`Industry Experience`}</span>
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
        >{`Over 5 years of experience in Banking domain and other CRM applications.`}</span>
      </div>
    </>
  )
}
