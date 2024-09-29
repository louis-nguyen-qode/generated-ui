// id="50:16497"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg5016498 from "@designSystem/icon/svg/QodeSvg5016498"

export interface QodeCustom5016497Props {}

export const QodeCustom5016497: React.FC<
  QodeCustom5016497Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="envelope" id="50:16497" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "4.8px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="50:16498" type="VECTOR" */}
        <QodeSvg5016498
          style={{
            ...{
              width: "19.2px",
              height: "14.4px",
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
