// id="57:3726"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg573727 from "@designSystem/icon/svg/QodeSvg573727"

export interface QodeCustom573726Props {}

export const QodeCustom573726: React.FC<
  QodeCustom573726Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="gear" id="57:3726" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 2.954px 2.404px 2.95px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="57:3727" type="VECTOR" */}
        <QodeSvg573727
          style={{
            ...{
              width: "18.097px",
              height: "19.196px",
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
