// id="340:19241"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom34019238 } from "@designSystem/custom/QodeCustom34019238"

export interface QodeCustom34019241Props {}

export const QodeCustom34019241: React.FC<
  QodeCustom34019241Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=descending" id="340:19241" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "16px",
            height: "16px",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
          },
          ...style,
        }}
      >
        {/* name="arrow-down" id="340:19243" type="INSTANCE" */}
        <QodeCustom34019238
          style={{
            ...{ width: "16px", height: "16px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
