// id="221:16418"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom22116418Props {}

export const QodeCustom22116418: React.FC<
  QodeCustom22116418Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="State=Active" id="221:16418" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              textAlign: "center",
              fontFamily: '"Barlow Semi Condensed"',
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            },
            ...{},
          }}
        >{`TECHNICAL`}</span>
      </div>
    </>
  )
}
