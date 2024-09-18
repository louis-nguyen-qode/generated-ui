// id="5629:26"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg562927 from "@designSystem/icon/svg/QodeSvg562927"

export interface QodeCustom562926Props {}

export const QodeCustom562926: React.FC<
  QodeCustom562926Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="linkedin" id="5629:26" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          padding: "3.6px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="5629:27" type="VECTOR" */}
        <QodeSvg562927
          style={{
            width: "16.8px",
            height: "16.8px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-colortext, rgba(0, 0, 0, 0.88))",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
