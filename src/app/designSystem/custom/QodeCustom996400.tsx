// id="99:6400"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg996401 from "@designSystem/icon/svg/QodeSvg996401"

export interface QodeCustom996400Props {}

export const QodeCustom996400: React.FC<
  QodeCustom996400Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="list-ul" id="99:6400" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "4.2px 2.4px 4.2px 3px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="99:6401" type="VECTOR" */}
        <QodeSvg996401
          style={{
            ...{
              width: "18.6px",
              height: "15.6px",
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
