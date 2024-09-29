// id="328:28487"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom32828487Props {}

export const QodeCustom32828487: React.FC<
  QodeCustom32828487Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="color=primary, state=default, size=rouned, rounded=True" id="328:28487" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            height: "24px",
            padding: "0px 12px",
            alignItems: "center",
            gap: "var(--size-size-sizexxs-6px, 6px)",
            flexShrink: "0",
            borderRadius: "var(--border-radius-rounded, 999px)",
            border: "1px solid var(--primary-primary-40, #64b9f5)",
            background: "var(--primary-primary-10, #d6eeff)",
          },
          ...style,
        }}
      >
        <span
          style={{
            ...{
              color: "var(--text-text-neutral-50, #1d1d1d)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{`Tag`}</span>
      </div>
    </>
  )
}
