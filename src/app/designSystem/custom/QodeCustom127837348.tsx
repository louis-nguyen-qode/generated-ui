// id="1278:37348"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg127837349 from "@designSystem/icon/svg/QodeSvg127837349"

export interface QodeCustom127837348Props {}

export const QodeCustom127837348: React.FC<
  QodeCustom127837348Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="comment-lines" id="1278:37348" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "3.6px 2.4px 3.596px 2.398px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="1278:37349" type="VECTOR" */}
        <QodeSvg127837349
          style={{
            ...{
              width: "19.202px",
              height: "16.804px",
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
