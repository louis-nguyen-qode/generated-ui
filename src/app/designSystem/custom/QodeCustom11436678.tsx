// id="114:36678"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg11436679 from "@designSystem/icon/svg/QodeSvg11436679"

export interface QodeCustom11436678Props {}

export const QodeCustom11436678: React.FC<
  QodeCustom11436678Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="ClockCircle" id="114:36678" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="114:36679" type="VECTOR" */}
        <QodeSvg11436679
          style={{
            ...{
              width: "24px",
              height: "24px",
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
