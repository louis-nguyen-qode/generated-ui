// id="2281:49325"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63290 } from "@designSystem/custom/QodeCustom63290"

export interface QodeCustom228149325Props {}

export const QodeCustom228149325: React.FC<
  QodeCustom228149325Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=primary, size=small, state=default, content=icon, danger=false, ghost=false" id="2281:49325" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "var(--size-height-controlheightsm, 24px)",
            padding: "var(--size-padding-paddingxxs, 4px)",
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
        {/* name="🎰 icon" id="2281:50571" type="INSTANCE" */}
        <QodeCustom63290
          style={{
            ...{
              width: "var(--font-size-base, 14px)",
              height: "var(--font-size-base, 14px)",
              flexShrink: "0",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
