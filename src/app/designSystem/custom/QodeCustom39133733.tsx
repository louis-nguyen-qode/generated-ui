// id="391:33733"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom38321944 } from "@designSystem/custom/QodeCustom38321944"

export interface QodeCustom39133733Props {}

export const QodeCustom39133733: React.FC<
  QodeCustom39133733Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Type=1 Button, Show Thumbnail=False" id="391:33733" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "156px",
            height: "49px",
            padding: "12px 16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            flexShrink: "0",
            borderBottom: "1px solid var(--border-border-neutral-20, #e3e3e3)",
            background: "var(--background-bg-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="Button" id="391:33764" type="INSTANCE" */}
        <QodeCustom38321944
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheightsm, 24px)",
              padding: "4px 8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "4px",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border: "1px solid var(--border-border-primary-30, #107ecc)",
              background: "var(--background-bg-primary, #1597f4)",
            },
            ...{},
          }}
          {...{
            buttonname: "Button",
            type: "primary",
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
