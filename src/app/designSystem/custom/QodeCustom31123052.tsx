// id="311:23052"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeBadge } from "@designSystem/ant/QodeBadge"

export interface QodeCustom31123052Props {}

export const QodeCustom31123052: React.FC<
  QodeCustom31123052Props & { style?: CSSProperties }
> = ({ ...rest }) => {
  return (
    <>
      {/* name="status=upcoming" id="311:23052" type="COMPONENT" */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
        {/* name="Badge__Status" id="434:26889" type="INSTANCE" */}
        <QodeBadge
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
          {...{ showLabel: true, status: "success" }}
        />
      </div>
    </>
  )
}
