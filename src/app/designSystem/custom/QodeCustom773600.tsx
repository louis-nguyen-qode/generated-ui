// id="77:3600"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom125237195 } from "@designSystem/custom/QodeCustom125237195"
import QodeSvg773593 from "@designSystem/icon/svg/QodeSvg773593"

export interface QodeCustom773600Props {}

export const QodeCustom773600: React.FC<
  QodeCustom773600Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="State=Default" id="77:3600" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "36px",
            padding: "var(--size-size-sizexxs-6px, 6px)",
            alignItems: "center",
            gap: "10px",
            borderRadius: "var(--border-radius-base, 8px)",
            border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
            background: "var(--background-bg-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="linkedin" id="78:7669" type="INSTANCE" */}
        <QodeCustom125237195
          style={{
            ...{ width: "24px", height: "24px", flexShrink: "0" },
            ...{},
          }}
          {...{}}
        />
        {/* name="Indicator" id="77:3593" type="ELLIPSE" */}
        <QodeSvg773593
          style={{
            ...{
              width: "8px",
              height: "8px",
              position: "absolute",
              right: "-2px",
              top: "-2px",
              fill: "var(--red-red-40, #f85631)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
