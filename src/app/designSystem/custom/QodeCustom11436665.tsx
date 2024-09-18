// id="114:36665"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg11436666 from "@designSystem/icon/svg/QodeSvg11436666"

export interface QodeCustom11436665Props {}

export const QodeCustom11436665: React.FC<
  QodeCustom11436665Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="Check" id="114:36665" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          padding: "3.375px 1.07px 3.379px 1.072px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="114:36666" type="VECTOR" */}
        <QodeSvg11436666
          style={{
            width: "21.858px",
            height: "17.246px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
