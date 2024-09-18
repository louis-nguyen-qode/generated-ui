// id="3026:29015"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg302629016 from "@designSystem/icon/svg/QodeSvg302629016"

export interface QodeCustom302629015Props {}

export const QodeCustom302629015: React.FC<
  QodeCustom302629015Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="Arrow" id="3026:29015" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "8px",
          height: "8px",
          paddingRight: "4px",
          alignItems: "center",
        }}
      >
        {/* name="Arrow" id="3026:29016" type="VECTOR" */}
        <QodeSvg302629016
          style={{
            width: "7px",
            height: "8px",
            flexShrink: "0",
            fill: "var(--brands-gray-900, #18181b)",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
