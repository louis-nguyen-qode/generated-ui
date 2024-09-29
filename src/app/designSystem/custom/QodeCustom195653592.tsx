// id="1956:53592"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg195655461 from "@designSystem/icon/svg/QodeSvg195655461"
import QodeSvg195655462 from "@designSystem/icon/svg/QodeSvg195655462"

export interface QodeCustom195653592Props {
  property_1?: "Variant3" | "4"
}

export const QodeCustom195653592: React.FC<
  QodeCustom195653592Props & { style?: CSSProperties }
> = ({ property_1 = "Variant3", style, ...rest }) => {
  return (
    <>
      {/* name="Interview" id="1956:53592" type="COMPONENT_SET" */}
      {/* id="1793:46877" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="1793:46877" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "129px",
                padding: "8px 4px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "1px solid var(--border-border-primary-20, #158de2)",
                background: "var(--blue-techblue-5, #f8fcff)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Skill`}</span>
            {/* name="Frame 37482" id="1793:46948" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "46px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    width: "46px",
                    height: "20px",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
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
              {/* name="Line 30" id="1793:46880" type="LINE" */}
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
          </div>
        </>
      )}
      {/* id="1956:55454" */}
      {`${property_1}` === `4` && (
        <>
          {/* name="Property 1=4" id="1956:55454" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "116px",
                padding: "8px 4px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-base, 8px)",
              },
              ...style,
            }}
          >
            {/* name="Group 46" id="1956:55460" type="GROUP" */}
            <Flex style={{ ...{ width: "65px", height: "65px" }, ...{} }}>
              {/* name="Ellipse 8" id="1956:55461" type="ELLIPSE" */}
              <QodeSvg195655461
                style={{
                  ...{
                    width: "65px",
                    height: "65px",
                    flexShrink: "0",
                    fill: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Ellipse 8" id="1956:55462" type="ELLIPSE" */}
              <QodeSvg195655462
                style={{
                  ...{
                    width: "65px",
                    height: "65px",
                    flexShrink: "0",
                    fill: "var(--blue-techblue-50, #1597f4)",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
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
            </Flex>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "500",
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
