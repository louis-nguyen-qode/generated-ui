// id="607:41630"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom60740893 } from "@designSystem/custom/QodeCustom60740893"
import { QodeCustom60740894 } from "@designSystem/custom/QodeCustom60740894"

export interface QodeCustom60741630Props {}

export const QodeCustom60741630: React.FC<
  QodeCustom60741630Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="size=basic, direction=vertical, items=3" id="607:41630" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "272px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "var(--size-padding-paddingxs, 8px)",
          },
          ...style,
        }}
      >
        {/* name="🧬 item 1" id="607:41699" type="INSTANCE" */}
        <QodeCustom60740893
          style={{
            ...{
              display: "flex",
              alignItems: "flex-start",
              gap: "var(--size-padding-padding, 16px)",
              alignSelf: "stretch",
            },
            ...{},
          }}
          {...{
            description: "This is a description",
            title: "Lorem Ipsum",
            state: "default",
            status: "process",
            size: "basic",
          }}
        />
        {/* name="🧬 item 2" id="607:41700" type="INSTANCE" */}
        <QodeCustom60740894
          style={{
            ...{
              display: "flex",
              alignItems: "flex-start",
              gap: "var(--size-padding-padding, 16px)",
              alignSelf: "stretch",
            },
            ...{},
          }}
          {...{
            description: "This is a description",
            title: "Lorem Ipsum",
            state: "default",
            status: "wait",
            size: "basic",
          }}
        />
        {/* name="🧬 item 3" id="607:41701" type="INSTANCE" */}
        <QodeCustom60740894
          style={{
            ...{
              display: "flex",
              alignItems: "flex-start",
              gap: "var(--size-padding-padding, 16px)",
              alignSelf: "stretch",
            },
            ...{},
          }}
          {...{
            description: "This is a description",
            title: "Lorem Ipsum",
            state: "default",
            status: "wait",
            size: "basic",
          }}
        />
      </div>
    </>
  )
}
