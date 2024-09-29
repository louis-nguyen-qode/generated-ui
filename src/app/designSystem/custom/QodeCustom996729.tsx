// id="99:6729"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom996394 } from "@designSystem/custom/QodeCustom996394"
import { QodeCustom996396 } from "@designSystem/custom/QodeCustom996396"
import { QodeCustom996398 } from "@designSystem/custom/QodeCustom996398"
import { QodeCustom996400 } from "@designSystem/custom/QodeCustom996400"
import { QodeCustom996402 } from "@designSystem/custom/QodeCustom996402"
import { QodeCustom814181 } from "@designSystem/custom/QodeCustom814181"
import { QodeCustom814164 } from "@designSystem/custom/QodeCustom814164"
import { QodeCustom814177 } from "@designSystem/custom/QodeCustom814177"

export interface QodeCustom996729Props {
  property_1?: "Formatter" | "Chat"
}

export const QodeCustom996729: React.FC<
  QodeCustom996729Props & { style?: CSSProperties }
> = ({ property_1 = "Formatter", style, ...rest }) => {
  return (
    <>
      {/* name="Rich text action" id="99:6729" type="COMPONENT_SET" */}
      {/* id="99:6730" */}
      {`${property_1}` === `Formatter` && (
        <>
          {/* name="Property 1=Formatter" id="99:6730" type="COMPONENT" */}
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
            {/* name="w" id="99:6732" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "4px" },
                ...{},
              }}
            >
              {/* name="bold" id="99:6733" type="INSTANCE" */}
              <QodeCustom996394
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              {/* name="italic" id="99:6734" type="INSTANCE" */}
              <QodeCustom996396
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              {/* name="underline" id="99:6735" type="INSTANCE" */}
              <QodeCustom996398
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
            </div>
            {/* name="divider" id="99:6736" type="LINE" */}
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
            {/* name="Frame 2" id="99:6737" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "4px" },
                ...{},
              }}
            >
              {/* name="list-ul" id="99:6738" type="INSTANCE" */}
              <QodeCustom996400
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              {/* name="list-ol" id="99:6739" type="INSTANCE" */}
              <QodeCustom996402
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
            </div>
            {/* name="divider" id="99:6740" type="LINE" */}
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
            {/* name="font" id="99:6741" type="GROUP" */}
            <Flex
              style={{
                ...{ width: "20px", height: "20px", flexShrink: "0" },
                ...{},
              }}
            >
              {/* name="link" id="99:6742" type="INSTANCE" */}
              <QodeCustom814181
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
      {/* id="99:6731" */}
      {`${property_1}` === `Chat` && (
        <>
          {/* name="Property 1=Chat" id="99:6731" type="COMPONENT" */}
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
            {/* name="w" id="99:6743" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "8px" },
                ...{},
              }}
            >
              {/* name="image" id="99:6744" type="INSTANCE" */}
              <QodeCustom814164
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              {/* name="face-smile" id="99:6745" type="INSTANCE" */}
              <QodeCustom814177
                style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                {...{}}
              />
              {/* name="link" id="99:6746" type="INSTANCE" */}
              <QodeCustom814181
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
