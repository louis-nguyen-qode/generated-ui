// id="221:16417"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom22116417Props {
  state?: "Default" | "Active"
}

export const QodeCustom22116417: React.FC<
  QodeCustom22116417Props & { style?: CSSProperties }
> = ({ state = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Mixer/Legend" id="221:16417" type="COMPONENT_SET" */}
      {/* id="221:16416" */}
      {`${state}` === `Default` && (
        <>
          {/* name="State=Default" id="221:16416" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                },
                ...{},
              }}
            >{`TECHNICAL`}</span>
          </div>
        </>
      )}
      {/* id="221:16418" */}
      {`${state}` === `Active` && (
        <>
          {/* name="State=Active" id="221:16418" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"Barlow Semi Condensed"',
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                },
                ...{},
              }}
            >{`TECHNICAL`}</span>
          </div>
        </>
      )}
    </>
  )
}
