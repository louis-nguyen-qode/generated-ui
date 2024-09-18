// id="35:11250"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg3511251 from "@designSystem/icon/svg/QodeSvg3511251"

export interface QodeCustom3511250Props {}

export const QodeCustom3511250: React.FC<
  QodeCustom3511250Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Down" id="35:11250" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "5.143px 1.822px 5.143px 1.821px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="35:11251" type="VECTOR" */}
        <QodeSvg3511251
          style={{
            ...{
              width: "20.357px",
              height: "13.714px",
              flexShrink: "0",
              fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
