// id="16:5961"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg165962 from "@designSystem/icon/svg/QodeSvg165962"

export interface QodeCustom165961Props {}

export const QodeCustom165961: React.FC<
  QodeCustom165961Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="icons" id="16:5961" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2px 1.998px 2px 2px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="16:5962" type="VECTOR" */}
        <QodeSvg165962
          style={{
            ...{
              width: "20.002px",
              height: "20px",
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
