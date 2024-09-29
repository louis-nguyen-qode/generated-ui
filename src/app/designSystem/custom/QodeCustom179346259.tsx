// id="1793:46259"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom149454872 } from "@designSystem/custom/QodeCustom149454872"

export interface QodeCustom179346259Props {
  property_1?: "Default" | "Variant2" | "Variant3"
}

export const QodeCustom179346259: React.FC<
  QodeCustom179346259Props & { style?: CSSProperties }
> = ({ property_1 = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Timestamp" id="1793:46259" type="COMPONENT_SET" */}
      {/* id="1494:54876" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="1494:54876" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "229px",
                alignItems: "flex-start",
                gap: "4px",
              },
              ...style,
            }}
          >
            {/* name="Interview" id="1494:54873" type="INSTANCE" */}
            <QodeCustom149454872
              style={{
                ...{
                  display: "flex",
                  width: "50px",
                  padding: "2px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--neutral-white, #fff)",
                },
                ...{},
              }}
              {...{ property_1: "Time" }}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{` Introduction and background`}</span>
          </div>
        </>
      )}
      {/* id="1842:47627" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="1842:47627" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "229px",
                alignItems: "flex-start",
                gap: "4px",
              },
              ...style,
            }}
          >
            {/* name="Interview" id="1842:47628" type="INSTANCE" */}
            <QodeCustom149454872
              style={{
                ...{
                  display: "flex",
                  width: "50px",
                  padding: "2px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--neutral-white, #fff)",
                },
                ...{},
              }}
              {...{ property_1: "Time" }}
            />
            <span
              style={{
                ...{
                  flex: "1 0 0",
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{` Introduction and background`}</span>
          </div>
        </>
      )}
      {/* id="1793:46260" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="1793:46260" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "229px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
              },
              ...style,
            }}
          >
            {/* name="Interview" id="1793:46261" type="INSTANCE" */}
            <QodeCustom149454872
              style={{
                ...{
                  display: "flex",
                  width: "50px",
                  padding: "2px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--neutral-white, #fff)",
                },
                ...{},
              }}
              {...{ property_1: "Time" }}
            />
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{` Introduction and background`}</span>
          </div>
        </>
      )}
    </>
  )
}
