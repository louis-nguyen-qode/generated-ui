// id="16:6463"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg166464 from "@designSystem/icon/svg/QodeSvg166464"

export interface QodeCustom166463Props {}

export const QodeCustom166463: React.FC<
  QodeCustom166463Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="xmark" id="16:6463" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "5.997px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="16:6464" type="VECTOR" */}
        <QodeSvg166464
          style={{
            ...{
              width: "12.006px",
              height: "12.006px",
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
