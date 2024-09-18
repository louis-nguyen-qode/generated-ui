// id="35:11300"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg3511301 from "@designSystem/icon/svg/QodeSvg3511301"

export interface QodeCustom3511300Props {}

export const QodeCustom3511300: React.FC<
  QodeCustom3511300Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="DoubleRight" id="35:11300" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          padding: "2.571px 3.106px 2.572px 3.107px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="35:11301" type="VECTOR" */}
        <QodeSvg3511301
          style={{
            width: "17.787px",
            height: "18.857px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
