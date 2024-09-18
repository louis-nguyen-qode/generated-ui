// id="531:39576"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom562954 } from "@designSystem/custom/QodeCustom562954"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom55935790 } from "@designSystem/custom/QodeCustom55935790"
import { QodeCustom54532247 } from "@designSystem/custom/QodeCustom54532247"
import { QodeCustom29615477 } from "@designSystem/custom/QodeCustom29615477"
import { QodeCustom53129006 } from "@designSystem/custom/QodeCustom53129006"
import { QodeBadge } from "@designSystem/ant/QodeBadge"
import { QodeCustom18216941 } from "@designSystem/custom/QodeCustom18216941"
import { QodeCustom1828777 } from "@designSystem/custom/QodeCustom1828777"
import { QodeRadio } from "@designSystem/ant/QodeRadio"
import { QodeCustom18210113 } from "@designSystem/custom/QodeCustom18210113"
import { QodeDropdown } from "@designSystem/ant/QodeDropdown"
import { QodeCustom188568 } from "@designSystem/custom/QodeCustom188568"
import { QodeCheckbox } from "@designSystem/ant/QodeCheckbox"
import { QodeCustom67733917 } from "@designSystem/custom/QodeCustom67733917"
import { QodeCustom67733916 } from "@designSystem/custom/QodeCustom67733916"
import { QodeCustom67733915 } from "@designSystem/custom/QodeCustom67733915"

export interface QodeCustom53139576Props {
  property_1?: "Default" | "Variant2" | "Variant4"
}

export const QodeCustom53139576: React.FC<
  QodeCustom53139576Props & { style?: CSSProperties }
