// id="140:10094"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg14010095 from "@designSystem/icon/svg/QodeSvg14010095"

export interface QodeCustom14010094Props {}

export const QodeCustom14010094: React.FC<
  QodeCustom14010094Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="calendar-days" id="140:10094" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 3.6px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="140:10095" type="VECTOR" */}
        <QodeSvg14010095
          style={{
            ...{
              width: "16.8px",
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
