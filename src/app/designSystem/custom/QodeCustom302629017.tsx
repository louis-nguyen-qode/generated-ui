// id="3026:29017"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg302629018 from "@designSystem/icon/svg/QodeSvg302629018"

export interface QodeCustom302629017Props {}

export const QodeCustom302629017: React.FC<
  QodeCustom302629017Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="Circle" id="3026:29017" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "8px",
          height: "8px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Circle" id="3026:29018" type="VECTOR" */}
        <QodeSvg302629018
          style={{
            width: "8px",
            height: "8px",
            flexShrink: "0",
            fill: "var(--brands-white, #fff)",
            strokeWidth: "3px",
            stroke: "var(--brands-gray-900, #18181b)",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
