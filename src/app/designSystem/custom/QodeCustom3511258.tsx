// id="35:11258"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg3511259 from "@designSystem/icon/svg/QodeSvg3511259"

export interface QodeCustom3511258Props {}

export const QodeCustom3511258: React.FC<
  QodeCustom3511258Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="Left" id="35:11258" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          padding: "1.847px 6.321px 1.851px 4.929px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="35:11259" type="VECTOR" */}
        <QodeSvg3511259
          style={{
            width: "12.75px",
            height: "20.302px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
