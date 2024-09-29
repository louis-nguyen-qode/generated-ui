// id="1186:48534"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom228149026 } from "@designSystem/custom/QodeCustom228149026"

export interface QodeCustom118648534Props {}

export const QodeCustom118648534: React.FC<
  QodeCustom118648534Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=Camera, active=true" id="1186:48534" type="COMPONENT" */}
      <div
        style={{
          ...{ display: "flex", width: "110px", alignItems: "flex-start" },
          ...style,
        }}
      >
        {/* name="Button" id="1186:48492" type="INSTANCE" */}
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
            buttonname: "Camera: ON",
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
