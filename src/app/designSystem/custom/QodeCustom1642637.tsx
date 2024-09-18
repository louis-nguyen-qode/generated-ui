// id="164:2637"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg1642638 from "@designSystem/icon/svg/QodeSvg1642638"

export interface QodeCustom1642637Props {}

export const QodeCustom1642637: React.FC<
  QodeCustom1642637Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Smile" id="164:2637" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "36px",
            height: "36px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="164:2638" type="VECTOR" */}
        <QodeSvg1642638
          style={{
            ...{
              width: "36px",
              height: "36px",
              flexShrink: "0",
              fill: "var(--character-title-85, rgba(0, 0, 0, 0.85))",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
