// id="607:40870"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom161272 } from "@designSystem/custom/QodeCustom161272"

export interface QodeCustom60740870Props {}

export const QodeCustom60740870: React.FC<
  QodeCustom60740870Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=error, size=small" id="607:40870" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
            borderRadius: "999px",
            background: "var(--red-red-50, #dc3812)",
          },
          ...style,
        }}
      >
        {/* name="Icon" id="607:40887" type="INSTANCE" */}
        <QodeCustom161272
          style={{
            ...{ width: "12px", height: "12px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
