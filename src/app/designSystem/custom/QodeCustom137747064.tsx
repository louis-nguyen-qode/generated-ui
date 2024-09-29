// id="1377:47064"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom46728750 } from "@designSystem/custom/QodeCustom46728750"

export interface QodeCustom137747064Props {
  property_1?: "No sort" | "Desc" | "Asc"
}

export const QodeCustom137747064: React.FC<
  QodeCustom137747064Props & { style?: CSSProperties }
> = ({ property_1 = "Desc", style, ...rest }) => {
  return (
    <>
      {/* name="Demo sort heaer" id="1377:47064" type="COMPONENT_SET" */}
      {/* id="1377:47063" */}
      {`${property_1}` === `Desc` && (
        <>
          {/* name="Property 1=Desc" id="1377:47063" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Table/Header" id="1377:47039" type="INSTANCE" */}
            <QodeCustom46728750
              style={{
                ...{
                  display: "flex",
                  width: "135px",
                  height: "46px",
                  padding: "var(--font-size-base, 14px) 16px",
                  alignItems: "center",
                  gap: "4px",
                  borderRight:
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                  borderBottom:
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...{},
              }}
              {...{ sort: true, type: "default", align: "left" }}
            />
          </div>
        </>
      )}
      {/* id="1377:47062" */}
      {`${property_1}` === `Asc` && (
        <>
          {/* name="Property 1=Asc" id="1377:47062" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Table/Header" id="1377:47046" type="INSTANCE" */}
            <QodeCustom46728750
              style={{
                ...{
                  display: "flex",
                  width: "135px",
                  height: "46px",
                  padding: "var(--font-size-base, 14px) 16px",
                  alignItems: "center",
                  gap: "4px",
                  borderRight:
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                  borderBottom:
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...{},
              }}
              {...{ sort: true, type: "default", align: "left" }}
            />
          </div>
        </>
      )}
      {/* id="1377:47061" */}
      {`${property_1}` === `No sort` && (
        <>
          {/* name="Property 1=No sort" id="1377:47061" type="COMPONENT" */}
          <div
            style={{
              ...{ display: "inline-flex", alignItems: "flex-start" },
              ...style,
            }}
          >
            {/* name="Table/Header" id="1377:47055" type="INSTANCE" */}
            <QodeCustom46728750
              style={{
                ...{
                  display: "flex",
                  width: "135px",
                  height: "46px",
                  padding: "var(--font-size-base, 14px) 16px",
                  alignItems: "center",
                  gap: "4px",
                  borderRight:
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                  borderBottom:
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...{},
              }}
              {...{ type: "default", align: "left" }}
            />
          </div>
        </>
      )}
    </>
  )
}
