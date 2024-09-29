// id="340:19238"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg34019239 from "@designSystem/icon/svg/QodeSvg34019239"

export interface QodeCustom34019238Props {}

export const QodeCustom34019238: React.FC<
  QodeCustom34019238Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="arrow-down" id="340:19238" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.6px 4.797px 3.601px 4.797px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="340:19239" type="VECTOR" */}
        <QodeSvg34019239
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
