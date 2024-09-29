// id="1987:47736"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom266995 } from "@designSystem/custom/QodeCustom266995"

export interface QodeCustom198747736Props {}

export const QodeCustom198747736: React.FC<
  QodeCustom198747736Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="verified=false, size=38" id="1987:47736" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "38px",
            height: "38px",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
          },
          ...style,
        }}
      >
        {/* name="avatar" id="1987:47720" type="INSTANCE" */}
        <QodeCustom266995
          style={{
            ...{
              display: "flex",
              width: "38px",
              height: "38px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "var(--font-size-large, 16px)",
              flexShrink: "0",
              borderRadius: "499.5px",
              background: "var(--color-success-colorsuccesshover, #a3c73e)",
            },
            ...{},
          }}
          {...{ opentowork: true, img: true, type: "Round", state: "Default" }}
        />
      </div>
    </>
  )
}
