// id="340:19060"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom23316647 } from "@designSystem/custom/QodeCustom23316647"
import { QodeCustom228149165 } from "@designSystem/custom/QodeCustom228149165"
import { QodeCustom813733 } from "@designSystem/custom/QodeCustom813733"
import { QodeCustom228149016 } from "@designSystem/custom/QodeCustom228149016"
import { QodeCustom228149015 } from "@designSystem/custom/QodeCustom228149015"
import { QodeCustom813738 } from "@designSystem/custom/QodeCustom813738"
import { QodeCustom130 } from "@designSystem/custom/QodeCustom130"
import { QodeCustom1408523 } from "@designSystem/custom/QodeCustom1408523"
import { QodeCustom38323966 } from "@designSystem/custom/QodeCustom38323966"
import { QodeCustom32829446 } from "@designSystem/custom/QodeCustom32829446"
import { QodeCustom38323962 } from "@designSystem/custom/QodeCustom38323962"
import { QodeCustom32828485 } from "@designSystem/custom/QodeCustom32828485"

export interface QodeCustom34019060Props {
  step?: "1" | "2" | "Step3"
}

export const QodeCustom34019060: React.FC<
  QodeCustom34019060Props & { style?: CSSProperties }
> = ({ step = "1", style, ...rest }) => {
  return (
    <>
      {/* name="Modal/Add job" id="340:19060" type="COMPONENT_SET" */}
      {/* id="117:5795" */}
      {`${step}` === `1` && (
        <>
          {/* name="Step=1" id="117:5795" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "540px",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="Modal/Header" id="113:11578" type="INSTANCE" */}
            <QodeCustom23316647
              style={{
                ...{
                  display: "flex",
                  height: "42px",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                },
                ...{},
              }}
              {...{ size: "md" }}
            />
            {/* name="body" id="113:11296" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "482px",
                  padding: "20px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Button" id="113:11334" type="INSTANCE" */}
              <QodeCustom228149165
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flexShrink: "0",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Upload JD",
                  iconLeft: true,
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: true,
                }}
              />
              {/* name="Wrap" id="113:11299" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Input__Text Area" id="113:11591" type="INSTANCE" */}
                <QodeCustom813733
                  style={{
                    ...{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    title:
                      "Paste a Job description\n\nor Describe your ideal candidates\n(e.g., 'Project Manager with 5 years of experience in Jakarta')\n\nor Enter a boolean search\n(e.g., 'Full-stack Developer' AND 'Java' AND 'Hanoi, Vietnam')",
                    state: "default",
                    size: "default",
                  }}
                />
              </div>
            </div>
            {/* name="Modal/Action" id="340:20401" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 20px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--background-bg-neutral-5, #f8f6f6)",
                },
                ...{},
              }}
            >
              {/* name="Wrap" id="340:20402" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    height: "32px",
                    alignItems: "center",
                    gap: "12px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Button" id="340:20404" type="INSTANCE" */}
                <QodeCustom228149016
                  style={{
                    ...{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding: "4px 16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      flex: "1 0 0",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "1px solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Cancel",
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button next" id="340:20585" type="INSTANCE" */}
                <QodeCustom228149015
                  style={{
                    ...{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding: "4px 16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      flex: "1 0 0",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "1px solid var(--border-border-primary-30, #107ecc)",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{
                    iconRight: true,
                    buttonname: "Next",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="2108:107156" */}
      {`${step}` === `Step3` && (
        <>
          {/* name="Step=Step3" id="2108:107156" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "540px",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="Modal/Header" id="2108:107157" type="INSTANCE" */}
            <QodeCustom23316647
              style={{
                ...{
                  display: "flex",
                  height: "42px",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                },
                ...{},
              }}
              {...{ size: "md" }}
            />
            {/* name="body" id="2108:107158" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "482px",
                  padding: "20px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Button" id="2108:107159" type="INSTANCE" */}
              <QodeCustom228149165
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flexShrink: "0",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-20, #158de2)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Upload JD",
                  iconLeft: true,
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: true,
                }}
              />
              {/* name="Wrap" id="2108:107160" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Input__Text Area" id="2108:107161" type="INSTANCE" */}
                <QodeCustom813738
                  style={{
                    ...{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                      alignItems: "flex-start",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    title:
                      "Job Description:\nWe are looking for an experienced Senior Software Developer with a strong background in Java, Python (including Django), PHP, and cloud-based microservices architecture. The ideal candidate will design, develop, and maintain scalable applications, ensuring optimal performance and seamless integration with cloud services.\n\nRequiremnts:\n\n5+ years of experience in software development.\nStrong proficiency in Java, Python/Django, and PHP.\nHands-on experience with cloud microservices architecture (AWS or Azure).\nExcellent problem-solving skills and ability to work in a fast-paced environment.\n\nNice to have:\nExperience with DevOps tools and CI/CD pipelines.\nFamiliarity with containerization technologies (Docker, Kubernetes).\n\n\n\n\n\n\n",
                    state: "filled",
                    size: "default",
                  }}
                />
              </div>
            </div>
            {/* name="Modal/Action" id="2108:107162" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 20px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--background-bg-neutral-5, #f8f6f6)",
                },
                ...{},
              }}
            >
              {/* name="Wrap" id="2108:107163" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    height: "32px",
                    alignItems: "center",
                    gap: "12px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Button" id="2108:107164" type="INSTANCE" */}
                <QodeCustom228149016
                  style={{
                    ...{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding: "4px 16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      flex: "1 0 0",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "1px solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Cancel",
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button next" id="2108:107165" type="INSTANCE" */}
                <QodeCustom228149015
                  style={{
                    ...{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding: "4px 16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      flex: "1 0 0",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "1px solid var(--border-border-primary-30, #107ecc)",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{
                    iconRight: true,
                    buttonname: "Next",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="340:19061" */}
      {`${step}` === `2` && (
        <>
          {/* name="Step=2" id="340:19061" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "540px",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="Modal/Header" id="340:19062" type="INSTANCE" */}
            <QodeCustom23316647
              style={{
                ...{
                  display: "flex",
                  height: "42px",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                },
                ...{},
              }}
              {...{ size: "md" }}
            />
            {/* name="body" id="340:19063" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "482px",
                  maxHeight: "500px",
                  padding: "20px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Header" id="340:20735" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                  },
                  ...{},
                }}
              >
                {/* name="Icon" id="340:20699" type="FRAME" */}
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
                      border:
                        "1px solid var(--border-border-primary-30, #107ecc)",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                >
                  {/* name="briefcase" id="340:20700" type="INSTANCE" */}
                  <QodeCustom130
                    style={{
                      ...{ width: "24px", height: "24px", flexShrink: "0" },
                      ...{},
                    }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-size-sizemd-20px, 20px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                    },
                    ...{},
                  }}
                >{`Confirm role`}</span>
              </div>
              {/* name="Input" id="340:20752" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Title" id="340:20682" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Input__Label" id="340:20683" type="INSTANCE" */}
                  <QodeCustom1408523
                    style={{
                      ...{
                        display: "flex",
                        width: "150px",
                        height: "var(--size-height-controlheight, 32px)",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "Job title",
                      showIcon: true,
                      required: true,
                      direction: "horizontal",
                      size: "default",
                    }}
                  />
                  {/* name="Input/Text" id="340:20684" type="INSTANCE" */}
                  <QodeCustom38323966
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "10px 12px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        alignSelf: "stretch",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "1px solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      showClear: true,
                      suffix: "SUF",
                      title: "Senior Software Engineer",
                      prefix: "PRE",
                      state: "filled",
                      status: "default",
                      size: "default",
                    }}
                  />
                </div>
                {/* name="Title" id="340:20703" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Input__Label" id="340:20704" type="INSTANCE" */}
                  <QodeCustom1408523
                    style={{
                      ...{
                        display: "flex",
                        width: "150px",
                        height: "var(--size-height-controlheight, 32px)",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "Location",
                      showIcon: true,
                      required: true,
                      direction: "horizontal",
                      size: "default",
                    }}
                  />
                  {/* name="Input/Select" id="557:30971" type="INSTANCE" */}
                  <QodeCustom32829446
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "0px var(--size-padding-paddingsm, 12px)",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        alignSelf: "stretch",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "1px solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--neutral-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      iconr: true,
                      title: "Ho Chi Minh city, Vietnam",
                      state: "filled",
                      size: "default",
                      type: "basic",
                      status: "default",
                    }}
                  />
                </div>
                {/* name="Title" id="340:20719" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Input__Label" id="340:20720" type="INSTANCE" */}
                  <QodeCustom1408523
                    style={{
                      ...{
                        display: "flex",
                        width: "150px",
                        height: "var(--size-height-controlheight, 32px)",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "Requirements",
                      showIcon: true,
                      direction: "horizontal",
                      size: "default",
                    }}
                  />
                  {/* name="Input" id="340:20753" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "8px",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Input/Text" id="340:20754" type="INSTANCE" */}
                    <QodeCustom38323962
                      style={{
                        ...{
                          display: "flex",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "10px 12px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "8px",
                          alignSelf: "stretch",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-neutral-30, #d5d5d5)",
                          background: "var(--background-bg-white, #fff)",
                        },
                        ...{},
                      }}
                      {...{
                        showIconRight: true,
                        suffix: "SUF",
                        title: "Add skills",
                        prefix: "PRE",
                        showClear: true,
                        state: "default",
                        status: "default",
                        size: "default",
                      }}
                    />
                    {/* name="Emails" id="340:20755" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          alignItems: "flex-start",
                          alignContent: "flex-start",
                          gap: "8px",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          flexWrap: "wrap",
                        },
                        ...{},
                      }}
                    >
                      {/* name="Tag" id="340:20756" type="INSTANCE" */}
                      <QodeCustom32828485
                        style={{
                          ...{
                            display: "flex",
                            height: "30px",
                            padding: "0px 12px",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "4px",
                            border:
                              "1px solid var(--primary-primary-40, #64b9f5)",
                            background: "var(--primary-primary-10, #d6eeff)",
                          },
                          ...{},
                        }}
                        {...{
                          showRIcon: true,
                          color: "primary",
                          state: "default",
                          size: "Default",
                          rounded: "False",
                        }}
                      />
                      {/* name="Tag" id="340:20757" type="INSTANCE" */}
                      <QodeCustom32828485
                        style={{
                          ...{
                            display: "flex",
                            height: "30px",
                            padding: "0px 12px",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "4px",
                            border:
                              "1px solid var(--primary-primary-40, #64b9f5)",
                            background: "var(--primary-primary-10, #d6eeff)",
                          },
                          ...{},
                        }}
                        {...{
                          showRIcon: true,
                          color: "primary",
                          state: "default",
                          size: "Default",
                          rounded: "False",
                        }}
                      />
                      {/* name="Tag" id="340:20758" type="INSTANCE" */}
                      <QodeCustom32828485
                        style={{
                          ...{
                            display: "flex",
                            height: "30px",
                            padding: "0px 12px",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "4px",
                            border:
                              "1px solid var(--primary-primary-40, #64b9f5)",
                            background: "var(--primary-primary-10, #d6eeff)",
                          },
                          ...{},
                        }}
                        {...{
                          showRIcon: true,
                          color: "primary",
                          state: "default",
                          size: "Default",
                          rounded: "False",
                        }}
                      />
                      {/* name="Tag" id="340:20776" type="INSTANCE" */}
                      <QodeCustom32828485
                        style={{
                          ...{
                            display: "flex",
                            height: "30px",
                            padding: "0px 12px",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "4px",
                            border:
                              "1px solid var(--primary-primary-40, #64b9f5)",
                            background: "var(--primary-primary-10, #d6eeff)",
                          },
                          ...{},
                        }}
                        {...{
                          showRIcon: true,
                          color: "primary",
                          state: "default",
                          size: "Default",
                          rounded: "False",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* name="Modal/Action" id="340:20638" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 20px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--background-bg-neutral-5, #f8f6f6)",
                },
                ...{},
              }}
            >
              {/* name="Wrap" id="340:20639" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    height: "32px",
                    alignItems: "center",
                    gap: "12px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Button" id="340:20640" type="INSTANCE" */}
                <QodeCustom228149016
                  style={{
                    ...{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding: "4px 16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      flex: "1 0 0",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "1px solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Back",
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button find" id="340:20641" type="INSTANCE" */}
                <QodeCustom228149015
                  style={{
                    ...{
                      display: "flex",
                      height: "var(--size-height-controlheight, 32px)",
                      padding: "4px 16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      flex: "1 0 0",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "1px solid var(--border-border-primary-30, #107ecc)",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{
                    iconLeft: true,
                    buttonname: "Find candidates",
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
