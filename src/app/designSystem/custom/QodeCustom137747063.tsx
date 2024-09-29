// id="1377:47063"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom46728750 } from "@designSystem/custom/QodeCustom46728750"

export interface QodeCustom137747063Props {}

export const QodeCustom137747063: React.FC<
  QodeCustom137747063Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Desc" id="1377:47063" type="COMPONENT" */}
      <div
        style={{
          ...{ display: "inline-flex", alignItems: "flex-start" },
          ...style,
        }}
      >
        {/* name="Table/Header" id="1377:47039" type="INSTANCE" */}
        <QodeCustom46728750
          style={{
            ...{
              display: "flex",
              width: "135px",
              height: "46px",
              padding: "var(--font-size-base, 14px) 16px",
              alignItems: "center",
              gap: "4px",
              borderRight: "1px solid var(--border-border-neutral-30, #d5d5d5)",
              borderBottom:
                "1px solid var(--border-border-neutral-30, #d5d5d5)",
              background: "var(--neutral-gray-5, #f8f6f6)",
            },
            ...{},
          }}
          {...{ sort: true, type: "default", align: "left" }}
        />
      </div>
    </>
  )
}
