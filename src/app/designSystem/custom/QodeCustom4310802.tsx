// id="43:10802"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1147 } from "@designSystem/custom/QodeCustom1147"

export interface QodeCustom4310802Props {}

export const QodeCustom4310802: React.FC<
  QodeCustom4310802Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Default" id="43:10802" type="COMPONENT" */}
      <div
        style={{
          ...{ display: "flex", width: "124px", alignItems: "flex-start" },
          ...style,
        }}
      >
        {/* name="Button" id="43:10803" type="INSTANCE" */}
        <QodeCustom1147
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheight, 32px)",
              padding:
                "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              flex: "1 0 0",
              borderRadius: "var(--style-radius-borderround, 999px)",
              border:
                "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            },
            ...{},
          }}
          {...{
            iconL: true,
            title: "Upload CV",
            type: "default",
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
