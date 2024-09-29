// id="81:4181"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg814182 from "@designSystem/icon/svg/QodeSvg814182"

export interface QodeCustom814181Props {}

export const QodeCustom814181: React.FC<
  QodeCustom814181Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="link" id="81:4181" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.182px 0.668px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="81:4182" type="VECTOR" */}
        <QodeSvg814182
          style={{
            ...{
              width: "22.663px",
              height: "17.637px",
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
