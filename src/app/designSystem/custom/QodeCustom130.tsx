// id="1:30"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg131 from "@designSystem/icon/svg/QodeSvg131"

export interface QodeCustom130Props {}

export const QodeCustom130: React.FC<
  QodeCustom130Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="briefcase" id="1:30" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 2.4px 3.6px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1:31" type="VECTOR" */}
        <QodeSvg131
          style={{
            ...{
              width: "19.2px",
              height: "18px",
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
