// id="35:11304"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg3511305 from "@designSystem/icon/svg/QodeSvg3511305"

export interface QodeCustom3511304Props {}

export const QodeCustom3511304: React.FC<
  QodeCustom3511304Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="DoubleLeft" id="35:11304" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.571px 3.106px 2.572px 3.107px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="35:11305" type="VECTOR" */}
        <QodeSvg3511305
          style={{
            ...{
              width: "17.787px",
              height: "18.857px",
              flexShrink: "0",
              fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
