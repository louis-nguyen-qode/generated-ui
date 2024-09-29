// id="6:6174"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg66175 from "@designSystem/icon/svg/QodeSvg66175"

export interface QodeCustom66174Props {}

export const QodeCustom66174: React.FC<
  QodeCustom66174Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="chevron-down" id="6:6174" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "8.397px 3.597px 6.001px 3.597px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="6:6175" type="VECTOR" */}
        <QodeSvg66175
          style={{
            ...{
              width: "16.806px",
              height: "9.602px",
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
