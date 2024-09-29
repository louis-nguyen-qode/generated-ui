// id="1828:45848"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg182845849 from "@designSystem/icon/svg/QodeSvg182845849"

export interface QodeCustom182845848Props {}

export const QodeCustom182845848: React.FC<
  QodeCustom182845848Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="shield-check" id="1828:45848" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 3px 2.505px 3px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1828:45849" type="VECTOR" */}
        <QodeSvg182845849
          style={{
            ...{
              width: "18px",
              height: "19.095px",
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