> = ({ property_1 = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Talent profile" id="531:39576" type="COMPONENT_SET" */}
      {/* id="531:38865" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="531:38865" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1020px",
                height: "714px",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "12px 12px 0px 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              },
              ...style,
            }}
          >
            {/* name="Left" id="350:19701" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "340px",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--text-text-white, #fff)",
                },
                ...{},
              }}
            >
              {/* name="Card" id="350:21347" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "40px 20px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                {/* name="avatar" id="350:19702" type="INSTANCE" */}
                <QodeCustom562954
                  style={{
                    ...{
                      display: "flex",
                      width: "80px",
                      height: "80px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--font-size-large, 16px)",
                      borderRadius: "1110px",
                      background:
                        "var(--color-success-colorsuccesshover, #a3c73e)",
                    },
                    ...{},
                  }}
                  {...{ img: true, type: "Round", state: "Default" }}
                />
                {/* name="Frame 37378" id="482:27777" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Frame 37368" id="359:20178" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Name yoe" id="350:19704" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        },
                        ...{},
                      }}
                    >
                      <span
                        style={{
                          ...{
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading4, 24px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h4, 32px) /* 133.333% */",
                          },
                          ...{},
                        }}
                      >{`Nguyen Quoc Thai`}</span>
                    </div>
                    <span
                      style={{
                        ...{
                          color: "var(--text-text-neutral-20, #878787)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        },
                        ...{},
                      }}
                    >{`12 YoE`}</span>
                  </div>
                  {/* name="Frame 37356" id="350:20568" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "4px",
                        alignSelf: "stretch",
                      },
                      ...{},
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
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        },
                        ...{},
                      }}
                    >{`Senior Software Developer at The Chemico Vietnam`}</span>
                    {/* name="Location" id="350:19709" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4px",
                          alignSelf: "stretch",
                        },
                        ...{},
                      }}
                    >
                      {/* name="location-dot" id="350:19710" type="INSTANCE" */}
                      <Icon.QodeLocationDot
                        style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                        {...{}}
                      />
                      <span
                        style={{
                          ...{
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          },
                          ...{},
                        }}
                      >{`Ho Chi Minh city, Vietnam`}</span>
                    </div>
                  </div>
                </div>
                {/* name="Frame 37376" id="482:27764" type="FRAME" */}
                <div
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "8px" },
                    ...{},
                  }}
                >
                  {/* name="Button" id="482:28782" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        width: "110px",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "4px 16px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      selectIconLeft: <Icon.QodePaperPlane />,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Contact",
                      iconLeft: true,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="Button" id="521:29469" type="INSTANCE" */}
                <QodeButton
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      position: "absolute",
                      right: "20px",
                      top: "20px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeEllipsis />,
                    buttonname: "Edit",
                    selectIconLeft: <Icon.QodeEllipsis />,
                    iconLeft: true,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
              {/* name="CV" id="559:35813" type="INSTANCE" */}
              <QodeCustom55935790
                style={{
                  ...{
                    display: "flex",
                    padding: "16px 20px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
              {/* name="Job status" id="350:21336" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "16px 20px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Header" id="352:19620" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
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
                  >{`Job status`}</span>
                  {/* name="Button" id="352:19621" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        width: "53px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        padding: "4px 8px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Assign",
                      selectIconLeft: <Icon.QodePlus />,
                      iconLeft: true,
                      type: "link",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="wr" id="469:26943" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "12px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Job status" id="545:32248" type="INSTANCE" */}
                  <QodeCustom54532247
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  {/* name="Job status" id="545:32289" type="INSTANCE" */}
                  <QodeCustom54532247
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  {/* name="Job status" id="545:32330" type="INSTANCE" */}
                  <QodeCustom54532247
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                </div>
              </div>
            </div>
            {/* name="Right" id="350:20567" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "var(--app-bg, #f4f4f6)",
                },
                ...{},
              }}
            >
              {/* name="Tabs" id="482:28767" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "8px 24px 0px 24px",
                    alignItems: "center",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--neutral-white, #fff)",
                  },
                  ...{},
                }}
              >
                {/* name="🧬 tab 1" id="482:28768" type="INSTANCE" */}
                <QodeCustom29615477
                  style={{
                    ...{
                      display: "flex",
                      padding: "12px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderBottom:
                        "2px solid var(--border-border-primary-20, #158de2)",
                    },
                    ...{},
                  }}
                  {...{
                    icon: <Icon.QodeUser />,
                    showIcon: true,
                    title: "Profile",
                    size: "default",
                    position: "top",
                    state: "active",
                  }}
                />
                {/* name="🧬 tab 2" id="482:28769" type="INSTANCE" */}
                <QodeCustom29615477
                  style={{
                    ...{
                      display: "flex",
                      padding: "12px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                    },
                    ...{},
                  }}
                  {...{
                    icon: <Icon.QodeGrid2 />,
                    showIcon: true,
                    title: "Notes",
                    size: "default",
                    position: "top",
                    state: "default",
                  }}
                />
                {/* name="🧬 tab 3" id="482:28770" type="INSTANCE" */}
                <QodeCustom29615477
                  style={{
                    ...{
                      display: "flex",
                      padding: "12px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                    },
                    ...{},
                  }}
                  {...{
                    icon: <Icon.QodeVideo />,
                    showIcon: true,
                    title: "Interviews",
                    size: "default",
                    position: "top",
                    state: "default",
                  }}
                />
              </div>
              {/* name="Profile" id="482:27457" type="INSTANCE" */}
              <QodeCustom53129006
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 20px 20px 20px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{ property_1: "Variant2" }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="531:39577" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="531:39577" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1020px",
                height: "714px",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "12px 12px 0px 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              },
              ...style,
            }}
          >
            {/* name="Left" id="531:39578" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "340px",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--text-text-white, #fff)",
                },
                ...{},
              }}
            >
              {/* name="Card" id="531:39579" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "40px 20px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                {/* name="avatar" id="531:39580" type="INSTANCE" */}
                <QodeCustom562954
                  style={{
                    ...{
                      display: "flex",
                      width: "80px",
                      height: "80px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--font-size-large, 16px)",
                      borderRadius: "1110px",
                      background:
                        "var(--color-success-colorsuccesshover, #a3c73e)",
                    },
                    ...{},
                  }}
                  {...{ img: true, type: "Round", state: "Default" }}
                />
                {/* name="Frame 37378" id="531:39581" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Frame 37368" id="531:39582" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Name yoe" id="531:39583" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        },
                        ...{},
                      }}
                    >
                      <span
                        style={{
                          ...{
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading4, 24px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h4, 32px) /* 133.333% */",
                          },
                          ...{},
                        }}
                      >{`Nguyen Quoc Thai`}</span>
                    </div>
                    <span
                      style={{
                        ...{
                          color: "var(--text-text-neutral-20, #878787)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        },
                        ...{},
                      }}
                    >{`12 YoE`}</span>
                  </div>
                  {/* name="Frame 37356" id="531:39586" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "4px",
                        alignSelf: "stretch",
                      },
                      ...{},
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
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        },
                        ...{},
                      }}
                    >{`Senior Software Developer at The Chemico Vietnam`}</span>
                    {/* name="Location" id="531:39588" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4px",
                          alignSelf: "stretch",
                        },
                        ...{},
                      }}
                    >
                      {/* name="location-dot" id="531:39589" type="INSTANCE" */}
                      <Icon.QodeLocationDot
                        style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                        {...{}}
                      />
                      <span
                        style={{
                          ...{
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          },
                          ...{},
                        }}
                      >{`Ho Chi Minh city, Vietnam`}</span>
                    </div>
                  </div>
                </div>
                {/* name="Frame 37376" id="531:39591" type="FRAME" */}
                <div
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "8px" },
                    ...{},
                  }}
                >
                  {/* name="Button" id="531:39592" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        width: "110px",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "4px 16px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      selectIconLeft: <Icon.QodePaperPlane />,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Contact",
                      iconLeft: true,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="Button" id="531:39593" type="INSTANCE" */}
                <QodeButton
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      position: "absolute",
                      right: "20px",
                      top: "20px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeEllipsis />,
                    buttonname: "Edit",
                    selectIconLeft: <Icon.QodeEllipsis />,
                    iconLeft: true,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
              {/* name="CV" id="559:35899" type="INSTANCE" */}
              <QodeCustom55935790
                style={{
                  ...{
                    display: "flex",
                    padding: "16px 20px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
              {/* name="Job status" id="545:32848" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "16px 20px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Header" id="545:32849" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
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
                  >{`Job status`}</span>
                  {/* name="Button" id="545:32851" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        width: "53px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        padding: "4px 8px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Assign",
                      selectIconLeft: <Icon.QodePlus />,
                      iconLeft: true,
                      type: "link",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="wr" id="545:32852" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "12px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Job status" id="545:32853" type="INSTANCE" */}
                  <QodeCustom54532247
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  {/* name="Job status" id="545:32854" type="INSTANCE" */}
                  <QodeCustom54532247
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  {/* name="Job status" id="545:32855" type="INSTANCE" */}
                  <QodeCustom54532247
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                </div>
                {/* name="Frame 37363" id="545:32856" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Frame 37363" id="545:32857" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--size-size-sizexxs-6px, 6px)",
                      },
                      ...{},
                    }}
                  >
                    {/* name="briefcase" id="545:32858" type="INSTANCE" */}
                    <Icon.QodeBriefcase
                      style={{
                        ...{
                          display: "flex",
                          width: "16px",
                          height: "16px",
                          padding: "1.6px 1.6px 2.4px 1.6px",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        ...{},
                      }}
                      {...{}}
                    />
                    {/* name="Frame 37360" id="545:32859" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                        },
                        ...{},
                      }}
                    >
                      <span
                        style={{
                          ...{
                            color: "var(--text-text-neutral-40, #464646)",
                            textAlign: "right",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          },
                          ...{},
                        }}
                      >{`Frontend developer`}</span>
                    </div>
                  </div>
                  {/* name="Frame 37361" id="545:32861" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Badge__Status" id="545:32862" type="INSTANCE" */}
                    <QodeBadge
                      style={{
                        ...{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        },
                        ...{},
                      }}
                      {...{ showLabel: true, status: "warning" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* name="Right" id="531:39621" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Tabs" id="531:39622" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "8px 24px 0px 24px",
                    alignItems: "center",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--neutral-white, #fff)",
                  },
                  ...{},
                }}
              >
                {/* name="🧬 tab 1" id="531:39623" type="INSTANCE" */}
                <QodeCustom29615477
                  style={{
                    ...{
                      display: "flex",
                      padding: "12px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                    },
                    ...{},
                  }}
                  {...{
                    icon: <Icon.QodeUser />,
                    showIcon: true,
                    title: "Profile",
                    size: "default",
                    position: "top",
                    state: "default",
                  }}
                />
                {/* name="🧬 tab 2" id="531:39624" type="INSTANCE" */}
                <QodeCustom29615477
                  style={{
                    ...{
                      display: "flex",
                      padding: "12px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderBottom:
                        "2px solid var(--border-border-primary-20, #158de2)",
                    },
                    ...{},
                  }}
                  {...{
                    icon: <Icon.QodeGrid2 />,
                    showIcon: true,
                    title: "Notes",
                    size: "default",
                    position: "top",
                    state: "active",
                  }}
                />
                {/* name="🧬 tab 3" id="531:39625" type="INSTANCE" */}
                <QodeCustom29615477
                  style={{
                    ...{
                      display: "flex",
                      padding: "12px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                    },
                    ...{},
                  }}
                  {...{
                    icon: <Icon.QodeVideo />,
                    showIcon: true,
                    title: "Interviews",
                    size: "default",
                    position: "top",
                    state: "default",
                  }}
                />
              </div>
              {/* name="Frame 37383" id="531:39953" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "20px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "16px",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                {/* name="Input__Text Area" id="531:39954" type="INSTANCE" */}
                <QodeCustom18216941
                  style={{
                    ...{
                      display: "flex",
                      height: "220px",
                      padding:
                        "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      alignSelf: "stretch",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    title: "Write your notes here",
                    state: "default",
                    size: "default",
                  }}
                />
                {/* name="Screenings" id="531:39955" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "20px",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "20px",
                      alignSelf: "stretch",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--neutral-white, #fff)",
                    },
                    ...{},
                  }}
                >
                  {/* name="Title" id="531:39957" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Input__Label" id="531:39958" type="INSTANCE" */}
                    <QodeCustom1828777
                      style={{
                        ...{
                          display: "flex",
                          width: "125px",
                          height: "var(--size-height-controlheight, 32px)",
                          alignItems: "center",
                          gap: "var(--size-padding-paddingxxs, 4px)",
                        },
                        ...{},
                      }}
                      {...{
                        icon: <Icon.QodeImageUser />,
                        title: "Basic info",
                        showIcon: true,
                        direction: "horizontal",
                        size: "default",
                      }}
                    />
                    {/* name="Radio/Basic" id="531:39959" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          alignItems: "center",
                          gap: "24px",
                          flex: "1 0 0",
                        },
                        ...{},
                      }}
                    >
                      {/* name="Frame 37386" id="531:39960" type="FRAME" */}
                      <div
                        style={{
                          ...{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          },
                          ...{},
                        }}
                      >
                        {/* name="🧬 item 1" id="531:39961" type="INSTANCE" */}
                        <QodeRadio
                          style={{
                            ...{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "var(--size-padding-paddingxs, 8px)",
                            },
                            ...{},
                          }}
                          {...{
                            showTitle: true,
                            title: "Male",
                            state: "default",
                            checked: false,
                          }}
                        />
                        {/* name="🧬 item 2" id="531:39962" type="INSTANCE" */}
                        <QodeRadio
                          style={{
                            ...{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "var(--size-padding-paddingxs, 8px)",
                            },
                            ...{},
                          }}
                          {...{
                            showTitle: true,
                            title: "Female",
                            state: "default",
                            checked: false,
                          }}
                        />
                        {/* name="🧬 item 3" id="531:39963" type="INSTANCE" */}
                        <QodeRadio
                          style={{
                            ...{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "var(--size-padding-paddingxs, 8px)",
                            },
                            ...{},
                          }}
                          {...{
                            showTitle: true,
                            title: "Other",
                            state: "default",
                            checked: false,
                          }}
                        />
                      </div>
                      {/* name="Input/Text" id="531:39964" type="INSTANCE" */}
                      <QodeCustom18210113
                        style={{
                          ...{
                            display: "flex",
                            height: "var(--size-height-controlheight, 32px)",
                            padding: "10px 12px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            flex: "1 0 0",
                            borderRadius: "var(--border-radius-base, 8px)",
                            border:
                              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                            background: "var(--background-bg-white, #fff)",
                          },
                          ...{},
                        }}
                        {...{
                          suffix: "SUF",
                          title: "Age or DoB",
                          prefix: "PRE",
                          iconRight: <Icon.QodeClockEight />,
                          iconLeft: <Icon.QodeUser />,
                          showClear: true,
                          state: "default",
                          status: "default",
                          size: "default",
                        }}
                      />
                    </div>
                  </div>
                  {/* name="Line 2" id="531:39965" type="LINE" */}
                  <Flex
                    style={{
                      ...{
                        
                        height: "1px",
                        background: "var(--border-border-neutral-20, #e3e3e3)",
                      },
                      ...{},
                    }}
                  >
                    <></>
                  </Flex>
                  {/* name="Time" id="531:39966" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "24px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Input__Label" id="531:39967" type="INSTANCE" */}
                    <QodeCustom1828777
                      style={{
                        ...{
                          display: "flex",
                          width: "125px",
                          height: "var(--size-height-controlheight, 32px)",
                          alignItems: "center",
                          gap: "var(--size-padding-paddingxxs, 4px)",
                        },
                        ...{},
                      }}
                      {...{
                        icon: <Icon.QodeMoneyBillWave />,
                        title: "Salary",
                        showIcon: true,
                        direction: "horizontal",
                        size: "default",
                      }}
                    />
                    {/* name="Frame 37384" id="531:39968" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          gap: "10px",
                          flex: "1 0 0",
                        },
                        ...{},
                      }}
                    >
                      {/* name="Time" id="531:39969" type="FRAME" */}
                      <div
                        style={{
                          ...{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            alignSelf: "stretch",
                          },
                          ...{},
                        }}
                      >
                        {/* name="Input/Text" id="531:39970" type="INSTANCE" */}
                        <QodeCustom18210113
                          style={{
                            ...{
                              display: "flex",
                              height: "var(--size-height-controlheight, 32px)",
                              padding: "10px 12px",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "8px",
                              flex: "1 0 0",
                              borderRadius: "var(--border-radius-base, 8px)",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                              background: "var(--background-bg-white, #fff)",
                            },
                            ...{},
                          }}
                          {...{
                            suffix: "SUF",
                            title: "Current",
                            prefix: "PRE",
                            iconRight: <Icon.QodeClockEight />,
                            iconLeft: <Icon.QodeUser />,
                            showClear: true,
                            state: "default",
                            status: "default",
                            size: "default",
                          }}
                        />
                        {/* name="Input/Text" id="531:39971" type="INSTANCE" */}
                        <QodeCustom18210113
                          style={{
                            ...{
                              display: "flex",
                              height: "var(--size-height-controlheight, 32px)",
                              padding: "10px 12px",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "8px",
                              flex: "1 0 0",
                              borderRadius: "var(--border-radius-base, 8px)",
                              border:
                                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                              background: "var(--background-bg-white, #fff)",
                            },
                            ...{},
                          }}
                          {...{
                            suffix: "SUF",
                            title: "Expected",
                            prefix: "PRE",
                            iconRight: <Icon.QodeCalendarDays />,
                            iconLeft: <Icon.QodeUser />,
                            showClear: true,
                            state: "default",
                            status: "default",
                            size: "default",
                          }}
                        />
                        {/* name="Dropdown" id="531:39972" type="INSTANCE" */}
                        <QodeDropdown
                          style={{
                            ...{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "flex-start",
                              gap: "16px",
                            },
                            ...{},
                          }}
                          {...{ type: "button basic", active: false }}
                        />
                      </div>
                      {/* name="Radio/Basic" id="531:39973" type="INSTANCE" */}
                      <QodeCustom188568
                        style={{
                          ...{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "12px",
                          },
                          ...{},
                        }}
                        {...{ items: "2", direction: "horizontal" }}
                      />
                    </div>
                  </div>
                  {/* name="Line 3" id="531:39974" type="LINE" */}
                  <Flex
                    style={{
                      ...{
                        
                        height: "1px",
                        background: "var(--border-border-neutral-20, #e3e3e3)",
                      },
                      ...{},
                    }}
                  >
                    <></>
                  </Flex>
                  {/* name="Date" id="531:39975" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "24px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Input__Label" id="531:39976" type="INSTANCE" */}
                    <QodeCustom1828777
                      style={{
                        ...{
                          display: "flex",
                          width: "125px",
                          height: "var(--size-height-controlheight, 32px)",
                          alignItems: "center",
                          gap: "var(--size-padding-paddingxxs, 4px)",
                        },
                        ...{},
                      }}
                      {...{
                        icon: <Icon.QodeClockThree />,
                        title: "Notice period",
                        showIcon: true,
                        direction: "horizontal",
                        size: "default",
                      }}
                    />
                    {/* name="Frame 37385" id="531:39977" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          flex: "1 0 0",
                        },
                        ...{},
                      }}
                    >
                      {/* name="Input/Text" id="531:39978" type="INSTANCE" */}
                      <QodeCustom18210113
                        style={{
                          ...{
                            display: "flex",
                            height: "var(--size-height-controlheight, 32px)",
                            padding: "10px 12px",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "8px",
                            flex: "1 0 0",
                            borderRadius: "var(--border-radius-base, 8px)",
                            border:
                              "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                            background: "var(--background-bg-white, #fff)",
                          },
                          ...{},
                        }}
                        {...{
                          suffix: "days",
                          showSuffix: true,
                          prefix: "PRE",
                          iconRight: <Icon.QodeCalendarDays />,
                          iconLeft: <Icon.QodeUser />,
                          showClear: true,
                          state: "default",
                          status: "default",
                          size: "default",
                        }}
                      />
                      {/* name="Checkbox" id="531:39979" type="INSTANCE" */}
                      <QodeCheckbox
                        style={{
                          ...{
                            display: "flex",
                            alignItems: "center",
                            gap: "var(--size-padding-paddingxs, 8px)",
                          },
                          ...{},
                        }}
                        {...{
                          showTitle: true,
                          title: "Immediate",
                          status: "inactive",
                          state: "default",
                        }}
                      />
                    </div>
                  </div>
                  {/* name="Line 4" id="531:39980" type="LINE" */}
                  <Flex
                    style={{
                      ...{
                        
                        height: "1px",
                        background: "var(--border-border-neutral-20, #e3e3e3)",
                      },
                      ...{},
                    }}
                  >
                    <></>
                  </Flex>
                  {/* name="Attendees" id="531:39981" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "center",
                        gap: "24px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Input__Label" id="531:39982" type="INSTANCE" */}
                    <QodeCustom1828777
                      style={{
                        ...{
                          display: "flex",
                          width: "125px",
                          height: "var(--size-height-controlheight, 32px)",
                          alignItems: "center",
                          gap: "var(--size-padding-paddingxxs, 4px)",
                        },
                        ...{},
                      }}
                      {...{
                        icon: <Icon.QodeLocationArrow />,
                        title: "Willing to relocate",
                        showIcon: true,
                        direction: "horizontal",
                        size: "default",
                      }}
                    />
                    {/* name="Radio/Basic" id="531:39983" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "12px",
                        },
                        ...{},
                      }}
                    >
                      {/* name="🧬 item 1" id="531:39984" type="INSTANCE" */}
                      <QodeRadio
                        style={{
                          ...{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "var(--size-padding-paddingxs, 8px)",
                          },
                          ...{},
                        }}
                        {...{
                          showTitle: true,
                          title: "No",
                          state: "default",
                          checked: false,
                        }}
                      />
                      {/* name="🧬 item 2" id="531:39985" type="INSTANCE" */}
                      <QodeRadio
                        style={{
                          ...{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "var(--size-padding-paddingxs, 8px)",
                          },
                          ...{},
                        }}
                        {...{
                          showTitle: true,
                          title: "Yes",
                          state: "default",
                          checked: false,
                        }}
                      />
                      {/* name="🧬 item 3" id="531:39986" type="INSTANCE" */}
                      <QodeRadio
                        style={{
                          ...{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "var(--size-padding-paddingxs, 8px)",
                          },
                          ...{},
                        }}
                        {...{
                          showTitle: true,
                          title: "Undetermined",
                          state: "default",
                          checked: false,
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* name="Save" id="531:41178" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "24px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Button" id="531:41185" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        width: "110px",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "4px 16px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "1px solid var(--border-border-primary-30, #107ecc)",
                        background: "var(--background-bg-primary, #1597f4)",
                      },
                      ...{},
                    }}
                    {...{
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Save",
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      selectIconLeft: <Icon.QodeMagnifyingGlass />,
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
          </div>
        </>
      )}
      {/* id="559:29741" */}
      {`${property_1}` === `Variant4` && (
        <>
          {/* name="Property 1=Variant4" id="559:29741" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1020px",
                height: "714px",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "12px 12px 0px 0px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                borderLeft:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
              },
              ...style,
            }}
          >
            {/* name="Left" id="559:29742" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "340px",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--text-text-white, #fff)",
                },
                ...{},
              }}
            >
              {/* name="Card" id="559:29743" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "40px 20px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                {/* name="avatar" id="559:29744" type="INSTANCE" */}
                <QodeCustom562954
                  style={{
                    ...{
                      display: "flex",
                      width: "80px",
                      height: "80px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--font-size-large, 16px)",
                      borderRadius: "1110px",
                      background:
                        "var(--color-success-colorsuccesshover, #a3c73e)",
                    },
                    ...{},
                  }}
                  {...{ img: true, type: "Round", state: "Default" }}
                />
                {/* name="Frame 37378" id="559:29745" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "12px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Frame 37368" id="559:29746" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Name yoe" id="559:29747" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        },
                        ...{},
                      }}
                    >
                      <span
                        style={{
                          ...{
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-heading4, 24px)",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight:
                              "var(--lineheight-lineheight-h4, 32px) /* 133.333% */",
                          },
                          ...{},
                        }}
                      >{`Nguyen Quoc Thai`}</span>
                    </div>
                    <span
                      style={{
                        ...{
                          color: "var(--text-text-neutral-20, #878787)",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        },
                        ...{},
                      }}
                    >{`12 YoE`}</span>
                  </div>
                  {/* name="Frame 37356" id="559:29750" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "4px",
                        alignSelf: "stretch",
                      },
                      ...{},
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
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        },
                        ...{},
                      }}
                    >{`Senior Software Developer at The Chemico Vietnam`}</span>
                    {/* name="Location" id="559:29752" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4px",
                          alignSelf: "stretch",
                        },
                        ...{},
                      }}
                    >
                      {/* name="location-dot" id="559:29753" type="INSTANCE" */}
                      <Icon.QodeLocationDot
                        style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                        {...{}}
                      />
                      <span
                        style={{
                          ...{
                            color: "var(--text-text-neutral-40, #464646)",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          },
                          ...{},
                        }}
                      >{`Ho Chi Minh city, Vietnam`}</span>
                    </div>
                  </div>
                </div>
                {/* name="Frame 37376" id="559:29755" type="FRAME" */}
                <div
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "8px" },
                    ...{},
                  }}
                >
                  {/* name="Button" id="559:29756" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        width: "110px",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "4px 16px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      selectIconLeft: <Icon.QodePaperPlane />,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Contact",
                      iconLeft: true,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="Button" id="559:29757" type="INSTANCE" */}
                <QodeButton
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      position: "absolute",
                      right: "20px",
                      top: "20px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    onlyIcon: <Icon.QodeEllipsis />,
                    buttonname: "Edit",
                    selectIconLeft: <Icon.QodeEllipsis />,
                    iconLeft: true,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "icon",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
              {/* name="CV" id="559:35908" type="INSTANCE" */}
              <QodeCustom55935790
                style={{
                  ...{
                    display: "flex",
                    padding: "16px 20px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
              {/* name="Job status" id="559:29761" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "16px 20px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Header" id="559:29762" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
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
                  >{`Job status`}</span>
                  {/* name="Button" id="559:29764" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        width: "53px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        padding: "4px 8px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "4px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Assign",
                      selectIconLeft: <Icon.QodePlus />,
                      iconLeft: true,
                      type: "link",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="wr" id="559:29765" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "12px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Job status" id="559:29766" type="INSTANCE" */}
                  <QodeCustom54532247
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  {/* name="Job status" id="559:29767" type="INSTANCE" */}
                  <QodeCustom54532247
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  {/* name="Job status" id="559:29768" type="INSTANCE" */}
                  <QodeCustom54532247
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                </div>
                {/* name="Frame 37363" id="559:29769" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Frame 37363" id="559:29770" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        alignItems: "center",
                        gap: "var(--size-size-sizexxs-6px, 6px)",
                      },
                      ...{},
                    }}
                  >
                    {/* name="briefcase" id="559:29771" type="INSTANCE" */}
                    <Icon.QodeBriefcase
                      style={{
                        ...{
                          display: "flex",
                          width: "16px",
                          height: "16px",
                          padding: "1.6px 1.6px 2.4px 1.6px",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        ...{},
                      }}
                      {...{}}
                    />
                    {/* name="Frame 37360" id="559:29772" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                        },
                        ...{},
                      }}
                    >
                      <span
                        style={{
                          ...{
                            color: "var(--text-text-neutral-40, #464646)",
                            textAlign: "right",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          },
                          ...{},
                        }}
                      >{`Frontend developer`}</span>
                    </div>
                  </div>
                  {/* name="Frame 37361" id="559:29774" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Badge__Status" id="559:29775" type="INSTANCE" */}
                    <QodeBadge
                      style={{
                        ...{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        },
                        ...{},
                      }}
                      {...{ showLabel: true, status: "warning" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* name="Right" id="559:29776" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Tabs" id="559:29777" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "8px 24px 0px 24px",
                    alignItems: "center",
                    gap: "24px",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--neutral-white, #fff)",
                  },
                  ...{},
                }}
              >
                {/* name="🧬 tab 1" id="559:29778" type="INSTANCE" */}
                <QodeCustom29615477
                  style={{
                    ...{
                      display: "flex",
                      padding: "12px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                    },
                    ...{},
                  }}
                  {...{
                    icon: <Icon.QodeUser />,
                    showIcon: true,
                    title: "Profile",
                    size: "default",
                    position: "top",
                    state: "default",
                  }}
                />
                {/* name="🧬 tab 2" id="559:29779" type="INSTANCE" */}
                <QodeCustom29615477
                  style={{
                    ...{
                      display: "flex",
                      padding: "12px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                    },
                    ...{},
                  }}
                  {...{
                    icon: <Icon.QodeGrid2 />,
                    showIcon: true,
                    title: "Notes",
                    size: "default",
                    position: "top",
                    state: "default",
                  }}
                />
                {/* name="🧬 tab 3" id="559:29780" type="INSTANCE" */}
                <QodeCustom29615477
                  style={{
                    ...{
                      display: "flex",
                      padding: "12px 0px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxs, 8px)",
                      borderBottom:
                        "2px solid var(--border-border-primary-20, #158de2)",
                    },
                    ...{},
                  }}
                  {...{
                    icon: <Icon.QodeVideo />,
                    showIcon: true,
                    title: "Interviews",
                    size: "default",
                    position: "top",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Frame 37376" id="559:29785" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "24px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "24px",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                {/* name="Frame 37392" id="559:31266" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-size-sizemd-20px, 20px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                      },
                      ...{},
                    }}
                  >{`Interviews`}</span>
                  {/* name="Button" id="559:31268" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "4px 16px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "1px solid var(--border-border-primary-30, #107ecc)",
                        background: "var(--background-bg-primary, #1597f4)",
                      },
                      ...{},
                    }}
                    {...{
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      iconLeft: true,
                      buttonname: "New interview",
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      selectIconLeft: <Icon.QodePlus />,
                      type: "primary",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="Body" id="695:32331" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "10px",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                >
                  {/* name="Timeline" id="695:32332" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Interview/Timeline" id="695:32333" type="INSTANCE" */}
                    <QodeCustom67733917
                      style={{
                        ...{
                          display: "flex",
                          height: "84px",
                          padding: "12px 24px",
                          alignItems: "flex-start",
                          gap: "20px",
                          alignSelf: "stretch",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-neutral-30, #d5d5d5)",
                          background: "var(--neutral-white, #fff)",
                        },
                        ...{},
                      }}
                      {...{ property_1: "Upcoming" }}
                    />
                    {/* name="Interview/Timeline" id="695:32334" type="INSTANCE" */}
                    <QodeCustom67733917
                      style={{
                        ...{
                          display: "flex",
                          height: "86px",
                          padding: "12px 24px",
                          alignItems: "flex-start",
                          gap: "20px",
                          alignSelf: "stretch",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-neutral-30, #d5d5d5)",
                          background: "var(--neutral-white, #fff)",
                        },
                        ...{},
                      }}
                      {...{ property_1: "Upcoming" }}
                    />
                    {/* name="Interview/Timeline" id="695:32335" type="INSTANCE" */}
                    <QodeCustom67733916
                      style={{
                        ...{
                          display: "flex",
                          height: "86px",
                          padding: "12px 24px",
                          alignItems: "flex-start",
                          gap: "20px",
                          alignSelf: "stretch",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-neutral-30, #d5d5d5)",
                          background: "var(--neutral-white, #fff)",
                        },
                        ...{},
                      }}
                      {...{ property_1: "Finished" }}
                    />
                    {/* name="Interview/Timeline" id="695:32336" type="INSTANCE" */}
                    <QodeCustom67733916
                      style={{
                        ...{
                          display: "flex",
                          height: "86px",
                          padding: "12px 24px",
                          alignItems: "flex-start",
                          gap: "20px",
                          alignSelf: "stretch",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-neutral-30, #d5d5d5)",
                          background: "var(--neutral-white, #fff)",
                        },
                        ...{},
                      }}
                      {...{ property_1: "Finished" }}
                    />
                    {/* name="Interview/Timeline" id="695:32337" type="INSTANCE" */}
                    <QodeCustom67733915
                      style={{
                        ...{
                          display: "flex",
                          height: "78px",
                          padding: "12px 24px",
                          alignItems: "flex-start",
                          gap: "20px",
                          alignSelf: "stretch",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "1px solid var(--border-border-neutral-30, #d5d5d5)",
                          background: "var(--neutral-white, #fff)",
                        },
                        ...{},
                      }}
                      {...{ property_1: "Canceled" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
