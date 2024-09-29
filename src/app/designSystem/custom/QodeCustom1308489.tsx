// id="130:8489"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1308490 from "@designSystem/icon/svg/QodeSvg1308490"

export interface QodeCustom1308489Props {}

export const QodeCustom1308489: React.FC<
  QodeCustom1308489Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="circle-check" id="130:8489" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="130:8490" type="VECTOR" */}
        <QodeSvg1308490
          style={{
            ...{
              width: "19.2px",
              height: "19.2px",
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
