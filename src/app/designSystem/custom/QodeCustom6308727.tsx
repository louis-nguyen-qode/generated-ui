// id="630:8727"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg6307560 from "@designSystem/icon/svg/QodeSvg6307560"

export interface QodeCustom6308727Props {}

export const QodeCustom6308727: React.FC<
  QodeCustom6308727Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="chevron-down" id="630:8727" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "24px",
          height: "24px",
          padding: "7.496px 1.496px 4.501px 1.496px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* name="Vector" id="630:7560" type="VECTOR" */}
        <QodeSvg6307560
          style={{
            width: "21.007px",
            height: "12.002px",
            flexShrink: "0",
            fill: "var(--color-neutral-text-colortext, #000)",
          }}
          {...{}}
        />
      </div>
    </>
  )
}
