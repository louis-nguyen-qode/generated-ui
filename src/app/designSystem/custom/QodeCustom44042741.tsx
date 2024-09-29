// id="440:42741"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom505221 } from "@designSystem/custom/QodeCustom505221"

export interface QodeCustom44042741Props {}

export const QodeCustom44042741: React.FC<
  QodeCustom44042741Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="Property 1=Default" id="440:42741" type="COMPONENT" */}
      <div
        style={{
          ...{ width: "16px", height: "16px", flexShrink: "0" },
          ...style,
        }}
      >
        {/* name="filter" id="440:42743" type="INSTANCE" */}
        <QodeCustom505221
          style={{
            ...{ width: "16px", height: "16px", position: "absolute" },
            ...{},
          }}
          {...{}}
        />
      </div>
    </>
  )
}
