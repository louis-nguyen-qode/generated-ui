// id="6:3290"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg63291 from "@designSystem/icon/svg/QodeSvg63291"

export interface QodeCustom63290Props {}

export const QodeCustom63290: React.FC<
  QodeCustom63290Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="magnifying-glass" id="6:3290" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 2.401px 2.397px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="6:3291" type="VECTOR" */}
        <QodeSvg63291
          style={{
            ...{
              width: "19.199px",
              height: "19.203px",
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
