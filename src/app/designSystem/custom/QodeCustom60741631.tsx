// id="607:41631"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom60740893 } from "@designSystem/custom/QodeCustom60740893"
import { QodeCustom60740894 } from "@designSystem/custom/QodeCustom60740894"

export interface QodeCustom60741631Props {}

export const QodeCustom60741631: React.FC<
  QodeCustom60741631Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="size=basic, direction=vertical, items=4" id="607:41631" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "var(--size-padding-paddingxs, 8px)",
          },
          ...style,
        }}
      >
        {/* name="🧬 item 1" id="607:41702" type="INSTANCE" */}
        <QodeCustom60740893
          style={{
            ...{
              display: "flex",
              alignItems: "flex-start",
              gap: "var(--size-padding-padding, 16px)",
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
        {/* name="🧬 item 2" id="607:41703" type="INSTANCE" */}
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
        {/* name="🧬 item 3" id="607:41704" type="INSTANCE" */}
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
        {/* name="🧬 item 4" id="607:41705" type="INSTANCE" */}
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
