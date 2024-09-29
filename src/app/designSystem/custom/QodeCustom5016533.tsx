// id="50:16533"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg5016534 from "@designSystem/icon/svg/QodeSvg5016534"

export interface QodeCustom5016533Props {}

export const QodeCustom5016533: React.FC<
  QodeCustom5016533Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="eye" id="50:16533" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.6px 1.197px 3.6px 1.201px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="50:16534" type="VECTOR" */}
        <QodeSvg5016534
          style={{
            ...{
              width: "21.602px",
              height: "16.8px",
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
