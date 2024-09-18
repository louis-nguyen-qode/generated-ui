// id="114:36649"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg11436650 from "@designSystem/icon/svg/QodeSvg11436650"

export interface QodeCustom11436649Props {}

export const QodeCustom11436649: React.FC<
  QodeCustom11436649Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="ExclamationCircle" id="114:36649" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="114:36650" type="VECTOR" */}
        <QodeSvg11436650
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
