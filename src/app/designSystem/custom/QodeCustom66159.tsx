// id="6:6159"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg66160 from "@designSystem/icon/svg/QodeSvg66160"

export interface QodeCustom66159Props {}

export const QodeCustom66159: React.FC<
  QodeCustom66159Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="ellipsis" id="6:6159" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "0px 3.9px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="6:6160" type="VECTOR" */}
        <QodeSvg66160
          style={{
            ...{
              width: "16.2px",
              height: "4.2px",
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
