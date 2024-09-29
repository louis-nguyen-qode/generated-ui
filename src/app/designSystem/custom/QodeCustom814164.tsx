// id="81:4164"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg814165 from "@designSystem/icon/svg/QodeSvg814165"

export interface QodeCustom814164Props {}

export const QodeCustom814164: React.FC<
  QodeCustom814164Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="image" id="81:4164" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.6px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="81:4165" type="VECTOR" */}
        <QodeSvg814165
          style={{
            ...{
              width: "19.2px",
              height: "16.8px",
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
