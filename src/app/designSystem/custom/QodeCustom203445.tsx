// id="20:3445"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom203431 } from "@designSystem/custom/QodeCustom203431"

export interface QodeCustom203445Props {}

export const QodeCustom203445: React.FC<
  QodeCustom203445Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="items=4" id="20:3445" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "160px",
            padding: "var(--size-padding-paddingxxs, 4px)",
            flexDirection: "column",
            alignItems: "flex-start",
            borderRadius: "var(--style-radius-borderradius, 8px)",
            background:
              "var(--color-neutral-background-colorbgcontainer, #fff)",
            boxShadow:
              "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
          },
          ...style,
        }}
      >
        {/* name="🧬 item 1" id="20:3453" type="INSTANCE" */}
        <QodeCustom203431
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              alignSelf: "stretch",
              borderRadius: "var(--style-radius-borderradius, 8px)",
            },
            ...{},
          }}
          {...{ title: "Select menu item", state: "default" }}
        />
        {/* name="🧬 item 2" id="20:3454" type="INSTANCE" */}
        <QodeCustom203431
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              alignSelf: "stretch",
              borderRadius: "var(--style-radius-borderradius, 8px)",
            },
            ...{},
          }}
          {...{ title: "Select menu item", state: "default" }}
        />
        {/* name="🧬 item 3" id="20:3455" type="INSTANCE" */}
        <QodeCustom203431
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              alignSelf: "stretch",
              borderRadius: "var(--style-radius-borderradius, 8px)",
            },
            ...{},
          }}
          {...{ title: "Select menu item", state: "default" }}
        />
        {/* name="🧬 item 4" id="20:3456" type="INSTANCE" */}
        <QodeCustom203431
          style={{
            ...{
              display: "flex",
              height: "var(--size-height-controlheight, 32px)",
              padding: "0px var(--size-padding-paddingsm, 12px)",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--size-padding-paddingxs, 8px)",
              alignSelf: "stretch",
              borderRadius: "var(--style-radius-borderradius, 8px)",
            },
            ...{},
          }}
          {...{ title: "Select menu item", state: "default" }}
        />
      </div>
    </>
  )
}
