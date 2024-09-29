// id="6:6163"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg66164 from "@designSystem/icon/svg/QodeSvg66164"

export interface QodeCustom66163Props {}

export const QodeCustom66163: React.FC<
  QodeCustom66163Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="chevrons-right" id="6:6163" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.597px 3.601px 3.597px 3.597px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="6:6164" type="VECTOR" */}
        <QodeSvg66164
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
