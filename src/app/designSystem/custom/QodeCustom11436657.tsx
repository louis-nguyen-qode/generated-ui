// id="114:36657"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg11436658 from "@designSystem/icon/svg/QodeSvg11436658"

export interface QodeCustom11436657Props {}

export const QodeCustom11436657: React.FC<
  QodeCustom11436657Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="CloseCircle" id="114:36657" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="114:36658" type="VECTOR" */}
        <QodeSvg11436658
          style={{
            width: "24px",
            height: "24px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
