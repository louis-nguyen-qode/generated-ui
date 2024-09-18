// id="340:19240"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom34019240Props {
  property_1?: "descending" | "ascending"
}

export const QodeCustom34019240: React.FC<
  QodeCustom34019240Props & { style?: CSSProperties }
> = ({ property_1 = "descending", ...rest }) => {
  return (
    <>
      {/* name="Table/Sort" id="340:19240" type="COMPONENT_SET" */}
      {/* id="340:19241" */}
      {`${property_1}` === `descending` && (
        <>
          {/* name="Property 1=descending" id="340:19241" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "16px",
              height: "16px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
            }}
          >
            {/* name="arrow-down" id="340:19243" type="INSTANCE" */}
            <Icon.QodeArrowDown
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="340:19242" */}
      {`${property_1}` === `ascending` && (
        <>
          {/* name="Property 1=ascending" id="340:19242" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "16px",
              height: "16px",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
            }}
          >
            {/* name="arrow-up" id="340:19244" type="INSTANCE" */}
            <Icon.QodeArrowUp
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
