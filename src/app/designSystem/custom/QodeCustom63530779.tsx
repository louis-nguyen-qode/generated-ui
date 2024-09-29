// id="635:30779"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg63530795 from "@designSystem/icon/svg/QodeSvg63530795"
import QodeSvg63530796 from "@designSystem/icon/svg/QodeSvg63530796"

export interface QodeCustom63530779Props {}

export const QodeCustom63530779: React.FC<
  QodeCustom63530779Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="type=Default, ?darkmode=yes, orientation=landscape, ?wordmark=yes" id="635:30779" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "294px",
            height: "99px",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            flexShrink: "0",
          },
          ...style,
        }}
      >
        {/* name="symbol" id="635:30795" type="VECTOR" */}
        <QodeSvg63530795
          style={{
            ...{
              width: "114px",
              height: "99px",
              flexShrink: "0",
              fill: "var(--primary-primary-50, #1597f4)",
              strokeWidth: "2px",
              stroke: "var(--border-border-primary-20, #158de2)",
            },
            ...{},
          }}
          {...{}}
        />
        {/* name="wordmark" id="635:30796" type="VECTOR" */}
        <QodeSvg63530796
          style={{
            ...{
              width: "164px",
              height: "65px",
              flexShrink: "0",
              fill: "var(--brands-black, #000)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
