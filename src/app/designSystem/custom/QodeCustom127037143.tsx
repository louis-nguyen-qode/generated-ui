// id="1270:37143"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg127037144 from "@designSystem/icon/svg/QodeSvg127037144"

export interface QodeCustom127037143Props {}

export const QodeCustom127037143: React.FC<
  QodeCustom127037143Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="phone-hangup" id="1270:37143" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "6px 0.284px 7.365px 0.284px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1270:37144" type="VECTOR" */}
        <QodeSvg127037144
          style={{
            ...{
              width: "23.431px",
              height: "10.635px",
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
