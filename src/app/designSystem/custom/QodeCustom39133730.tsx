// id="391:33730"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom35021382 } from "@designSystem/custom/QodeCustom35021382"

export interface QodeCustom39133730Props {}

export const QodeCustom39133730: React.FC<
  QodeCustom39133730Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Type=Dot badge, Show Thumbnail=False" id="391:33730" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "120px",
            height: "48px",
            padding: "12px 16px",
            alignItems: "center",
            gap: "var(--size-size-sizexxs-6px, 6px)",
            flexShrink: "0",
            borderBottom: "1px solid var(--border-border-neutral-20, #e3e3e3)",
            background: "var(--background-bg-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="Badge__Status" id="391:33761" type="INSTANCE" */}
        <QodeCustom35021382
          style={{
            ...{ display: "flex", alignItems: "center", gap: "8px" },
            ...{},
          }}
          {...{ showLabel: true, status: "success" }}
        />
      </div>
    </>
  )
}
