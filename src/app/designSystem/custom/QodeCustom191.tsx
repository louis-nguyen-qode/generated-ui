// id="1:91"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg192 from "@designSystem/icon/svg/QodeSvg192"

export interface QodeCustom191Props {}

export const QodeCustom191: React.FC<
  QodeCustom191Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="magnifying-glass" id="1:91" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 2.401px 2.397px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1:92" type="VECTOR" */}
        <QodeSvg192
          style={{
            ...{
              width: "19.199px",
              height: "19.203px",
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
