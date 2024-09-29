// id="1278:37317"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg127837318 from "@designSystem/icon/svg/QodeSvg127837318"

export interface QodeCustom127837317Props {}

export const QodeCustom127837317: React.FC<
  QodeCustom127837317Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="up-to-line" id="1278:37317" type="COMPONENT" */}
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
        {/* name="Vector" id="1278:37318" type="VECTOR" */}
        <QodeSvg127837318
          style={{
            ...{
              width: "14.4px",
              height: "16.8px",
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
