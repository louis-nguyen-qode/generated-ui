// id="1990:59991"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom266995 } from "@designSystem/custom/QodeCustom266995"

export interface QodeCustom199059991Props {}

export const QodeCustom199059991: React.FC<
  QodeCustom199059991Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="verified=false, size=72" id="1990:59991" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "72px",
            height: "72px",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
          },
          ...style,
        }}
      >
        {/* name="avatar" id="1990:59992" type="INSTANCE" */}
        <QodeCustom266995
          style={{
            ...{
              display: "flex",
              width: "72px",
              height: "72px",
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
