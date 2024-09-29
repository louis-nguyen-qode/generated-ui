// id="30:6005"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg306006 from "@designSystem/icon/svg/QodeSvg306006"

export interface QodeCustom306005Props {}

export const QodeCustom306005: React.FC<
  QodeCustom306005Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="star" id="30:6005" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 2.092px 2.398px 2.105px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="30:6006" type="VECTOR" */}
        <QodeSvg306006
          style={{
            ...{
              width: "19.802px",
              height: "19.202px",
              flexShrink: "0",
              fill: "var(--neutral-gray-90, #464646)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
