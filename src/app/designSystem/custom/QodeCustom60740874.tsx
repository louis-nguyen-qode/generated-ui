// id="607:40874"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom60740874Props {}

export const QodeCustom60740874: React.FC<
  QodeCustom60740874Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=wait, size=dot" id="607:40874" type="COMPONENT" */}
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
            background: "var(--neutral-gray-40, #a7a7a7)",
          },
          ...style,
        }}
      >
        <></>
      </div>
    </>
  )
}
