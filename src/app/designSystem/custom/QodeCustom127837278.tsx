// id="1278:37278"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg127837279 from "@designSystem/icon/svg/QodeSvg127837279"

export interface QodeCustom127837278Props {}

export const QodeCustom127837278: React.FC<
  QodeCustom127837278Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="video-slash" id="1278:37278" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 0px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1278:37279" type="VECTOR" */}
        <QodeSvg127837279
          style={{
            ...{
              width: "24px",
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
