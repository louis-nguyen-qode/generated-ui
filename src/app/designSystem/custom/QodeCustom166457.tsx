// id="16:6457"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg166458 from "@designSystem/icon/svg/QodeSvg166458"

export interface QodeCustom166457Props {}

export const QodeCustom166457: React.FC<
  QodeCustom166457Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="chevron-down" id="16:6457" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "8.397px 3.597px 6.001px 3.597px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="16:6458" type="VECTOR" */}
        <QodeSvg166458
          style={{
            ...{
              width: "16.806px",
              height: "9.602px",
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
