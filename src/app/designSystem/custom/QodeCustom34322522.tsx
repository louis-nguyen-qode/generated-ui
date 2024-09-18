// id="3432:2522"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg34322523 from "@designSystem/icon/svg/QodeSvg34322523"

export interface QodeCustom34322522Props {}

export const QodeCustom34322522: React.FC<
  QodeCustom34322522Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="icons" id="3432:2522" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          padding: "2px 1.998px 2px 2px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="3432:2523" type="VECTOR" */}
        <QodeSvg34322523
          style={{
            width: "20.002px",
            height: "20px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-colortext, rgba(0, 0, 0, 0.88))",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
