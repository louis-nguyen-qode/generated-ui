// id="1252:37195"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg125237196 from "@designSystem/icon/svg/QodeSvg125237196"

export interface QodeCustom125237195Props {}

export const QodeCustom125237195: React.FC<
  QodeCustom125237195Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="linkedin" id="1252:37195" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1252:37196" type="VECTOR" */}
        <QodeSvg125237196
          style={{
            ...{
              width: "20px",
              height: "20px",
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
