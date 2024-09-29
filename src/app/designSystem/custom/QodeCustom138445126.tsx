// id="1384:45126"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom43438297 } from "@designSystem/custom/QodeCustom43438297"

export interface QodeCustom138445126Props {
  screensize?: "1280" | "1600" | "1440" | "1366"
}

export const QodeCustom138445126: React.FC<
  QodeCustom138445126Props & { style?: CSSProperties }
> = ({ screensize = "1280", style, ...rest }) => {
  return (
    <>
      {/* name="Responsive/Job interviewed" id="1384:45126" type="COMPONENT_SET" */}
      {/* id="1384:45125" */}
      {`${screensize}` === `1280` && (
        <>
          {/* name="screensize=1280" id="1384:45125" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Interviewed" id="434:38457" type="INSTANCE" */}
            <QodeCustom43438297
              style={{
                ...{
                  display: "flex",
                  width: "1280px",
                  height: "768px",
                  alignItems: "flex-start",
                  background: "var(--app-bg, #f4f4f6)",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="1384:45124" */}
      {`${screensize}` === `1366` && (
        <>
          {/* name="screensize=1366" id="1384:45124" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Interviewed" id="434:38870" type="INSTANCE" */}
            <QodeCustom43438297
              style={{
                ...{
                  display: "flex",
                  width: "1366px",
                  height: "768px",
                  alignItems: "flex-start",
                  background: "var(--app-bg, #f4f4f6)",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="1384:45123" */}
      {`${screensize}` === `1440` && (
        <>
          {/* name="screensize=1440" id="1384:45123" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Interviewed" id="434:39282" type="INSTANCE" */}
            <QodeCustom43438297
              style={{
                ...{
                  display: "flex",
                  width: "1440px",
                  height: "1024px",
                  alignItems: "flex-start",
                  background: "var(--app-bg, #f4f4f6)",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="1384:45122" */}
      {`${screensize}` === `1600` && (
        <>
          {/* name="screensize=1600" id="1384:45122" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Interviewed" id="434:39694" type="INSTANCE" */}
            <QodeCustom43438297
              style={{
                ...{
                  display: "flex",
                  width: "1600px",
                  height: "900px",
                  alignItems: "flex-start",
                  background: "var(--app-bg, #f4f4f6)",
                },
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
