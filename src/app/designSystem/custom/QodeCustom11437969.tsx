// id="114:37969"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg11437970 from "@designSystem/icon/svg/QodeSvg11437970"

export interface QodeCustom11437969Props {}

export const QodeCustom11437969: React.FC<
  QodeCustom11437969Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Sync" id="114:37969" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "0.75px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="114:37970" type="VECTOR" */}
        <QodeSvg11437970
          style={{
            ...{
              width: "22.5px",
              height: "22.5px",
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
