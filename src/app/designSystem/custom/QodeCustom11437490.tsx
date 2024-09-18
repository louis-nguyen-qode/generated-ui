// id="114:37490"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg11437491 from "@designSystem/icon/svg/QodeSvg11437491"

export interface QodeCustom11437490Props {}

export const QodeCustom11437490: React.FC<
  QodeCustom11437490Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="FileText" id="114:37490" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          padding: "0px 2.572px 0px 2.571px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="114:37491" type="VECTOR" */}
        <QodeSvg11437491
          style={{
            width: "18.857px",
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
