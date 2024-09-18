// id="630:14871"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg63014855 from "@designSystem/icon/svg/QodeSvg63014855"

export interface QodeCustom63014871Props {}

export const QodeCustom63014871: React.FC<
  QodeCustom63014871Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="xmark" id="630:14871" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "4px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="630:14855" type="VECTOR" */}
        <QodeSvg63014855
          style={{
            ...{
              width: "16px",
              height: "16px",
              flexShrink: "0",
              fill: "var(--color-neutral-text-colortext, #000)",
            },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
