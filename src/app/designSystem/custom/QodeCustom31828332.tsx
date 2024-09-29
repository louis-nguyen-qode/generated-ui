// id="318:28332"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg31828333 from "@designSystem/icon/svg/QodeSvg31828333"

export interface QodeCustom31828332Props {}

export const QodeCustom31828332: React.FC<
  QodeCustom31828332Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="arrow-up" id="318:28332" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.601px 4.797px 3.6px 4.797px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="318:28333" type="VECTOR" */}
        <QodeSvg31828333
          style={{
            ...{
              width: "14.406px",
              height: "16.799px",
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
