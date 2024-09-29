// id="1956:50283"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg195650284 from "@designSystem/icon/svg/QodeSvg195650284"

export interface QodeCustom195650283Props {}

export const QodeCustom195650283: React.FC<
  QodeCustom195650283Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="warning" id="1956:50283" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.813px 1.499px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1956:50284" type="VECTOR" */}
        <QodeSvg195650284
          style={{
            ...{
              width: "21.001px",
              height: "18.375px",
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
