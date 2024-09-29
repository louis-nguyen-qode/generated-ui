// id="99:6396"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg996397 from "@designSystem/icon/svg/QodeSvg996397"

export interface QodeCustom996396Props {}

export const QodeCustom996396: React.FC<
  QodeCustom996396Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="italic" id="99:6396" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.6px 4.8px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="99:6397" type="VECTOR" */}
        <QodeSvg996397
          style={{
            ...{
              width: "14.4px",
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
