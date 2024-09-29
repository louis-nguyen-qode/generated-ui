// id="16:5966"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg165967 from "@designSystem/icon/svg/QodeSvg165967"

export interface QodeCustom165966Props {}

export const QodeCustom165966: React.FC<
  QodeCustom165966Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="pencil" id="16:5966" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.398px 2.424px 2.421px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="16:5967" type="VECTOR" */}
        <QodeSvg165967
          style={{
            ...{
              width: "19.175px",
              height: "19.181px",
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
