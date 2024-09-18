// id="5959:98"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom595998Props {
  property_1?: "Default" | "Active"
}

export const QodeCustom595998: React.FC<
  QodeCustom595998Props & { style?: CSSProperties }
> = ({ property_1 = "Default", ...rest }) => {
  return (
    <>
      {/* name="Table/filter" id="5959:98" type="COMPONENT_SET" */}
      {/* id="5959:97" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="5959:97" type="COMPONENT" */}
          <div style={{ width: "16px", height: "16px", flexShrink: "0" }}>
            {/* name="filter" id="5959:91" type="INSTANCE" */}
            <Icon.QodeFilter
              style={{ width: "16px", height: "16px", position: "absolute" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="5959:96" */}
      {`${property_1}` === `Active` && (
        <>
          {/* name="Property 1=Active" id="5959:96" type="COMPONENT" */}
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
            {/* name="filter" id="5959:94" type="INSTANCE" */}
            <Icon.QodeFilter
              style={{ width: "16px", height: "16px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
