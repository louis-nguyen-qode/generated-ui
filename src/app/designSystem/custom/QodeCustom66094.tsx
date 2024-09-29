// id="6:6094"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg66095 from "@designSystem/icon/svg/QodeSvg66095"

export interface QodeCustom66094Props {}

export const QodeCustom66094: React.FC<
  QodeCustom66094Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="chevron-left" id="6:6094" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.597px 8.397px 3.597px 6.001px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="6:6095" type="VECTOR" */}
        <QodeSvg66095
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
