// id="1371:38439"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg137138440 from "@designSystem/icon/svg/QodeSvg137138440"

export interface QodeCustom137138439Props {}

export const QodeCustom137138439: React.FC<
  QodeCustom137138439Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="icons" id="1371:38439" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2px 1.998px 2px 2px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1371:38440" type="VECTOR" */}
        <QodeSvg137138440
          style={{
            ...{
              width: "20.002px",
              height: "20px",
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
