// id="99:6398"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg996399 from "@designSystem/icon/svg/QodeSvg996399"

export interface QodeCustom996398Props {}

export const QodeCustom996398: React.FC<
  QodeCustom996398Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="underline" id="99:6398" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.6px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="99:6399" type="VECTOR" */}
        <QodeSvg996399
          style={{
            ...{
              width: "16.8px",
              height: "16.8px",
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
