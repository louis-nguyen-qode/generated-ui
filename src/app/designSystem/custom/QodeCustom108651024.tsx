// id="1086:51024"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom118648534 } from "@designSystem/custom/QodeCustom118648534"
import { QodeCustom118648533 } from "@designSystem/custom/QodeCustom118648533"
import { QodeCustom228149029 } from "@designSystem/custom/QodeCustom228149029"

export interface QodeCustom108651024Props {
  property_1?: "Disabled" | "Enabled"
}

export const QodeCustom108651024: React.FC<
  QodeCustom108651024Props & { style?: CSSProperties }
> = ({ property_1 = "Disabled", style, ...rest }) => {
  return (
    <>
      {/* name="Video" id="1086:51024" type="COMPONENT_SET" */}
      {/* id="1086:51023" */}
      {`${property_1}` === `Disabled` && (
        <>
          {/* name="Property 1=Disabled" id="1086:51023" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "549px",
                height: "344px",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Video" id="1086:50985" type="FRAME" */}
            <div
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-large, 12px)",
                  background: "var(--neutral-gray-90, #464646)",
                },
                ...{},
              }}
            >
              <></>
            </div>
            {/* name="Config" id="1186:48711" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "224px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Toggles" id="1186:48713" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "center", gap: "4px" },
                  ...{},
                }}
              >
                {/* name="Meeting/Toggles" id="1186:48714" type="INSTANCE" */}
                <QodeCustom118648534
                  style={{
                    ...{
                      display: "flex",
                      width: "110px",
                      alignItems: "flex-start",
                    },
                    ...{},
                  }}
                  {...{ type: "Camera", active: true }}
                />
                {/* name="Meeting/Toggles" id="1186:48715" type="INSTANCE" */}
                <QodeCustom118648533
                  style={{
                    ...{
                      display: "flex",
                      width: "125px",
                      alignItems: "flex-start",
                    },
                    ...{},
                  }}
                  {...{ type: "Microphone", active: true }}
                />
              </div>
              {/* name="Button" id="1990:59250" type="INSTANCE" */}
              <QodeCustom228149029
                style={{
                  ...{
                    display: "flex",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    flex: "1 0 0",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Report an issue",
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="1086:51022" */}
      {`${property_1}` === `Enabled` && (
        <>
          {/* name="Property 1=Enabled" id="1086:51022" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "549px",
                height: "344px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-large, 12px)",
              },
              ...style,
            }}
          >
            {/* name="Photo on 19-09-2024 at 16.25 1" id="1086:50987" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRadius: "12px",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Config" id="1990:59506" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "224px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Toggles" id="1990:59507" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "center", gap: "4px" },
                  ...{},
                }}
              >
                {/* name="Meeting/Toggles" id="1990:59508" type="INSTANCE" */}
                <QodeCustom118648534
                  style={{
                    ...{
                      display: "flex",
                      width: "110px",
                      alignItems: "flex-start",
                    },
                    ...{},
                  }}
                  {...{ type: "Camera", active: true }}
                />
                {/* name="Meeting/Toggles" id="1990:59509" type="INSTANCE" */}
                <QodeCustom118648533
                  style={{
                    ...{
                      display: "flex",
                      width: "125px",
                      alignItems: "flex-start",
                    },
                    ...{},
                  }}
                  {...{ type: "Microphone", active: true }}
                />
              </div>
              {/* name="Button" id="1990:59510" type="INSTANCE" */}
              <QodeCustom228149029
                style={{
                  ...{
                    display: "flex",
                    padding: "4px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    flex: "1 0 0",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Report an issue",
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
