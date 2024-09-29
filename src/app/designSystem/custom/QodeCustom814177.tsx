// id="81:4177"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg814178 from "@designSystem/icon/svg/QodeSvg814178"

export interface QodeCustom814177Props {}

export const QodeCustom814177: React.FC<
  QodeCustom814177Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="face-smile" id="81:4177" type="COMPONENT" */}
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
        {/* name="Vector" id="81:4178" type="VECTOR" */}
        <QodeSvg814178
          style={{
            ...{
              width: "19.2px",
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
