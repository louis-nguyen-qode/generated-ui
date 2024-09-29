// id="4:743"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg4744 from "@designSystem/icon/svg/QodeSvg4744"

export interface QodeCustom4743Props {}

export const QodeCustom4743: React.FC<
  QodeCustom4743Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="arrow-up-right" id="4:743" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "6px 6px 5.997px 6.001px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="4:744" type="VECTOR" */}
        <QodeSvg4744
          style={{
            ...{
              width: "11.999px",
              height: "12.003px",
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
