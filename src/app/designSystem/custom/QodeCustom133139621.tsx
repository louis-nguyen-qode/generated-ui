// id="1331:39621"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom125838075 } from "@designSystem/custom/QodeCustom125838075"

export interface QodeCustom133139621Props {}

export const QodeCustom133139621: React.FC<
  QodeCustom133139621Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=on, style=simple" id="1331:39621" type="COMPONENT" */}
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
        {/* name="Icon" id="1331:39624" type="FRAME" */}
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
              borderRadius: "8px",
              border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            },
            ...{},
          }}
        >
          {/* name="microphone" id="1331:39625" type="INSTANCE" */}
          <QodeCustom125838075
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
