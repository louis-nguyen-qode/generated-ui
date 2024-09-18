// id="35:11358"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg3511359 from "@designSystem/icon/svg/QodeSvg3511359"

export interface QodeCustom3511358Props {}

export const QodeCustom3511358: React.FC<
  QodeCustom3511358Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="SwapRight" id="35:11358" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          padding: "0px 3.375px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="35:11359" type="VECTOR" */}
        <QodeSvg3511359
          style={{
            width: "17.25px",
            height: "6.375px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
