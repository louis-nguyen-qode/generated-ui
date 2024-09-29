// id="607:40862"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1308489 } from "@designSystem/custom/QodeCustom1308489"

export interface QodeCustom60740862Props {}

export const QodeCustom60740862: React.FC<
  QodeCustom60740862Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=finish, size=default" id="607:40862" type="COMPONENT" */}
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
            background: "var(--background-bg-green-hover, #11a620)",
          },
          ...style,
        }}
      >
        {/* name="Icon" id="607:40877" type="INSTANCE" */}
        <QodeCustom1308489
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
