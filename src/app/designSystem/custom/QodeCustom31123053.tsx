// id="311:23053"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom43426798 } from "@designSystem/custom/QodeCustom43426798"
import { QodeCustom43426802 } from "@designSystem/custom/QodeCustom43426802"
import { QodeCustom43426799 } from "@designSystem/custom/QodeCustom43426799"

export interface QodeCustom31123053Props {
  status?: "upcoming" | "done" | "rejected"
}

export const QodeCustom31123053: React.FC<
  QodeCustom31123053Props & { style?: CSSProperties }
> = ({ status = "upcoming", style, ...rest }) => {
  return (
    <>
      {/* name="Interviewed/Status" id="311:23053" type="COMPONENT_SET" */}
      {/* id="311:23052" */}
      {`${status}` === `upcoming` && (
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
      )}
      {/* id="311:23054" */}
      {`${status}` === `done` && (
        <>
          {/* name="status=done" id="311:23054" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "center", gap: "8px" },
              ...style,
            }}
          >
            {/* name="Badge__Status" id="434:26991" type="INSTANCE" */}
            <QodeCustom43426802
              style={{
                ...{ display: "flex", alignItems: "center", gap: "8px" },
                ...{},
              }}
              {...{ showLabel: true, status: "default" }}
            />
          </div>
        </>
      )}
      {/* id="313:23659" */}
      {`${status}` === `rejected` && (
        <>
          {/* name="status=rejected" id="313:23659" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "center", gap: "8px" },
              ...style,
            }}
          >
            {/* name="Badge__Status" id="434:27079" type="INSTANCE" */}
            <QodeCustom43426799
              style={{
                ...{ display: "flex", alignItems: "center", gap: "8px" },
                ...{},
              }}
              {...{ showLabel: true, status: "error" }}
            />
          </div>
        </>
      )}
    </>
  )
}
