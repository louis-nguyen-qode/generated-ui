// id="590:27845"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg59027846 from "@designSystem/icon/svg/QodeSvg59027846"

export interface QodeCustom59027845Props {}

export const QodeCustom59027845: React.FC<
  QodeCustom59027845Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="play" id="590:27845" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.598px 4.8px 3.599px 4.8px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="590:27846" type="VECTOR" */}
        <QodeSvg59027846
          style={{
            ...{
              width: "14.4px",
              height: "16.803px",
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
