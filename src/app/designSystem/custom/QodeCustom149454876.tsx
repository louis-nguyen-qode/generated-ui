// id="1494:54876"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom149454872 } from "@designSystem/custom/QodeCustom149454872"

export interface QodeCustom149454876Props {}

export const QodeCustom149454876: React.FC<
  QodeCustom149454876Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Default" id="1494:54876" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "229px",
            alignItems: "flex-start",
            gap: "4px",
          },
          ...style,
        }}
      >
        {/* name="Interview" id="1494:54873" type="INSTANCE" */}
        <QodeCustom149454872
          style={{
            ...{
              display: "flex",
              width: "50px",
              padding: "2px 8px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexShrink: "0",
              borderRadius: "var(--border-radius-rounded, 999px)",
              border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--neutral-white, #fff)",
            },
            ...{},
          }}
          {...{ property_1: "Time" }}
        />
        <span
          style={{
            ...{
              flex: "1 0 0",
              color: "var(--text-text-neutral-40, #464646)",
              fontFamily: 'var(--family-family, "sf pro display")',
              fontSize: "var(--size-base, 14px)",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight:
                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
            },
            ...{},
          }}
        >{` Introduction and background`}</span>
      </div>
    </>
  )
}
