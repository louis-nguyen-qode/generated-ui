// id="16:1270"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg161271 from "@designSystem/icon/svg/QodeSvg161271"

export interface QodeCustom161270Props {}

export const QodeCustom161270: React.FC<
  QodeCustom161270Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="user" id="16:1270" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 3.6px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="16:1271" type="VECTOR" */}
        <QodeSvg161271
          style={{
            ...{
              width: "16.8px",
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
