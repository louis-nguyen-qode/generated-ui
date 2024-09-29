// id="607:40867"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1308489 } from "@designSystem/custom/QodeCustom1308489"

export interface QodeCustom60740867Props {}

export const QodeCustom60740867: React.FC<
  QodeCustom60740867Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=finish, size=small" id="607:40867" type="COMPONENT" */}
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
            background: "var(--background-bg-green-hover, #11a620)",
          },
          ...style,
        }}
      >
        {/* name="Icon" id="607:40884" type="INSTANCE" */}
        <QodeCustom1308489
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
