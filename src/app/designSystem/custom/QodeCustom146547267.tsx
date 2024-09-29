// id="1465:47267"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom146547267Props {
  state?: "default" | "hover"
}

export const QodeCustom146547267: React.FC<
  QodeCustom146547267Props & { style?: CSSProperties }
> = ({ state = "default", style, ...rest }) => {
  return (
    <>
      {/* name="Special button/Sign in Linkedin" id="1465:47267" type="COMPONENT_SET" */}
      {/* id="1465:47266" */}
      {`${state}` === `default` && (
        <>
          {/* name="state=default" id="1465:47266" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "215px",
                height: "40px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Sign-In-Large---Default" id="1465:47263" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "215px",
                  height: "40px",
                  flexShrink: "0",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="1465:47265" */}
      {`${state}` === `hover` && (
        <>
          {/* name="state=hover" id="1465:47265" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "215px",
                height: "40px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Sign-In-Large---Hover" id="1465:47264" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "215px",
                  height: "40px",
                  flexShrink: "0",
                  background:
                    "url(<path-to-image>) lightgray 50% / cover no-repeat",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
