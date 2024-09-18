// id="78:8769"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom788769Props {
  showTalker?: boolean
  person?: "Interviewer" | "Interviewee"
}

export const QodeCustom788769: React.FC<
  QodeCustom788769Props & { style?: CSSProperties }
> = ({ showTalker = true, person = "Interviewer", style, ...rest }) => {
  return (
    <>
      {/* name="Chat bubble" id="78:8769" type="COMPONENT_SET" */}
      {/* id="78:8770" */}
      {`${person}` === `Interviewer` && (
        <>
          {/* name="Person=Interviewer" id="78:8770" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "280px",
                flexDirection: "column",
                alignItems: "flex-start",
              },
              ...style,
            }}
          >
            {/* name="content" id="78:8771" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "var(--size-padding-paddingsm, 12px)",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  borderRadius: "12px",
                  background: "var(--background-bg-neutral-10, #e3e3e3)",
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
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci`}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheighsm, 20px) /* 166.667% */",
                },
                ...{},
              }}
            >{`Interviewer`}</span>
          </div>
        </>
      )}
      {/* id="78:8774" */}
      {`${person}` === `Interviewee` && (
        <>
          {/* name="Person=Interviewee" id="78:8774" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "280px",
                flexDirection: "column",
                alignItems: "flex-end",
              },
              ...style,
            }}
          >
            {/* name="content" id="78:8775" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "var(--size-padding-paddingsm, 12px)",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  borderRadius: "12px",
                  background: "var(--blue-techblue-70, #107ecc)",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortextsolid, #fff)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci`}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-40, #464646)",
                  textAlign: "right",
                  fontFamily: 'var(--font-family-fontfamily, "sf pro display")',
                  fontSize: "var(--font-size-small, 12px)",
                  fontStyle: "italic",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheighsm, 20px) /* 166.667% */",
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
