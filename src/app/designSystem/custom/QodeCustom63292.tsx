// id="6:3292"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg63293 from "@designSystem/icon/svg/QodeSvg63293"

export interface QodeCustom63292Props {}

export const QodeCustom63292: React.FC<
  QodeCustom63292Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="icons" id="6:3292" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.398px 2.398px 2.398px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="6:3293" type="VECTOR" */}
        <QodeSvg63293
          style={{
            ...{
              width: "19.202px",
              height: "19.204px",
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
