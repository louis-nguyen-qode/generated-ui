// id="598:28420"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg59828421 from "@designSystem/icon/svg/QodeSvg59828421"

export interface QodeCustom59828420Props {}

export const QodeCustom59828420: React.FC<
  QodeCustom59828420Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="message-minus" id="598:28420" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 2.4px 2.401px 2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="598:28421" type="VECTOR" */}
        <QodeSvg59828421
          style={{
            ...{
              width: "19.2px",
              height: "19.199px",
              flexShrink: "0",
              fill: "var(--neutral-gray-90, #464646)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
