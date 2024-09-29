// id="2263:49520"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom161270 } from "@designSystem/custom/QodeCustom161270"

export interface QodeCustom226349520Props {}

export const QodeCustom226349520: React.FC<
  QodeCustom226349520Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=default" id="2263:49520" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "338px",
            padding: "16px",
            alignItems: "center",
            gap: "16px",
            background: "var(--neutral-white, #fff)",
          },
          ...style,
        }}
      >
        {/* name="user" id="2263:49507" type="INSTANCE" */}
        <QodeCustom161270
          style={{
            ...{ width: "20px", height: "20px", flexShrink: "0" },
            ...{},
          }}
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
        >{`Setting menu`}</span>
      </div>
    </>
  )
}
