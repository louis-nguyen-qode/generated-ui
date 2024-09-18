// id="391:31653"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom39131653Props {}

export const QodeCustom39131653: React.FC<
  QodeCustom39131653Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="Property 1=Default" id="391:31653" type="COMPONENT" */}
      <div
        style={{
          display: "flex",
          width: "216px",
          height: "40px",
          padding: "8px 24px",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "8px",
          flexShrink: "0",
          borderRadius: "var(--border-radius-rounded, 999px)",
          background: "var(--neutral-gray-10, #e3e3e3)",
        }}
      >
        {/* name="spinner" id="391:31664" type="INSTANCE" */}
        <Icon.QodeSpinner
          style={{ width: "24px", height: "24px", flexShrink: "0" }}
          {...{}}
        />
        <span
          style={{
            color: "var(--text-text-neutral-50, #1d1d1d)",
            fontFamily: '"SF Pro Display"',
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "24px /* 150% */",
          }}
        >{`Finding contact info`}</span>
      </div>
    </>
  )
}
