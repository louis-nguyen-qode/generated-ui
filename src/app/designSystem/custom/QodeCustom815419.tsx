// id="81:5419"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg815420 from "@designSystem/icon/svg/QodeSvg815420"

export interface QodeCustom815419Props {}

export const QodeCustom815419: React.FC<
  QodeCustom815419Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="circle-question" id="81:5419" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="81:5420" type="VECTOR" */}
        <QodeSvg815420
          style={{
            ...{
              width: "19.2px",
              height: "19.2px",
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
