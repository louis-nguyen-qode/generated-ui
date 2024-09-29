// id="607:40872"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom60740872Props {}

export const QodeCustom60740872: React.FC<
  QodeCustom60740872Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=finish, size=dot" id="607:40872" type="COMPONENT" */}
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
            background: "var(--background-bg-green-hover, #11a620)",
          },
          ...style,
        }}
      >
        <></>
      </div>
    </>
  )
}
