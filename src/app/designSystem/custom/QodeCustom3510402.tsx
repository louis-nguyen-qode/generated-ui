// id="35:10402"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg3510403 from "@designSystem/icon/svg/QodeSvg3510403"

export interface QodeCustom3510402Props {}

export const QodeCustom3510402: React.FC<
  QodeCustom3510402Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="close-circle" id="35:10402" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          padding: "1.5px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="35:10403" type="VECTOR" */}
        <QodeSvg3510403
          style={{
            width: "21px",
            height: "21px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
