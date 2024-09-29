// id="307:18968"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg30718969 from "@designSystem/icon/svg/QodeSvg30718969"

export interface QodeCustom30718968Props {}

export const QodeCustom30718968: React.FC<
  QodeCustom30718968Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="link-simple" id="307:18968" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "6px 1.2px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="307:18969" type="VECTOR" */}
        <QodeSvg30718969
          style={{
            ...{
              width: "21.6px",
              height: "12px",
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
