// id="664:31668"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg66431806 from "@designSystem/icon/svg/QodeSvg66431806"
import QodeSvg67733736 from "@designSystem/icon/svg/QodeSvg67733736"

export interface QodeCustom66431668Props {
  property_1?: "2" | "1" | "Variant3"
}

export const QodeCustom66431668: React.FC<
  QodeCustom66431668Props & { style?: CSSProperties }
> = ({ property_1 = "1", style, ...rest }) => {
  return (
    <>
      {/* name="Interview/List item" id="664:31668" type="COMPONENT_SET" */}
      {/* id="664:31667" */}
      {`${property_1}` === `1` && (
        <>
          {/* name="Property 1=1" id="664:31667" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "59px",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="circle-check" id="664:31653" type="INSTANCE" */}
            <Icon.QodeCircleCheck
              style={{
                ...{ width: "12px", height: "12px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            {/* name="Line 37" id="664:31654" type="LINE" */}
            <Flex
              style={{
                ...{
                  width: "1px",
                  height: "43px",
                  background: "var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="664:31666" */}
      {`${property_1}` === `2` && (
        <>
          {/* name="Property 1=2" id="664:31666" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "59px",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="circle" id="664:31806" type="FRAME" */}
            <QodeSvg66431806
              style={{
                ...{ width: "12px", height: "12px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            {/* name="Line 37" id="664:31659" type="LINE" */}
            <Flex
              style={{
                ...{
                  width: "1px",
                  height: "43px",
                  background: "var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="677:33735" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="677:33735" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "59px",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="circle" id="677:33736" type="FRAME" */}
            <QodeSvg67733736
              style={{
                ...{ width: "12px", height: "12px", flexShrink: "0" },
                ...{},
              }}
              {...{}}
            />
            {/* name="Line 37" id="677:33738" type="LINE" */}
            <Flex
              style={{
                ...{
                  width: "1px",
                  height: "43px",
                  background: "var(--border-border-neutral-30, #d5d5d5)",
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
