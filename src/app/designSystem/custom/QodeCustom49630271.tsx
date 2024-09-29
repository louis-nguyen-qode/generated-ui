// id="496:30271"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeRadio } from "@designSystem/ant/QodeRadio"

export interface QodeCustom49630271Props {}

export const QodeCustom49630271: React.FC<
  QodeCustom49630271Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="items=2, direction=horizontal" id="496:30271" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            alignItems: "flex-start",
            gap: "var(--size-padding-paddingxs, 8px)",
          },
          ...style,
        }}
      >
        {/* name="🧬 item 1" id="496:30296" type="INSTANCE" */}
        <QodeRadio
          style={{
            ...{
              display: "flex",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxs, 8px)",
            },
            ...{},
          }}
          {...{
            title: "Radio",
            showTitle: true,
            state: "default",
            checked: false,
          }}
        />
        {/* name="🧬 item 2" id="496:30297" type="INSTANCE" */}
        <QodeRadio
          style={{
            ...{
              display: "flex",
              alignItems: "flex-start",
              gap: "var(--size-padding-paddingxs, 8px)",
            },
            ...{},
          }}
          {...{
            title: "Radio",
            showTitle: true,
            state: "default",
            checked: false,
          }}
        />
      </div>
    </>
  )
}
