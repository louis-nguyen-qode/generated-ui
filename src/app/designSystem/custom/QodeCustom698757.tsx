// id="69:8757"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg698758 from "@designSystem/icon/svg/QodeSvg698758"

export interface QodeCustom698757Props {}

export const QodeCustom698757: React.FC<
  QodeCustom698757Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="location-dot" id="69:8757" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 4.8px 2.45px 4.8px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="69:8758" type="VECTOR" */}
        <QodeSvg698758
          style={{
            ...{
              width: "14.4px",
              height: "19.15px",
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
