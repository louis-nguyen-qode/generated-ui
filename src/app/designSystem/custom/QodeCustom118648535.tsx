// id="1186:48535"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom228149026 } from "@designSystem/custom/QodeCustom228149026"

export interface QodeCustom118648535Props {
  type?: "Microphone" | "Camera"
  active?: "false" | "true"
}

export const QodeCustom118648535: React.FC<
  QodeCustom118648535Props & { style?: CSSProperties }
> = ({ type = "Camera", active = "true", style, ...rest }) => {
  return (
    <>
      {/* name="Meeting/Toggles" id="1186:48535" type="COMPONENT_SET" */}
      {/* id="1186:48534" */}
      {`${type}` === `Camera` && `${active}` === `true` && (
        <>
          {/* name="type=Camera, active=true" id="1186:48534" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "flex", width: "110px", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Button" id="1186:48492" type="INSTANCE" */}
            <QodeCustom228149026
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  flex: "1 0 0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Camera: ON",
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="1186:48533" */}
      {`${type}` === `Microphone` && `${active}` === `true` && (
        <>
          {/* name="type=Microphone, active=true" id="1186:48533" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "flex", width: "125px", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Button" id="1186:48510" type="INSTANCE" */}
            <QodeCustom228149026
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  flex: "1 0 0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Microphone: ON",
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="1186:48532" */}
      {`${type}` === `Microphone` && `${active}` === `false` && (
        <>
          {/* name="type=Microphone, active=false" id="1186:48532" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "flex", width: "125px", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Button" id="1186:48516" type="INSTANCE" */}
            <QodeCustom228149026
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  flex: "1 0 0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Microphone: OFF",
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="1186:48531" */}
      {`${type}` === `Camera` && `${active}` === `false` && (
        <>
          {/* name="type=Camera, active=false" id="1186:48531" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "flex", width: "110px", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Button" id="1186:48504" type="INSTANCE" */}
            <QodeCustom228149026
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  flex: "1 0 0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Camera: OFF",
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
