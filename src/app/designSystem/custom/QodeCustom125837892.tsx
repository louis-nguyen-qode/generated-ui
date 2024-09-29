// id="1258:37892"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom125837892Props {
  showName?: boolean
  property_1?: "Candidate" | "Interviewer"
}

export const QodeCustom125837892: React.FC<
  QodeCustom125837892Props & { style?: CSSProperties }
> = ({ showName = true, property_1 = "Interviewer", style, ...rest }) => {
  return (
    <>
      {/* name="Chat bubble" id="1258:37892" type="COMPONENT_SET" */}
      {/* id="1258:37891" */}
      {`${property_1}` === `Interviewer` && (
        <>
          {/* name="Property 1=Interviewer" id="1258:37891" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "310px",
                flexDirection: "column",
                alignItems: "flex-start",
              },
              ...style,
            }}
          >
            {/* name="content" id="1258:37883" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  maxWidth: "280px",
                  padding: "var(--size-padding-paddingsm, 12px)",
                  alignItems: "flex-start",
                  borderRadius: "12px",
                  background:
                    "var(--color-neutral-fill-colorfilltertiary, rgba(0, 0, 0, 0.04))",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod `}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`Interviewer`}</span>
          </div>
        </>
      )}
      {/* id="1258:37890" */}
      {`${property_1}` === `Candidate` && (
        <>
          {/* name="Property 1=Candidate" id="1258:37890" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "310px",
                flexDirection: "column",
                alignItems: "flex-end",
              },
              ...style,
            }}
          >
            {/* name="content" id="1258:37887" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  maxWidth: "280px",
                  padding: "var(--size-padding-paddingsm, 12px)",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  borderRadius: "12px",
                  background: "var(--neutral-gray-95, #383838)",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--neutral-white, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  },
                  ...{},
                }}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod `}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "right",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                },
                ...{},
              }}
            >{`You`}</span>
          </div>
        </>
      )}
    </>
  )
}
