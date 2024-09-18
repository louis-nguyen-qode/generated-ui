// id="3026:29006"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg302629008 from "@designSystem/icon/svg/QodeSvg302629008"
import { QodeCustom302629015 } from "@designSystem/custom/QodeCustom302629015"
import { QodeCustom302629017 } from "@designSystem/custom/QodeCustom302629017"
import QodeSvg302629012 from "@designSystem/icon/svg/QodeSvg302629012"

export interface QodeCustom302629006Props {
  endPoint?: React.ReactNode
  startPoint?: React.ReactNode
  line?: "Solid" | "Dashed"
}

export const QodeCustom302629006: React.FC<
  QodeCustom302629006Props & { style?: CSSProperties }
> = ({
  endPoint = undefined,
  startPoint = undefined,
  line = "Solid",
  ...rest
}) => {
  return (
    <>
      {/* name="Regular" id="3026:29006" type="COMPONENT_SET" */}
      {/* id="3026:29007" */}
      {`${line}` === `Solid` && (
        <>
          {/* name="Line=Solid" id="3026:29007" type="COMPONENT" */}
          <div style={{ width: "91px", height: "8px", flexShrink: "0" }}>
            {/* name="Line" id="3026:29008" type="VECTOR" */}
            <QodeSvg302629008
              style={{
                width: "86.177px",
                height: "0px",
                flexShrink: "0",
                strokeWidth: "1.5px",
                stroke: "var(--brands-gray-900, #18181b)",
              }}
              {...{}}
            />
            {/* name="Arrow" id="3026:29009" type="INSTANCE" */}
            <QodeCustom302629015
              style={{ width: "8px", height: "8px", flexShrink: "0" }}
              {...{}}
            />
            {/* name="Circle" id="3026:29010" type="INSTANCE" */}
            <QodeCustom302629017
              style={{ width: "8px", height: "8px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="3026:29011" */}
      {`${line}` === `Dashed` && (
        <>
          {/* name="Line=Dashed" id="3026:29011" type="COMPONENT" */}
          <div style={{ width: "91px", height: "8px", flexShrink: "0" }}>
            {/* name="Line" id="3026:29012" type="VECTOR" */}
            <QodeSvg302629012
              style={{
                width: "86.039px",
                height: "0px",
                flexShrink: "0",
                strokeWidth: "1.5px",
                stroke: "var(--brands-gray-900, #18181b)",
              }}
              {...{}}
            />
            {/* name="Arrow" id="3026:29013" type="INSTANCE" */}
            <QodeCustom302629015
              style={{ width: "8px", height: "8px", flexShrink: "0" }}
              {...{}}
            />
            {/* name="Circle" id="3026:29014" type="INSTANCE" */}
            <QodeCustom302629017
              style={{ width: "8px", height: "8px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
