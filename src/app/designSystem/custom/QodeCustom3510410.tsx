// id="35:10410"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg3510411 from "@designSystem/icon/svg/QodeSvg3510411"

export interface QodeCustom3510410Props {}

export const QodeCustom3510410: React.FC<
  QodeCustom3510410Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="check-circle" id="35:10410" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "1.5px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="35:10411" type="VECTOR" */}
        <QodeSvg3510411
          style={{
            ...{
              width: "21px",
              height: "21px",
              flexShrink: "0",
              fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
