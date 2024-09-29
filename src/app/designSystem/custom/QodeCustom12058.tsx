// id="1:2058"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg12059 from "@designSystem/icon/svg/QodeSvg12059"

export interface QodeCustom12058Props {}

export const QodeCustom12058: React.FC<
  QodeCustom12058Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="linkedin" id="1:2058" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.6px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1:2059" type="VECTOR" */}
        <QodeSvg12059
          style={{
            ...{
              width: "16.8px",
              height: "16.8px",
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
