// id="1:2103"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom11401 } from "@designSystem/custom/QodeCustom11401"

export interface QodeCustom12103Props {}

export const QodeCustom12103: React.FC<
  QodeCustom12103Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Style=V - Profile, ? Log In=No" id="1:2103" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "var(--font-size-large, 16px)",
          },
          ...style,
        }}
      >
        {/* name="Button" id="1:2104" type="INSTANCE" */}
        <QodeCustom11401
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheightlg, 40px)",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingsm, 12px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              borderRadius: "var(--style-radius-borderround, 999px)",
              border:
                "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            },
            ...{},
          }}
          {...{
            title: "Button",
            type: "default",
            size: "large",
            state: "default",
            content: "icon",
            danger: false,
            ghost: false,
          }}
        />
      </div>
    </>
  )
}
