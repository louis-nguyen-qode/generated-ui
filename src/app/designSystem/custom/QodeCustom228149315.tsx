// id="2281:49315"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63290 } from "@designSystem/custom/QodeCustom63290"

export interface QodeCustom228149315Props {}

export const QodeCustom228149315: React.FC<
  QodeCustom228149315Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=primary, size=default, state=default, content=icon, danger=false, ghost=false" id="2281:49315" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "var(--size-height-controlheight, 32px)",
            padding:
              "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
            justifyContent: "center",
            alignItems: "center",
            gap: "var(--size-padding-paddingxs, 8px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
            border: "1px solid var(--border-border-primary-30, #107ecc)",
            background: "var(--background-bg-primary, #1597f4)",
          },
          ...style,
        }}
      >
        {/* name="🎰 icon" id="2281:50561" type="INSTANCE" */}
        <QodeCustom63290
          style={{ ...{ width: "16px", height: "16px" }, ...{} }}
          {...{}}
        />
      </div>
    </>
  )
}
