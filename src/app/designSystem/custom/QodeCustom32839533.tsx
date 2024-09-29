// id="328:39533"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg32839534 from "@designSystem/icon/svg/QodeSvg32839534"

export interface QodeCustom32839533Props {}

export const QodeCustom32839533: React.FC<
  QodeCustom32839533Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="briefcase" id="328:39533" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 2.4px 3.6px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="328:39534" type="VECTOR" */}
        <QodeSvg32839534
          style={{
            ...{
              width: "19.2px",
              height: "18px",
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
