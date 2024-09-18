// id="630:10804"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg63010668 from "@designSystem/icon/svg/QodeSvg63010668"

export interface QodeCustom63010804Props {}

export const QodeCustom63010804: React.FC<
  QodeCustom63010804Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="icons" id="630:10804" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          padding: "2px 1.998px 2px 2px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="630:10668" type="VECTOR" */}
        <QodeSvg63010668
          style={{
            width: "20.002px",
            height: "20px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-colortext, #000)",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
