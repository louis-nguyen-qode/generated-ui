// id="1371:38372"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom118639777 } from "@designSystem/custom/QodeCustom118639777"

export interface QodeCustom137138372Props {}

export const QodeCustom137138372: React.FC<
  QodeCustom137138372Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Buttons=1" id="1371:38372" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "504px",
            height: "56px",
            padding:
              "var(--size-padding-paddingsm, 12px) var(--size-padding-paddingsm, 0px)",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
            borderTop:
              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
            background: "var(--background-bg-neutral-5, #f8f6f6)",
          },
          ...style,
        }}
      >
        {/* name="Button" id="1371:38383" type="INSTANCE" */}
        <QodeCustom118639777
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "4px 16px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border: "1px solid var(--border-border-primary-30, #107ecc)",
              background: "var(--background-bg-primary, #1597f4)",
            },
            ...{},
          }}
          {...{
            buttonname: "Button",
            type: "primary",
            size: "default",
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
