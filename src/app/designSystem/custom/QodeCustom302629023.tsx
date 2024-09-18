// id="3026:29023"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg302629025 from "@designSystem/icon/svg/QodeSvg302629025"
import QodeSvg302629026 from "@designSystem/icon/svg/QodeSvg302629026"
import { QodeCustom302629015 } from "@designSystem/custom/QodeCustom302629015"
import { QodeCustom302629017 } from "@designSystem/custom/QodeCustom302629017"
import QodeSvg302629031 from "@designSystem/icon/svg/QodeSvg302629031"
import QodeSvg302629032 from "@designSystem/icon/svg/QodeSvg302629032"

export interface QodeCustom302629023Props {
  endPoint?: React.ReactNode
  startPoint?: React.ReactNode
  line?: "Solid" | "Dashed"
}

export const QodeCustom302629023: React.FC<
  QodeCustom302629023Props & { style?: CSSProperties }
> = ({
  endPoint = undefined,
  startPoint = undefined,
  line = "Solid",
  ...rest
}) => {
  return (
    <>
      {/* name="Fork" id="3026:29023" type="COMPONENT_SET" */}
      {/* id="3026:29024" */}
      {`${line}` === `Solid` && (
        <>
          {/* name="Line=Solid" id="3026:29024" type="COMPONENT" */}
          <div style={{ width: "82px", height: "120px", flexShrink: "0" }}>
            {/* name="Line" id="3026:29025" type="VECTOR" */}
            <QodeSvg302629025
              style={{
                width: "30.79px",
                height: "120px",
                flexShrink: "0",
                strokeWidth: "1.5px",
                stroke: "var(--brands-gray-900, #18181b)",
              }}
              {...{}}
            />
            {/* name="Line" id="3026:29026" type="VECTOR" */}
            <QodeSvg302629026
              style={{
                width: "48.017px",
                height: "0px",
                flexShrink: "0",
                strokeWidth: "1.5px",
                stroke: "var(--brands-gray-900, #18181b)",
              }}
              {...{}}
            />
            {/* name="Arrow" id="3026:29027" type="INSTANCE" */}
            <QodeCustom302629015
              style={{ width: "8px", height: "8px", flexShrink: "0" }}
              {...{}}
            />
            {/* name="Arrow" id="3026:29028" type="INSTANCE" */}
            <QodeCustom302629015
              style={{ width: "8px", height: "8px", flexShrink: "0" }}
              {...{}}
            />
            {/* name="Circle" id="3026:29029" type="INSTANCE" */}
            <QodeCustom302629017
              style={{ width: "8px", height: "8px", flexShrink: "0" }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="3026:29030" */}
      {`${line}` === `Dashed` && (
        <>
          {/* name="Line=Dashed" id="3026:29030" type="COMPONENT" */}
          <div style={{ width: "82px", height: "120px", flexShrink: "0" }}>
            {/* name="Line" id="3026:29031" type="VECTOR" */}
            <QodeSvg302629031
              style={{
                width: "30.356px",
                height: "120px",
                flexShrink: "0",
                strokeWidth: "1.5px",
                stroke: "var(--brands-gray-900, #18181b)",
              }}
              {...{}}
            />
            {/* name="Line" id="3026:29032" type="VECTOR" */}
            <QodeSvg302629032
              style={{
                width: "47.465px",
                height: "0px",
                flexShrink: "0",
                strokeWidth: "1.5px",
                stroke: "var(--brands-gray-900, #18181b)",
              }}
              {...{}}
            />
            {/* name="Arrow" id="3026:29033" type="INSTANCE" */}
            <QodeCustom302629015
              style={{ width: "8px", height: "8px", flexShrink: "0" }}
              {...{}}
            />
            {/* name="Arrow" id="3026:29034" type="INSTANCE" */}
            <QodeCustom302629015
              style={{ width: "8px", height: "8px", flexShrink: "0" }}
              {...{}}
            />
            {/* name="Circle" id="3026:29035" type="INSTANCE" */}
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
