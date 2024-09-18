// id="630:8711"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg6307564 from "@designSystem/icon/svg/QodeSvg6307564"

export interface QodeCustom6308711Props {}

export const QodeCustom6308711: React.FC<
  QodeCustom6308711Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="chevron-right" id="630:8711" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "1.496px 5.997px 1.496px 6px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="630:7564" type="VECTOR" */}
        <QodeSvg6307564
          style={{
            ...{
              width: "12.002px",
              height: "21.007px",
              flexShrink: "0",
              fill: "var(--color-neutral-text-colortext, #000)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
