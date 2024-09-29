// id="4:1707"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg41708 from "@designSystem/icon/svg/QodeSvg41708"

export interface QodeCustom41707Props {}

export const QodeCustom41707: React.FC<
  QodeCustom41707Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="circle-x" id="4:1707" type="COMPONENT" */}
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
        {/* name="Vector" id="4:1708" type="VECTOR" */}
        <QodeSvg41708
          style={{
            ...{
              width: "19.2px",
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
