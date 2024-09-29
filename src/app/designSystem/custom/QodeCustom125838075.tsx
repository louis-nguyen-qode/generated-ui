// id="1258:38075"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg125838076 from "@designSystem/icon/svg/QodeSvg125838076"

export interface QodeCustom125838075Props {}

export const QodeCustom125838075: React.FC<
  QodeCustom125838075Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="microphone" id="1258:38075" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 5.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1258:38076" type="VECTOR" */}
        <QodeSvg125838076
          style={{
            ...{
              width: "13.2px",
              height: "19.2px",
              flexShrink: "0",
              fill: "var(--color-neutral-text-colortext, rgba(0, 0, 0, 0.88))",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
