// id="148:9826"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1489827 from "@designSystem/icon/svg/QodeSvg1489827"

export interface QodeCustom1489826Props {}

export const QodeCustom1489826: React.FC<
  QodeCustom1489826Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="bars" id="148:9826" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "4.8px 3.6px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="148:9827" type="VECTOR" */}
        <QodeSvg1489827
          style={{
            ...{
              width: "16.8px",
              height: "14.4px",
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
