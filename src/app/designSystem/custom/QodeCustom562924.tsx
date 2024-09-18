// id="5629:24"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg562925 from "@designSystem/icon/svg/QodeSvg562925"

export interface QodeCustom562924Props {}

export const QodeCustom562924: React.FC<
  QodeCustom562924Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="user-large" id="5629:24" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="5629:25" type="VECTOR" */}
        <QodeSvg562925
          style={{
            ...{
              width: "19.2px",
              height: "19.2px",
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
