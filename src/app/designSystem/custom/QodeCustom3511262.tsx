// id="35:11262"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg3511263 from "@designSystem/icon/svg/QodeSvg3511263"

export interface QodeCustom3511262Props {}

export const QodeCustom3511262: React.FC<
  QodeCustom3511262Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Right" id="35:11262" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "1.849px 4.875px 1.847px 6.375px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="35:11263" type="VECTOR" */}
        <QodeSvg3511263
          style={{
            ...{
              width: "12.75px",
              height: "20.304px",
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
