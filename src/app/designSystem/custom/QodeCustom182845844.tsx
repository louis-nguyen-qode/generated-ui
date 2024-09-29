// id="1828:45844"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom1308489 } from "@designSystem/custom/QodeCustom1308489"
import { QodeCustom182845848 } from "@designSystem/custom/QodeCustom182845848"

export interface QodeCustom182845844Props {
  property_1?: "1" | "2"
}

export const QodeCustom182845844: React.FC<
  QodeCustom182845844Props & { style?: CSSProperties }
> = ({ property_1 = "1", style, ...rest }) => {
  return (
    <>
      {/* name="Icon/Verified profile" id="1828:45844" type="COMPONENT_SET" */}
      {/* id="1828:45843" */}
      {`${property_1}` === `1` && (
        <>
          {/* name="Property 1=1" id="1828:45843" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "2px",
                alignItems: "center",
                gap: "10px",
                borderRadius: "24px",
                border: "1px solid #31E643",
                background: "#EAFFEC",
              },
              ...style,
            }}
          >
            {/* name="circle-check" id="1828:45840" type="INSTANCE" */}
            <QodeCustom1308489
              style={{ ...{ width: "16px", height: "16px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="1828:45845" */}
      {`${property_1}` === `2` && (
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
      )}
    </>
  )
}
