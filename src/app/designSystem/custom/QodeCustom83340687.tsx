// id="833:40687"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom83340687Props {
  property_1?: "Default" | "Variant2" | "Variant3"
}

export const QodeCustom83340687: React.FC<
  QodeCustom83340687Props & { style?: CSSProperties }
> = ({ property_1 = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="1" id="833:40687" type="COMPONENT_SET" */}
      {/* id="833:40688" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="833:40688" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "600px",
                height: "600px",
                justifyContent: "flex-end",
                alignItems: "center",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="a" id="833:40689" type="GROUP" */}
            <Flex
              style={{
                ...{ width: "1300px", height: "1300px", flexShrink: "0" },
                ...{},
              }}
            >
              {/* name="mask" id="833:40690" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "1300px",
                    height: "1300px",
                    flexShrink: "0",
                    background: "#FFF",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Rectangle 10" id="833:40691" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "831.5px",
                    height: "831.5px",
                    transform: "rotate(-90deg)",
                    flexShrink: "0",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
            </Flex>
          </div>
        </>
      )}
      {/* id="833:40692" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="833:40692" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "600px",
                height: "600px",
                justifyContent: "flex-end",
                alignItems: "center",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="a" id="833:40693" type="GROUP" */}
            <Flex
              style={{
                ...{ width: "1300px", height: "1300px", flexShrink: "0" },
                ...{},
              }}
            >
              {/* name="mask" id="833:40694" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "1300px",
                    height: "1300px",
                    flexShrink: "0",
                    background: "#FFF",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Rectangle 10" id="833:40695" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "1038.5px",
                    height: "1038.5px",
                    transform: "rotate(-90deg)",
                    flexShrink: "0",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
            </Flex>
          </div>
        </>
      )}
      {/* id="833:40696" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="833:40696" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "600px",
                height: "600px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="a" id="833:40697" type="GROUP" */}
            <Flex
              style={{
                ...{
                  width: "1477.935px",
                  height: "1477.935px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              {/* name="mask" id="833:40698" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "1477.935px",
                    height: "1477.935px",
                    flexShrink: "0",
                    background: "#FFF",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Rectangle 10" id="833:40699" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    width: "1260.5px",
                    height: "1260.5px",
                    transform: "rotate(-90deg)",
                    flexShrink: "0",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
