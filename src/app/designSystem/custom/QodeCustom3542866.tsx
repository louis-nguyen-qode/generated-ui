// id="354:2866"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom11437490 } from "@designSystem/custom/QodeCustom11437490"

export interface QodeCustom3542866Props {
  icon?: React.ReactNode
  state?: "default" | "hover"
}

export const QodeCustom3542866: React.FC<
  QodeCustom3542866Props & { style?: CSSProperties }
> = ({ icon = undefined, state = "default", style, ...rest }) => {
  return (
    <>
      {/* name=".floatbutton__item" id="354:2866" type="COMPONENT_SET" */}
      {/* id="354:2865" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="354:2865" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-background-colorbgcontainer, #fff)",
              },
              ...style,
            }}
          >
            {/* name="🎰 icon" id="354:2862" type="INSTANCE" */}
            <QodeCustom11437490
              style={{ ...{ width: "24px", height: "24px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="354:2867" */}
      {`${state}` === `hover` && (
        <>
          {/* name="state=hover" id="354:2867" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "var(--style-radius-borderradiussm, 6px)",
                background:
                  "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
              },
              ...style,
            }}
          >
            {/* name="🎰 icon" id="354:2868" type="INSTANCE" */}
            <QodeCustom11437490
              style={{ ...{ width: "24px", height: "24px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
    </>
  )
}
