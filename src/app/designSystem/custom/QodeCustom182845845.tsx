// id="1828:45845"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom182845848 } from "@designSystem/custom/QodeCustom182845848"

export interface QodeCustom182845845Props {}

export const QodeCustom182845845: React.FC<
  QodeCustom182845845Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=2" id="1828:45845" type="COMPONENT" */}
      <div
        style={{
          ...{
            display: "inline-flex",
            padding: "2px",
            alignItems: "center",
            gap: "10px",
            borderRadius: "24px",
            border: "1px solid #1597F4",
            background: "#EEF8FF",
          },
          ...style,
        }}
      >
        {/* name="shield-check" id="1828:49077" type="INSTANCE" */}
        <QodeCustom182845848
          style={{ ...{ width: "16px", height: "16px" }, ...{} }}
          {...{}}
        />
      </div>
    </>
  )
}
