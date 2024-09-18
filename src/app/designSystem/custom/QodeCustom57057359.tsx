// id="5705:7359"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom57057359Props {
  property_1?: "Formatter" | "Chat"
}

export const QodeCustom57057359: React.FC<
  QodeCustom57057359Props & { style?: CSSProperties }
> = ({ property_1 = "Formatter", style, ...rest }) => {
  return (
    <>
      {/* name="Rich text action" id="5705:7359" type="COMPONENT_SET" */}
      {/* id="5705:7358" */}
      {`${property_1}` === `Formatter` && (
        <>
          {/* name="Property 1=Formatter" id="5705:7358" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "180px",
                padding: "8px 0px",
                alignItems: "center",
                gap: "12px",
              },
              ...style,
            }}
          >
            {/* name="w" id="5705:7341" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "4px" },
                ...{},
              }}
            >
              {/* name="bold" id="5705:7342" type="INSTANCE" */}
              <Icon.QodeBold
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              {/* name="italic" id="5705:7343" type="INSTANCE" */}
              <Icon.QodeItalic
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              {/* name="underline" id="5705:7344" type="INSTANCE" */}
              <Icon.QodeUnderline
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
            </div>
            {/* name="divider" id="5705:7345" type="LINE" */}
            <Flex
              style={{
                ...{
                  width: "1px",
                  height: "12px",
                  background: "var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Frame 2" id="5705:7346" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "4px" },
                ...{},
              }}
            >
              {/* name="list-ul" id="5705:7347" type="INSTANCE" */}
              <Icon.QodeListUl
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              {/* name="list-ol" id="5705:7348" type="INSTANCE" */}
              <Icon.QodeListOl
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
            </div>
            {/* name="divider" id="5705:7349" type="LINE" */}
            <Flex
              style={{
                ...{
                  width: "1px",
                  height: "12px",
                  background: "var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="font" id="5705:7350" type="GROUP" */}
            <Flex
              style={{
                ...{ width: "20px", height: "20px", flexShrink: "0" },
                ...{},
              }}
            >
              {/* name="link" id="5705:7351" type="INSTANCE" */}
              <Icon.QodeLink
                style={{
                  ...{ width: "20px", height: "20px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="5705:7360" */}
      {`${property_1}` === `Chat` && (
        <>
          {/* name="Property 1=Chat" id="5705:7360" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "8px 0px",
                alignItems: "center",
                gap: "12px",
              },
              ...style,
            }}
          >
            {/* name="w" id="5705:7361" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "8px" },
                ...{},
              }}
            >
              {/* name="image" id="5705:7384" type="INSTANCE" */}
              <Icon.QodeImage
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              {/* name="face-smile" id="5705:7386" type="INSTANCE" */}
              <Icon.QodeFaceSmile
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              {/* name="link" id="5705:7388" type="INSTANCE" */}
              <Icon.QodeLink
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
