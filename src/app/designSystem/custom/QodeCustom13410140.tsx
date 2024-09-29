// id="134:10140"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg13410141 from "@designSystem/icon/svg/QodeSvg13410141"

export interface QodeCustom13410140Props {}

export const QodeCustom13410140: React.FC<
  QodeCustom13410140Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="list-tree" id="134:10140" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "4.2px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="134:10141" type="VECTOR" */}
        <QodeSvg13410141
          style={{
            ...{
              width: "19.2px",
              height: "15.6px",
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
