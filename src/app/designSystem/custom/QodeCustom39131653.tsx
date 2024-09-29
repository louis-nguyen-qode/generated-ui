// id="391:31653"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom39131660 } from "@designSystem/custom/QodeCustom39131660"

export interface QodeCustom39131653Props {}

export const QodeCustom39131653: React.FC<
  QodeCustom39131653Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Default, size=md" id="391:31653" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            padding: "8px 24px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            borderRadius: "var(--border-radius-rounded, 999px)",
            border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
            background: "var(--neutral-gray-10, #e3e3e3)",
          },
          ...style,
        }}
      >
        {/* name="spinner" id="391:31664" type="INSTANCE" */}
        <QodeCustom39131660
          style={{ ...{ width: "24px", height: "24px" }, ...{} }}
          {...{}}
        />
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: '"SF Pro Display"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "24px /* 150% */",
            },
            ...{},
          }}
        >{`Finding contact info`}</span>
      </div>
    </>
  )
}
