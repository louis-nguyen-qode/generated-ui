// id="391:33729"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom32828487 } from "@designSystem/custom/QodeCustom32828487"

export interface QodeCustom39133729Props {}

export const QodeCustom39133729: React.FC<
  QodeCustom39133729Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Type=Tag, Show Thumbnail=False" id="391:33729" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "133px",
            height: "48px",
            padding: "12px 16px",
            alignItems: "center",
            gap: "var(--size-size-sizexxs-6px, 6px)",
            flexShrink: "0",
            borderBottom: "1px solid var(--border-border-neutral-20, #e3e3e3)",
            background: "var(--background-bg-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="Tag" id="391:33759" type="INSTANCE" */}
        <QodeCustom32828487
          style={{
            ...{
              display: "flex",
              height: "24px",
              padding: "0px 12px",
              alignItems: "center",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border: "1px solid var(--primary-primary-40, #64b9f5)",
              background: "var(--primary-primary-10, #d6eeff)",
            },
            ...{},
          }}
          {...{
            showRIcon: true,
            color: "primary",
            state: "default",
            size: "rouned",
            rounded: "True",
          }}
        />
        {/* name="Tag" id="391:33760" type="INSTANCE" */}
        <QodeCustom32828487
          style={{
            ...{
              display: "flex",
              height: "24px",
              padding: "0px 12px",
              alignItems: "center",
              gap: "var(--size-size-sizexxs-6px, 6px)",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border: "1px solid var(--primary-primary-40, #64b9f5)",
              background: "var(--primary-primary-10, #d6eeff)",
            },
            ...{},
          }}
          {...{
            showRIcon: true,
            color: "primary",
            state: "default",
            size: "rouned",
            rounded: "True",
          }}
        />
      </div>
    </>
  )
}
