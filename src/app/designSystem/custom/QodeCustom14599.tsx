// id="14:599"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg14600 from "@designSystem/icon/svg/QodeSvg14600"

export interface QodeCustom14599Props {}

export const QodeCustom14599: React.FC<
  QodeCustom14599Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="video" id="14:599" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "4.8px 1.2px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="14:600" type="VECTOR" */}
        <QodeSvg14600
          style={{
            ...{
              width: "21.6px",
              height: "14.4px",
              flexShrink: "0",
              fill: "var(--neutral-gray-90, #464646)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
