// id="1:69"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg170 from "@designSystem/icon/svg/QodeSvg170"

export interface QodeCustom169Props {}

export const QodeCustom169: React.FC<
  QodeCustom169Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="video" id="1:69" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "4.8px 1.2px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1:70" type="VECTOR" */}
        <QodeSvg170
          style={{
            ...{
              width: "21.6px",
              height: "14.4px",
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
