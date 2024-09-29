// id="148:9853"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1489826 } from "@designSystem/custom/QodeCustom1489826"
import { QodeCustom813738 } from "@designSystem/custom/QodeCustom813738"
import { QodeCustom228149326 } from "@designSystem/custom/QodeCustom228149326"

export interface QodeCustom1489853Props {}

export const QodeCustom1489853: React.FC<
  QodeCustom1489853Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="State=Edit" id="148:9853" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "596px",
            height: "54px",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "12px",
            flexShrink: "0",
          },
          ...style,
        }}
      >
        {/* name="bars" id="148:9854" type="INSTANCE" */}
        <QodeCustom1489826
          style={{
            ...{ width: "20px", height: "20px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
        {/* name="Input__Text Area" id="149:9542" type="INSTANCE" */}
        <QodeCustom813738
          style={{
            ...{
              display: "flex",
              padding:
                "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxs, 8px)",
              flex: "1 0 0",
              alignSelf: "stretch",
              borderRadius: "var(--border-radius-base, 8px)",
              border:
                "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
              background:
                "var(--color-neutral-background-colorbgcontainer, #fff)",
            },
            ...{},
          }}
          {...{
            title:
              "Introduce yourself and summarize your background, focusing on your skills and relevant experience?",
            state: "filled",
            size: "default",
          }}
        />
        {/* name="Button" id="616:38091" type="INSTANCE" */}
        <QodeCustom228149326
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
              border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
              background: "var(--background-bg-white, #fff)",
            },
            ...{},
          }}
          {...{
            buttonname: "Button",
            type: "default",
            size: "small",
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
