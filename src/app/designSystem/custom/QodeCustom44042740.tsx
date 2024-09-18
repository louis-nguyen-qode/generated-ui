// id="440:42740"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom44042740Props {
  property_1?: "Default" | "Active"
}

export const QodeCustom44042740: React.FC<
  QodeCustom44042740Props & { style?: CSSProperties }
> = ({ property_1 = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Table/filter" id="440:42740" type="COMPONENT_SET" */}
      {/* id="440:42741" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="440:42741" type="COMPONENT" */}
          <div
            style={{
              ...{ width: "16px", height: "16px", flexShrink: "0" },
              ...style,
            }}
          >
            {/* name="filter" id="440:42743" type="INSTANCE" */}
            <Icon.QodeFilter
              style={{
                ...{ width: "16px", height: "16px", position: "absolute" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="440:42742" */}
      {`${property_1}` === `Active` && (
        <>
          {/* name="Property 1=Active" id="440:42742" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "16px",
                height: "16px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="filter" id="440:42744" type="INSTANCE" */}
            <Icon.QodeFilter
              style={{
                ...{ width: "16px", height: "16px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
