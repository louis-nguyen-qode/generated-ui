// id="1331:39605"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom169 } from "@designSystem/custom/QodeCustom169"

export interface QodeCustom133139605Props {}

export const QodeCustom133139605: React.FC<
  QodeCustom133139605Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=on, style=simple" id="1331:39605" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
          },
          ...style,
        }}
      >
        {/* name="Icon" id="1331:39607" type="FRAME" */}
        <div
          style={{
            ...{
              display: "flex",
              width: "40px",
              height: "40px",
              padding: "8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "var(--size-size-sizexs-8px, 8px)",
              border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            },
            ...{},
          }}
        >
          {/* name="video" id="1331:39608" type="INSTANCE" */}
          <QodeCustom169
            style={{
              ...{ width: "24px", height: "24px", flexShrink: "0" },
              ...{},
            }}
            {...{}}
          />
        </div>
      </div>
    </>
  )
}
