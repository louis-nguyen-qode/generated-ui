// id="20:3428"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg203429 from "@designSystem/icon/svg/QodeSvg203429"

export interface QodeCustom203428Props {}

export const QodeCustom203428: React.FC<
  QodeCustom203428Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Check" id="20:3428" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.375px 1.07px 3.379px 1.072px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="20:3429" type="VECTOR" */}
        <QodeSvg203429
          style={{
            ...{
              width: "21.858px",
              height: "17.246px",
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
