// id="1956:52994"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg195652995 from "@designSystem/icon/svg/QodeSvg195652995"

export interface QodeCustom195652994Props {}

export const QodeCustom195652994: React.FC<
  QodeCustom195652994Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="triangle-exclamation" id="1956:52994" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.6px 2.4px 3.6px 2.401px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1956:52995" type="VECTOR" */}
        <QodeSvg195652995
          style={{
            ...{
              width: "19.199px",
              height: "16.8px",
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
