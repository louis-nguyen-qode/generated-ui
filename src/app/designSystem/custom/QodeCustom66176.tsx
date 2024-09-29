// id="6:6176"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg66177 from "@designSystem/icon/svg/QodeSvg66177"

export interface QodeCustom66176Props {}

export const QodeCustom66176: React.FC<
  QodeCustom66176Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="xmark" id="6:6176" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "5.997px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="6:6177" type="VECTOR" */}
        <QodeSvg66177
          style={{
            ...{
              width: "12.006px",
              height: "12.006px",
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
