// id="6:6712"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg66713 from "@designSystem/icon/svg/QodeSvg66713"

export interface QodeCustom66712Props {}

export const QodeCustom66712: React.FC<
  QodeCustom66712Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="check" id="6:6712" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "6.001px 3.601px 5.997px 3.597px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="6:6713" type="VECTOR" */}
        <QodeSvg66713
          style={{
            ...{
              width: "16.802px",
              height: "12.002px",
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
