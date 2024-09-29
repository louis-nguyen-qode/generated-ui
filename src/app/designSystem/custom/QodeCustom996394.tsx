// id="99:6394"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg996395 from "@designSystem/icon/svg/QodeSvg996395"

export interface QodeCustom996394Props {}

export const QodeCustom996394: React.FC<
  QodeCustom996394Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="bold" id="99:6394" type="COMPONENT" */}
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
        {/* name="Vector" id="99:6395" type="VECTOR" */}
        <QodeSvg996395
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
