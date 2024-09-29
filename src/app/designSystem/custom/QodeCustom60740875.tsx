// id="607:40875"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom60740875Props {}

export const QodeCustom60740875: React.FC<
  QodeCustom60740875Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=error, size=dot" id="607:40875" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "8px",
            height: "8px",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
            borderRadius: "999px",
            background: "var(--red-red-50, #dc3812)",
          },
          ...style,
        }}
      >
        <></>
      </div>
    </>
  )
}
