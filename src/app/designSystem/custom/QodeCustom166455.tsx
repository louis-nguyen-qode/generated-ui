// id="16:6455"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg166456 from "@designSystem/icon/svg/QodeSvg166456"

export interface QodeCustom166455Props {}

export const QodeCustom166455: React.FC<
  QodeCustom166455Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="angle-down" id="16:6455" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "8.397px 4.797px 7.201px 4.797px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="16:6456" type="VECTOR" */}
        <QodeSvg166456
          style={{
            ...{
              width: "14.406px",
              height: "8.402px",
              flexShrink: "0",
              fill: "var(--color-neutral-text-colortext, rgba(0, 0, 0, 0.88))",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
