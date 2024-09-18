// id="3432:2695"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom34322695Props {}

export const QodeCustom34322695: React.FC<
  QodeCustom34322695Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Buttons=1" id="3432:2695" type="COMPONENT" */}
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
        {/* name="Button" id="3432:2696" type="INSTANCE" */}
        <QodeButton
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
