// id="1278:37235"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom125838075 } from "@designSystem/custom/QodeCustom125838075"
import { QodeCustom127037108 } from "@designSystem/custom/QodeCustom127037108"

export interface QodeCustom127837235Props {
  option?: boolean
  property_1?: "on" | "off"
  _style?: "simple"
}

export const QodeCustom127837235: React.FC<
  QodeCustom127837235Props & { style?: CSSProperties }
> = ({
  option = true,
  property_1 = "on",
  _style = "simple",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Interviewbtn/Microphone" id="1278:37235" type="COMPONENT_SET" */}
      {/* id="1331:39621" */}
      {`${property_1}` === `on` && `${_style}` === `simple` && (
        <>
          {/* name="Property 1=on, style=simple" id="1331:39621" type="COMPONENT" */}
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
            {/* name="Icon" id="1331:39624" type="FRAME" */}
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
                  border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...{},
              }}
            >
              {/* name="microphone" id="1331:39625" type="INSTANCE" */}
              <QodeCustom125838075
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
      {/* id="1331:39628" */}
      {`${property_1}` === `off` && `${_style}` === `simple` && (
        <>
          {/* name="Property 1=off, style=simple" id="1331:39628" type="COMPONENT" */}
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
            {/* name="Icon" id="1331:39631" type="FRAME" */}
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
                  border: "1px solid var(--border-border-red-10, #fa866c)",
                  background: "var(--red-red-10, #fed5cb)",
                },
                ...{},
              }}
            >
              {/* name="microphone-slash" id="1331:39632" type="INSTANCE" */}
              <QodeCustom127037108
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
