// id="1:93"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg194 from "@designSystem/icon/svg/QodeSvg194"

export interface QodeCustom193Props {}

export const QodeCustom193: React.FC<
  QodeCustom193Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="icons" id="1:93" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.398px 2.398px 2.398px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1:94" type="VECTOR" */}
        <QodeSvg194
          style={{
            ...{
              width: "19.202px",
              height: "19.204px",
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
