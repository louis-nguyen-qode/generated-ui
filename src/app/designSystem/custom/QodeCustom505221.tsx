// id="50:5221"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg505222 from "@designSystem/icon/svg/QodeSvg505222"

export interface QodeCustom505221Props {}

export const QodeCustom505221: React.FC<
  QodeCustom505221Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="filter" id="50:5221" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.6px 2.402px 3.601px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="50:5222" type="VECTOR" */}
        <QodeSvg505222
          style={{
            ...{
              width: "19.198px",
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
