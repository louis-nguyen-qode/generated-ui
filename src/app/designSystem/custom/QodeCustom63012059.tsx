// id="630:12059"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg63011301 from "@designSystem/icon/svg/QodeSvg63011301"

export interface QodeCustom63012059Props {}

export const QodeCustom63012059: React.FC<
  QodeCustom63012059Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="list-tree" id="630:12059" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          padding: "2.25px 0px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="630:11301" type="VECTOR" */}
        <QodeSvg63011301
          style={{
            width: "24px",
            height: "19.5px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-colortext, #000)",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
