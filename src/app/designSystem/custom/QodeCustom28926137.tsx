// id="289:26137"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg28926138 from "@designSystem/icon/svg/QodeSvg28926138"

export interface QodeCustom28926137Props {}

export const QodeCustom28926137: React.FC<
  QodeCustom28926137Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="ellipsis-vertical" id="289:26137" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.9px 0px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="289:26138" type="VECTOR" */}
        <QodeSvg28926138
          style={{
            ...{
              width: "4.2px",
              height: "16.2px",
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
