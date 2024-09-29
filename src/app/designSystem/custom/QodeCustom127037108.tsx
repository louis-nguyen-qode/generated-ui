// id="1270:37108"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg127037109 from "@designSystem/icon/svg/QodeSvg127037109"

export interface QodeCustom127037108Props {}

export const QodeCustom127037108: React.FC<
  QodeCustom127037108Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="microphone-slash" id="1270:37108" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 0px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1270:37109" type="VECTOR" */}
        <QodeSvg127037109
          style={{
            ...{
              width: "24px",
              height: "19.2px",
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
