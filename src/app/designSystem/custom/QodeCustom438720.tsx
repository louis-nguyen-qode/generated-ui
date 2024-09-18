// id="43:8720"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom438720Props {
  state?: "Default" | "Hovered" | "Empty"
}

export const QodeCustom438720: React.FC<
  QodeCustom438720Props & { style?: CSSProperties }
> = ({ state = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Special button/Shortlist" id="43:8720" type="COMPONENT_SET" */}
      {/* id="43:8719" */}
      {`${state}` === `Default` && (
        <>
          {/* name="State=Default" id="43:8719" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "40px",
                padding: "8px 20px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-primary-20, #158de2)",
                background: "var(--neutral-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Shortlisted`}</span>
            {/* name="counter" id="40:10775" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "99px",
                  background: "var(--blue-techblue-60, #158de2)",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-white, #fff)",
                    textAlign: "right",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`12`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="313:24755" */}
      {`${state}` === `Empty` && (
        <>
          {/* name="State=Empty" id="313:24755" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "40px",
                padding: "8px 20px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Shortlisted`}</span>
            {/* name="counter" id="313:24757" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "99px",
                  background: "var(--neutral-gray-60, #6f6f6f)",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-white, #fff)",
                    textAlign: "right",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`0`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="43:8718" */}
      {`${state}` === `Hovered` && (
        <>
          {/* name="State=Hovered" id="43:8718" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "inline-flex",
                height: "40px",
                padding: "8px 20px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-primary-20, #158de2)",
                background: "var(--blue-techblue-5, #f8fcff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "right",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Shortlisted`}</span>
            {/* name="counter" id="40:10779" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "10px",
                  borderRadius: "99px",
                  background: "var(--blue-techblue-60, #158de2)",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-white, #fff)",
                    textAlign: "right",
                    fontFamily:
                      'var(--font-family-fontfamily, "sf pro display")',
                    fontSize: "var(--font-size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--line-height-lineheight, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`12`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
