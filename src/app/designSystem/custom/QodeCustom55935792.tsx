// id="559:35792"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom228149026 } from "@designSystem/custom/QodeCustom228149026"

export interface QodeCustom55935792Props {
  property_1?: "Default" | "Variant2" | "Variant3"
}

export const QodeCustom55935792: React.FC<
  QodeCustom55935792Props & { style?: CSSProperties }
> = ({ property_1 = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="CV" id="559:35792" type="COMPONENT_SET" */}
      {/* id="559:35790" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="559:35790" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "340px",
                padding: "16px 20px",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom:
                  "1px solid var(--border-border-neutral-30, #d5d5d5)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-heading6, 16px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                },
                ...{},
              }}
            >{`CV`}</span>
            {/* name="Button" id="559:35784" type="INSTANCE" */}
            <QodeCustom228149026
              style={{
                ...{
                  display: "flex",
                  width: "90px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Upload",
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="559:35793" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="559:35793" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "340px",
                padding: "16px 20px",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom:
                  "1px solid var(--border-border-neutral-30, #d5d5d5)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-heading6, 16px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                },
                ...{},
              }}
            >{`CV`}</span>
            {/* name="Button" id="559:35795" type="INSTANCE" */}
            <QodeCustom228149026
              style={{
                ...{
                  display: "flex",
                  width: "90px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Uploading...",
                type: "default",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="559:35801" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="559:35801" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "340px",
                padding: "16px 20px",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom:
                  "1px solid var(--border-border-neutral-30, #d5d5d5)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-heading6, 16px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                },
                ...{},
              }}
            >{`CV`}</span>
            {/* name="Button" id="559:35803" type="INSTANCE" */}
            <QodeCustom228149026
              style={{
                ...{
                  display: "flex",
                  width: "90px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "View",
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
