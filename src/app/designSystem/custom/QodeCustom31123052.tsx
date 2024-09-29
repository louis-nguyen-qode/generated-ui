// id="311:23052"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom43426798 } from "@designSystem/custom/QodeCustom43426798"

export interface QodeCustom31123052Props {}

export const QodeCustom31123052: React.FC<
  QodeCustom31123052Props & { style?: CSSProperties }
> = ({ style, ...rest }) => {
  return (
    <>
      {/* name="status=upcoming" id="311:23052" type="COMPONENT" */}
      <div
        style={{
          ...{ display: "inline-flex", alignItems: "center", gap: "8px" },
          ...style,
        }}
      >
        {/* name="Badge__Status" id="434:26889" type="INSTANCE" */}
        <QodeCustom43426798
          style={{
            ...{ display: "flex", alignItems: "center", gap: "8px" },
            ...{},
          }}
          {...{ showLabel: true, status: "success" }}
        />
      </div>
    </>
  )
}
