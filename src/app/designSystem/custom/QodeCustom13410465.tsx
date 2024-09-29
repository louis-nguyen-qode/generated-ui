// id="134:10465"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg13410466 from "@designSystem/icon/svg/QodeSvg13410466"

export interface QodeCustom13410465Props {}

export const QodeCustom13410465: React.FC<
  QodeCustom13410465Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="stars" id="134:10465" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "flex",
            width: "24px",
            height: "24px",
            padding: "2.4px 2.4px 2.399px 2.399px",
            justifyContent: "center",
            alignItems: "center",
          },
          ...style,
        }}
      >
        {/* name="Vector" id="134:10466" type="VECTOR" */}
        <QodeSvg13410466
          style={{
            ...{
              width: "19.201px",
              height: "19.201px",
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
