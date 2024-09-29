// id="1278:37226"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom169 } from "@designSystem/custom/QodeCustom169"
import { QodeCustom127837278 } from "@designSystem/custom/QodeCustom127837278"

export interface QodeCustom127837226Props {
  option?: boolean
  property_1?: "on" | "off"
  _style?: "simple"
}

export const QodeCustom127837226: React.FC<
  QodeCustom127837226Props & { style?: CSSProperties }
> = ({
  option = true,
  property_1 = "on",
  _style = "simple",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Interviewbtn/Camera" id="1278:37226" type="COMPONENT_SET" */}
      {/* id="1331:39605" */}
      {`${property_1}` === `on` && `${_style}` === `simple` && (
        <>
          {/* name="Property 1=on, style=simple" id="1331:39605" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="1331:39607" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "var(--size-size-sizexs-8px, 8px)",
                  border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...{},
              }}
            >
              {/* name="video" id="1331:39608" type="INSTANCE" */}
              <QodeCustom169
                style={{
                  ...{ width: "24px", height: "24px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
      {/* id="1331:39669" */}
      {`${property_1}` === `off` && `${_style}` === `simple` && (
        <>
          {/* name="Property 1=off, style=simple" id="1331:39669" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
              },
              ...style,
            }}
          >
            {/* name="Icon" id="1331:39670" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "8px",
                  border: "1px solid var(--border-border-red-10, #fa866c)",
                  background: "var(--red-red-10, #fed5cb)",
                },
                ...{},
              }}
            >
              {/* name="video-slash" id="1331:39671" type="INSTANCE" */}
              <QodeCustom127837278
                style={{
                  ...{ width: "24px", height: "24px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
