// id="216:21816"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg21923526 from "@designSystem/icon/svg/QodeSvg21923526"
import QodeSvg21923826 from "@designSystem/icon/svg/QodeSvg21923826"
import { QodeCustom21923838 } from "@designSystem/custom/QodeCustom21923838"
import QodeSvg21923844 from "@designSystem/icon/svg/QodeSvg21923844"
import QodeSvg21923879 from "@designSystem/icon/svg/QodeSvg21923879"
import QodeSvg21923885 from "@designSystem/icon/svg/QodeSvg21923885"
import QodeSvg21923886 from "@designSystem/icon/svg/QodeSvg21923886"
import QodeSvg37820445 from "@designSystem/icon/svg/QodeSvg37820445"
import QodeSvg37820446 from "@designSystem/icon/svg/QodeSvg37820446"
import QodeSvg37820448 from "@designSystem/icon/svg/QodeSvg37820448"

export interface QodeCustom21621816Props {
  type?:
    | "Expertise"
    | "Industry experience"
    | "Leadership"
    | "Tech stack"
    | "Fluency"
    | "Skeleton"
}

export const QodeCustom21621816: React.FC<
  QodeCustom21621816Props & { style?: CSSProperties }
> = ({ type = "Expertise", style, ...rest }) => {
  return (
    <>
      {/* name="Reason to hire" id="216:21816" type="COMPONENT_SET" */}
      {/* id="40:5376" */}
      {`${type}` === `Expertise` && (
        <>
          {/* name="type=Expertise" id="40:5376" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "224.8px",
                height: "148px",
                padding: "16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Header" id="40:7494" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Icon/Expertise" id="219:23526" type="FRAME" */}
              <QodeSvg21923526
                style={{
                  ...{
                    width: "24px",
                    height: "24px",
                    fill: "var(--neutral-gray-90, #464646)",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Expertise`}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Proven expertise with many certificates & awards including Employee of the year.`}</span>
          </div>
        </>
      )}
      {/* id="216:21817" */}
      {`${type}` === `Industry experience` && (
        <>
          {/* name="type=Industry experience" id="216:21817" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "224.8px",
                height: "148px",
                padding: "16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Header" id="216:21818" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Icon/Industry experience" id="219:23826" type="FRAME" */}
              <QodeSvg21923826
                style={{
                  ...{
                    width: "24px",
                    height: "24px",
                    fill: "var(--neutral-gray-90, #464646)",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Industry Experience`}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Over 5 years of experience in Banking domain and other CRM applications.`}</span>
          </div>
        </>
      )}
      {/* id="216:21822" */}
      {`${type}` === `Leadership` && (
        <>
          {/* name="type=Leadership" id="216:21822" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "224.8px",
                height: "148px",
                padding: "16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Frame 37259" id="216:21823" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Icon/Leadership" id="219:23835" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "4px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--radius-border-radius-sm, 2px)",
                    background: "var(--neutral-gray-90, #464646)",
                  },
                  ...{},
                }}
              >
                {/* name="users" id="219:23842" type="INSTANCE" */}
                <QodeCustom21923838
                  style={{
                    ...{ width: "16px", height: "16px", flexShrink: "0" },
                    ...{},
                  }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Leadership`}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Able to manage a taem of junior and mid developers and work with different types of stakeholders.`}</span>
          </div>
        </>
      )}
      {/* id="219:23501" */}
      {`${type}` === `Tech stack` && (
        <>
          {/* name="type=Tech stack" id="219:23501" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "224.8px",
                height: "148px",
                padding: "16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Header" id="219:23502" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Icon/Techstack" id="219:23844" type="FRAME" */}
              <QodeSvg21923844
                style={{
                  ...{
                    width: "24px",
                    height: "24px",
                    fill: "var(--neutral-gray-90, #464646)",
                  },
                  ...{},
                }}
                {...{}}
              />
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Tech stack`}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Back-end: Java, PHP, Python, Go and other langauges.`}</span>
          </div>
        </>
      )}
      {/* id="219:23506" */}
      {`${type}` === `Fluency` && (
        <>
          {/* name="type=Fluency" id="219:23506" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "224.8px",
                height: "148px",
                padding: "16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Header" id="219:23507" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Icon/Fluency" id="219:23863" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "5px 3px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--radius-border-radius-sm, 2px)",
                    background: "var(--neutral-gray-90, #464646)",
                  },
                  ...{},
                }}
              >
                {/* name="Group 44" id="219:23887" type="GROUP" */}
                <Flex
                  style={{
                    ...{
                      width: "18px",
                      height: "var(--font-size-base, 14px)",
                      flexShrink: "0",
                    },
                    ...{},
                  }}
                >
                  {/* name="language" id="219:23879" type="FRAME" */}
                  <QodeSvg21923879
                    style={{
                      ...{ width: "18px", height: "12px", flexShrink: "0" },
                      ...{},
                    }}
                    {...{}}
                  />
                  {/* name="Line 27" id="219:23885" type="VECTOR" */}
                  <QodeSvg21923885
                    style={{
                      ...{
                        width: "var(--font-size-base, 14px)",
                        height: "0px",
                        flexShrink: "0",
                        strokeWidth: "1px",
                        stroke: "#FFF",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  {/* name="Line 28" id="219:23886" type="VECTOR" */}
                  <QodeSvg21923886
                    style={{
                      ...{
                        width: "var(--font-size-base, 14px)",
                        height: "0px",
                        flexShrink: "0",
                        strokeWidth: "1px",
                        stroke: "#FFF",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                </Flex>
              </div>
              <span
                style={{
                  ...{
                    flex: "1 0 0",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Language fluency`}</span>
            </div>
            <span
              style={{
                ...{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "var(--font-size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--line-height-lineheight, 20px) /* 142.857% */",
                },
                ...{},
              }}
            >{`Mentioned fluency in English (IELTS 8.0) and Japanese.`}</span>
          </div>
        </>
      )}
      {/* id="378:20430" */}
      {`${type}` === `Skeleton` && (
        <>
          {/* name="type=Skeleton" id="378:20430" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "224.8px",
                height: "148px",
                padding: "16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
              },
              ...style,
            }}
          >
            {/* name="Header" id="378:20431" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Icon/Fluency" id="378:20432" type="FRAME" */}
              <div
                style={{
                  ...{
                    width: "24px",
                    height: "24px",
                    borderRadius: "var(--radius-border-radius-sm, 2px)",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
              >
                <></>
              </div>
              {/* name="Rectangle 52" id="378:20441" type="RECTANGLE" */}
              <Flex
                style={{
                  ...{
                    height: "12px",
                    flex: "1 0 0",
                    borderRadius: "var(--radius-border-radius-sm, 2px)",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
            </div>
            {/* name="Frame 37366" id="378:20447" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-size-sizexxs-6px, 6px)",
                },
                ...{},
              }}
            >
              {/* name="Rectangle 52" id="378:20445" type="VECTOR" */}
              <QodeSvg37820445
                style={{
                  ...{
                    width: "193px",
                    height: "12px",
                    fill: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Rectangle 53" id="378:20446" type="VECTOR" */}
              <QodeSvg37820446
                style={{
                  ...{
                    width: "162px",
                    height: "12px",
                    fill: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Rectangle 54" id="378:20448" type="VECTOR" */}
              <QodeSvg37820448
                style={{
                  ...{
                    width: "111px",
                    height: "12px",
                    fill: "var(--neutral-gray-10, #e3e3e3)",
                  },
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
