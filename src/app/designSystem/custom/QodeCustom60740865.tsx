// id="607:40865"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom161272 } from "@designSystem/custom/QodeCustom161272"

export interface QodeCustom60740865Props {}

export const QodeCustom60740865: React.FC<
  QodeCustom60740865Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=error, size=default" id="607:40865" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "32px",
            height: "var(--size-height-controlheight, 32px)",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
            borderRadius: "999px",
            background: "var(--red-red-50, #dc3812)",
          },
          ...style,
        }}
      >
        {/* name="Icon" id="607:40880" type="INSTANCE" */}
        <QodeCustom161272
          style={{
            ...{ width: "16px", height: "16px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
