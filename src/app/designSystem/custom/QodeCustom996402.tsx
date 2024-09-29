// id="99:6402"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg996403 from "@designSystem/icon/svg/QodeSvg996403"

export interface QodeCustom996402Props {}

export const QodeCustom996402: React.FC<
  QodeCustom996402Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="list-ol" id="99:6402" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.6px 2.4px 3.6px 2.697px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="99:6403" type="VECTOR" */}
        <QodeSvg996403
          style={{
            ...{
              width: "18.903px",
              height: "16.8px",
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
