// id="1384:45971"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom44042683 } from "@designSystem/custom/QodeCustom44042683"

export interface QodeCustom138445971Props {
  screensize?: "1600" | "1280" | "1366" | "1440"
}

export const QodeCustom138445971: React.FC<
  QodeCustom138445971Props & { style?: CSSProperties }
> = ({ screensize = "1280", style, ...rest }) => {
  return (
    <>
      {/* name="Responsive/Interviews" id="1384:45971" type="COMPONENT_SET" */}
      {/* id="1384:45970" */}
      {`${screensize}` === `1280` && (
        <>
          {/* name="screensize=1280" id="1384:45970" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Tab | Interview" id="440:51084" type="INSTANCE" */}
            <QodeCustom44042683
              style={{
                ...{
                  display: "flex",
                  width: "1280px",
                  height: "768px",
                  alignItems: "center",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ pagination: true }}
            />
          </div>
        </>
      )}
      {/* id="1384:45969" */}
      {`${screensize}` === `1366` && (
        <>
          {/* name="screensize=1366" id="1384:45969" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Tab | Interview" id="440:51464" type="INSTANCE" */}
            <QodeCustom44042683
              style={{
                ...{
                  display: "flex",
                  width: "1366px",
                  height: "768px",
                  alignItems: "center",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ pagination: true }}
            />
          </div>
        </>
      )}
      {/* id="1384:45968" */}
      {`${screensize}` === `1440` && (
        <>
          {/* name="screensize=1440" id="1384:45968" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Tab | Interview" id="440:51843" type="INSTANCE" */}
            <QodeCustom44042683
              style={{
                ...{
                  display: "flex",
                  width: "1440px",
                  height: "1024px",
                  alignItems: "center",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ pagination: true }}
            />
          </div>
        </>
      )}
      {/* id="1384:45967" */}
      {`${screensize}` === `1600` && (
        <>
          {/* name="screensize=1600" id="1384:45967" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Tab | Interview" id="440:52222" type="INSTANCE" */}
            <QodeCustom44042683
              style={{
                ...{
                  display: "flex",
                  width: "1600px",
                  height: "900px",
                  alignItems: "center",
                  background: "#FFF",
                },
                ...{},
              }}
              {...{ pagination: true }}
            />
          </div>
        </>
      )}
    </>
  )
}
