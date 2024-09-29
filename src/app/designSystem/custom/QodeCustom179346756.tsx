// id="1793:46756"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom179346756Props {
  property_1?: "Skill" | "Variant2"
}

export const QodeCustom179346756: React.FC<
  QodeCustom179346756Props & { style?: CSSProperties }
> = ({ property_1 = "Skill", style, ...rest }) => {
  return (
    <>
      {/* name="Interview" id="1793:46756" type="COMPONENT_SET" */}
      {/* id="1793:46661" */}
      {`${property_1}` === `Skill` && (
        <>
          {/* name="Property 1=Skill" id="1793:46661" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "136px",
                flexDirection: "column",
                alignItems: "flex-start",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Skill`}</span>
            {/* name="Frame 37479" id="1793:46640" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "flex-end", gap: "4px" },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-primary-30, #158de2)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  },
                  ...{},
                }}
              >{`70`}</span>
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-10, #bfbfbf)",
                    textAlign: "center",
                    fontFamily: '"SF Pro Display"',
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 200% */",
                  },
                  ...{},
                }}
              >{`/100`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="1793:46757" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="1793:46757" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "125px",
                padding: "0px 8px",
                flexDirection: "column",
                alignItems: "center",
                gap: "var(--size-size-sizexxs-6px, 6px)",
              },
              ...style,
            }}
          >
            {/* name="Score" id="1793:46822" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "8px 4px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-base, 8px)",
                  background: "var(--neutral-white, #fff)",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    width: "46px",
                    height: "20px",
                    color: "var(--text-text-neutral-40, #464646)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                  },
                  ...{},
                }}
              >{`70`}</span>
              {/* name="Line 30" id="1793:46824" type="LINE" */}
              <Flex
                style={{
                  ...{
                    width: "20px",
                    height: "1px",
                    background: "var(--border-border-neutral-20, #e3e3e3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-30, #656565)",
                    textAlign: "right",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "8px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "9px /* 112.5% */",
                  },
                  ...{},
                }}
              >{`100`}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Skill`}</span>
          </div>
        </>
      )}
    </>
  )
}
