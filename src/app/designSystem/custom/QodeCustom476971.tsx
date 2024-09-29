// id="47:6971"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom476964 } from "@designSystem/custom/QodeCustom476964"

export interface QodeCustom476971Props {}

export const QodeCustom476971: React.FC<
  QodeCustom476971Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Size=28" id="47:6971" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "28px",
            height: "28px",
            padding: "6px",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: "0",
            borderRadius: "4px",
            border: "1px solid var(--border-border-gray-50, #1a1a1a)",
            background:
              "linear-gradient(316deg, #D1D1D1 0.71%, #ECECEC 99.29%)",
          },
          ...style,
        }}
      >
        {/* name="remix-icons/fill/media/image-fill" id="47:6974" type="INSTANCE" */}
        <QodeCustom476964
          style={{
            ...{
              display: "flex",
              width: "16px",
              height: "16px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
