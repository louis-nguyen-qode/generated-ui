// id="6:6096"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg66097 from "@designSystem/icon/svg/QodeSvg66097"

export interface QodeCustom66096Props {}

export const QodeCustom66096: React.FC<
  QodeCustom66096Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="chevron-right" id="6:6096" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.597px 6.001px 3.597px 8.397px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="6:6097" type="VECTOR" */}
        <QodeSvg66097
          style={{
            ...{
              width: "9.602px",
              height: "16.806px",
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
