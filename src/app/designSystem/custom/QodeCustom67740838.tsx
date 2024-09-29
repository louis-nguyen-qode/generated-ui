// id="677:40838"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom39131660 } from "@designSystem/custom/QodeCustom39131660"

export interface QodeCustom67740838Props {
  property_1?: "Default" | "Variant2" | "Variant3" | "Variant4"
}

export const QodeCustom67740838: React.FC<
  QodeCustom67740838Props & { style?: CSSProperties }
> = ({ property_1 = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Generating" id="677:40838" type="COMPONENT_SET" */}
      {/* id="677:40839" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="677:40839" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "8px",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
                boxShadow: "0px 0px 0px 3px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="spinner" id="677:40840" type="INSTANCE" */}
            <QodeCustom39131660
              style={{ ...{ width: "24px", height: "24px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="677:40842" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="677:40842" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "8px",
                alignItems: "center",
                gap: "10px",
                borderRadius: "999px",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
                boxShadow: "0px 0px 0px 3px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="spinner" id="677:40843" type="INSTANCE" */}
            <QodeCustom39131660
              style={{
                ...{
                  width: "24px",
                  height: "24px",
                  transform: "rotate(-90deg)",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="677:40845" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="677:40845" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "8px",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
                boxShadow: "0px 0px 0px 3px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="spinner" id="677:40846" type="INSTANCE" */}
            <QodeCustom39131660
              style={{ ...{ width: "24px", height: "24px" }, ...{} }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="677:40848" */}
      {`${property_1}` === `Variant4` && (
        <>
          {/* name="Property 1=Variant4" id="677:40848" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                padding: "8px",
                alignItems: "center",
                gap: "10px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
                boxShadow: "0px 0px 0px 3px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="spinner" id="677:40849" type="INSTANCE" */}
            <QodeCustom39131660
              style={{
                ...{
                  width: "24px",
                  height: "24px",
                  transform: "rotate(90deg)",
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
