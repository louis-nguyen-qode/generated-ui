// id="6:6161"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg66162 from "@designSystem/icon/svg/QodeSvg66162"

export interface QodeCustom66161Props {}

export const QodeCustom66161: React.FC<
  QodeCustom66161Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="chevrons-left" id="6:6161" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.597px 3.597px 3.597px 3.601px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="6:6162" type="VECTOR" */}
        <QodeSvg66162
          style={{
            ...{
              width: "16.802px",
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
