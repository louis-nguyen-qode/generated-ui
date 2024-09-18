// id="114:36670"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg11436671 from "@designSystem/icon/svg/QodeSvg11436671"

export interface QodeCustom11436670Props {}

export const QodeCustom11436670: React.FC<
  QodeCustom11436670Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="CheckCircle" id="114:36670" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="114:36671" type="VECTOR" */}
        <QodeSvg11436671
          style={{
            width: "24px",
            height: "24px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
