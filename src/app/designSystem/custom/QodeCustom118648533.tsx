// id="1186:48533"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom228149026 } from "@designSystem/custom/QodeCustom228149026"

export interface QodeCustom118648533Props {}

export const QodeCustom118648533: React.FC<
  QodeCustom118648533Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=Microphone, active=true" id="1186:48533" type="COMPONENT" */}
      <div
        style={{
          ...{ display: "flex", width: "125px", alignItems: "flex-start" },
          ...style,
        }}
      >
        {/* name="Button" id="1186:48510" type="INSTANCE" */}
        <QodeCustom228149026
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheightsm, 24px)",
              padding: "4px 8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              flex: "1 0 0",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{
            buttonname: "Microphone: ON",
            iconLeft: true,
            type: "default",
            size: "small",
            state: "default",
            content: "default",
            danger: false,
            ghost: false,
          }}
        />
      </div>
    </>
  )
}
