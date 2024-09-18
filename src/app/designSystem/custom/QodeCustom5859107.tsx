// id="5859:107"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom5859107Props {
  property_1?: "descending" | "ascending"
}

export const QodeCustom5859107: React.FC<
  QodeCustom5859107Props & { style?: CSSProperties }
> = ({ property_1 = "descending", ...rest }) => {
  return (
    <>
      {/* name="Table/Sort" id="5859:107" type="COMPONENT_SET" */}
      {/* id="5859:106" */}
      {`${property_1}` === `descending` && (
        <>
          {/* name="Property 1=descending" id="5859:106" type="COMPONENT" */}
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
            {/* name="arrow-down" id="5859:95" type="INSTANCE" */}
            <Icon.QodeArrowDown
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="5859:105" */}
      {`${property_1}` === `ascending` && (
        <>
          {/* name="Property 1=ascending" id="5859:105" type="COMPONENT" */}
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
            {/* name="arrow-up" id="5859:102" type="INSTANCE" */}
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
