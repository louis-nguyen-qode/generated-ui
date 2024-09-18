// id="340:19060"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom565626441 } from "@designSystem/custom/QodeCustom565626441"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom18216941 } from "@designSystem/custom/QodeCustom18216941"
import { QodeCustom1828777 } from "@designSystem/custom/QodeCustom1828777"
import { QodeCustom18210113 } from "@designSystem/custom/QodeCustom18210113"
import { QodeCustom17024242 } from "@designSystem/custom/QodeCustom17024242"
import { QodeTag } from "@designSystem/ant/QodeTag"

export interface QodeCustom34019060Props {
  property_1?: "Add job" | "Variant2"
}

export const QodeCustom34019060: React.FC<
  QodeCustom34019060Props & { style?: CSSProperties }
> = ({ property_1 = "Add job", style, ...rest }) => {
  return (
    <>
      {/* name="Modal/Add job" id="340:19060" type="COMPONENT_SET" */}
      {/* id="117:5795" */}
      {`${property_1}` === `Add job` && (
        <>
          {/* name="Property 1=Add job" id="117:5795" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "540px",
                height: "580px",
                flexDirection: "column",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="Modal/Header" id="113:11578" type="INSTANCE" */}
            <QodeCustom565626441
              style={{
                ...{
                  display: "flex",
                  height: "42px",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "16px",
                  flexShrink: "0",
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
                  padding: "20px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Button" id="113:11334" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "var(--style-line-width-linewidth, 1px) solid var(--border-border-primary-20, #158de2)",
                  },
                  ...{},
                }}
                {...{
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Upload JD",
                  selectIconLeft: <Icon.QodeUpload />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  iconLeft: true,
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: true,
                }}
              />
              {/* name="Frame 37126" id="113:11299" type="FRAME" */}
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
                <QodeCustom18216941
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
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                      background:
                        "var(--color-neutral-background-colorbgcontainer, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    title: "Or paste your job description here",
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
                <QodeButton
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
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodeIcons />,
                    selectIconRight: <Icon.QodeChevronRight />,
                    buttonname: "Cancel",
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="340:20585" type="INSTANCE" */}
                <QodeButton
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
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconRight: true,
                    buttonname: "Next",
                    selectIconRight: <Icon.QodeChevronRight />,
                    selectIconLeft: <Icon.QodeIcons />,
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
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="340:19061" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "540px",
                height: "580px",
                flexDirection: "column",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="Modal/Header" id="340:19062" type="INSTANCE" */}
            <QodeCustom565626441
              style={{
                ...{
                  display: "flex",
                  height: "42px",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "16px",
                  flexShrink: "0",
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
                  padding: "20px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Frame 37363" id="340:20735" type="FRAME" */}
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
                  <Icon.QodeBriefcase
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
              {/* name="Frame 37364" id="340:20752" type="FRAME" */}
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
                  <QodeCustom1828777
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
                      icon: <Icon.QodeBriefcaseBlank />,
                      title: "Job title",
                      showIcon: true,
                      required: true,
                      direction: "horizontal",
                      size: "default",
                    }}
                  />
                  {/* name="Input/Text" id="340:20684" type="INSTANCE" */}
                  <QodeCustom18210113
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
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      showClear: true,
                      suffix: "SUF",
                      title: "Senior Software Engineer",
                      prefix: "PRE",
                      iconRight: <Icon.QodeCalendarDays />,
                      iconLeft: <Icon.QodeUser />,
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
                  <QodeCustom1828777
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
                      icon: <Icon.QodeLocationDot />,
                      title: "Location",
                      showIcon: true,
                      required: true,
                      direction: "horizontal",
                      size: "default",
                    }}
                  />
                  {/* name="Input/Select" id="557:30971" type="INSTANCE" */}
                  <QodeCustom17024242
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
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
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
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="Input__Label" id="340:20720" type="INSTANCE" */}
                  <QodeCustom1828777
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
                      icon: <Icon.QodePenRuler />,
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
                        height: "108px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "8px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Input/Text" id="340:20754" type="INSTANCE" */}
                    <QodeCustom18210113
                      style={{
                        ...{
                          display: "flex",
                          height: "var(--size-height-controlheight, 32px)",
                          padding: "10px 12px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "8px",
                          flexShrink: "0",
                          alignSelf: "stretch",
                          borderRadius: "var(--border-radius-base, 8px)",
                          border:
                            "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                          background: "var(--background-bg-white, #fff)",
                        },
                        ...{},
                      }}
                      {...{
                        showIconRight: true,
                        suffix: "SUF",
                        title: "Add skills",
                        prefix: "PRE",
                        iconRight: <Icon.QodeArrowTurnDownLeft />,
                        iconLeft: <Icon.QodeUser />,
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
                          alignSelf: "stretch",
                          flexWrap: "wrap",
                        },
                        ...{},
                      }}
                    >
                      {/* name="Tag" id="340:20756" type="INSTANCE" */}
                      <QodeTag
                        style={{
                          ...{
                            display: "flex",
                            height: "30px",
                            padding: "0px 12px",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "4px",
                            border:
                              "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                            background: "var(--primary-primary-10, #d6eeff)",
                          },
                          ...{},
                        }}
                        {...{
                          showRIcon: true,
                          rIcon: <Icon.QodeXmark />,
                          color: "primary",
                          state: "default",
                          size: "Default",
                          rounded: "False",
                        }}
                      />
                      {/* name="Tag" id="340:20757" type="INSTANCE" */}
                      <QodeTag
                        style={{
                          ...{
                            display: "flex",
                            height: "30px",
                            padding: "0px 12px",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "4px",
                            border:
                              "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                            background: "var(--primary-primary-10, #d6eeff)",
                          },
                          ...{},
                        }}
                        {...{
                          showRIcon: true,
                          rIcon: <Icon.QodeXmark />,
                          color: "primary",
                          state: "default",
                          size: "Default",
                          rounded: "False",
                        }}
                      />
                      {/* name="Tag" id="340:20758" type="INSTANCE" */}
                      <QodeTag
                        style={{
                          ...{
                            display: "flex",
                            height: "30px",
                            padding: "0px 12px",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "4px",
                            border:
                              "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                            background: "var(--primary-primary-10, #d6eeff)",
                          },
                          ...{},
                        }}
                        {...{
                          showRIcon: true,
                          rIcon: <Icon.QodeXmark />,
                          color: "primary",
                          state: "default",
                          size: "Default",
                          rounded: "False",
                        }}
                      />
                      {/* name="Tag" id="340:20776" type="INSTANCE" */}
                      <QodeTag
                        style={{
                          ...{
                            display: "flex",
                            height: "30px",
                            padding: "0px 12px",
                            alignItems: "center",
                            gap: "var(--size-size-sizexxs-6px, 6px)",
                            borderRadius: "4px",
                            border:
                              "var(--style-line-width-linewidth, 1px) solid var(--primary-primary-40, #64b9f5)",
                            background: "var(--primary-primary-10, #d6eeff)",
                          },
                          ...{},
                        }}
                        {...{
                          showRIcon: true,
                          rIcon: <Icon.QodeXmark />,
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
                <QodeButton
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
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodeChevronLeft />,
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "Back",
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="340:20641" type="INSTANCE" */}
                <QodeButton
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
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconLeft: true,
                    buttonname: "Find candidates",
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
        </>
      )}
    </>
  )
}
