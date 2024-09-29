// id="14:423"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg14424 from "@designSystem/icon/svg/QodeSvg14424"

export interface QodeCustom14423Props {}

export const QodeCustom14423: React.FC<
  QodeCustom14423Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="heart" id="14:423" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.981px 2.4px 3.6px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="14:424" type="VECTOR" */}
        <QodeSvg14424
          style={{
            ...{
              width: "19.2px",
              height: "16.419px",
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
