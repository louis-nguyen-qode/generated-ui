// id="219:23838"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg21923839 from "@designSystem/icon/svg/QodeSvg21923839"

export interface QodeCustom21923838Props {}

export const QodeCustom21923838: React.FC<
  QodeCustom21923838Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="users" id="219:23838" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 0px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="219:23839" type="VECTOR" */}
        <QodeSvg21923839
          style={{
            ...{
              width: "24px",
              height: "19.2px",
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
