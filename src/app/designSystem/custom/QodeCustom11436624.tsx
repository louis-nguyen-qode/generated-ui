// id="114:36624"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg11436625 from "@designSystem/icon/svg/QodeSvg11436625"

export interface QodeCustom11436624Props {}

export const QodeCustom11436624: React.FC<
  QodeCustom11436624Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="MinusCircle" id="114:36624" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="114:36625" type="VECTOR" */}
        <QodeSvg11436625
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
