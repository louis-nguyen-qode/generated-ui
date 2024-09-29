// id="2263:49521"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom161270 } from "@designSystem/custom/QodeCustom161270"

export interface QodeCustom226349521Props {}

export const QodeCustom226349521: React.FC<
  QodeCustom226349521Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=active" id="2263:49521" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "338px",
            padding: "16px",
            alignItems: "center",
            gap: "16px",
            background: "var(--blue-techblue-5, #f8fcff)",
            boxShadow: "0px 2px 0px 0px #158DE2",
          },
          ...style,
        }}
      >
        {/* name="user" id="2263:49609" type="INSTANCE" */}
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
