// id="3026:28964"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg302628965 from "@designSystem/icon/svg/QodeSvg302628965"

export interface QodeCustom302628964Props {}

export const QodeCustom302628964: React.FC<
  QodeCustom302628964Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="BsPlus" id="3026:28964" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "6px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="vector" id="3026:28965" type="VECTOR" */}
        <QodeSvg302628965
          style={{
            ...{
              width: "12px",
              height: "12px",
              flexShrink: "0",
              fill: "var(--brands-gray-900, #232323)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
