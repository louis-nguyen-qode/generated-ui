// id="958:34717"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom228149016 } from "@designSystem/custom/QodeCustom228149016"
import { QodeCustom32828485 } from "@designSystem/custom/QodeCustom32828485"
import { QodeCustom1268286 } from "@designSystem/custom/QodeCustom1268286"
import { QodeCustom1489851 } from "@designSystem/custom/QodeCustom1489851"
import { QodeCustom66174 } from "@designSystem/custom/QodeCustom66174"
import { QodeCustom228149018 } from "@designSystem/custom/QodeCustom228149018"
import { QodeCustom228149015 } from "@designSystem/custom/QodeCustom228149015"
import { QodeCustom38323962 } from "@designSystem/custom/QodeCustom38323962"
import { QodeCustom1197505 } from "@designSystem/custom/QodeCustom1197505"
import { QodeCustom1489853 } from "@designSystem/custom/QodeCustom1489853"
import { QodeCustom228149026 } from "@designSystem/custom/QodeCustom228149026"

export interface QodeCustom95834717Props {
  mode?: "Edit" | "View"
}

export const QodeCustom95834717: React.FC<
  QodeCustom95834717Props & { style?: CSSProperties }
> = ({ mode = "View", style, ...rest }) => {
  return (
    <>
      {/* name="Setup interview/Assessment" id="958:34717" type="COMPONENT_SET" */}
      {/* id="958:34716" */}
      {`${mode}` === `View` && (
        <>
          {/* name="Mode=View" id="958:34716" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "430px",
                height: "612px",
                padding: "20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                flexShrink: "0",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="958:34529" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
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
              >{`Assessment`}</span>
              {/* name="Button" id="958:34531" type="INSTANCE" */}
              <QodeCustom228149016
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
                      "1px solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Edit",
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
            {/* name="Wrap" id="958:34532" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Skills" id="958:34533" type="FRAME" */}
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
                <span
                  style={{
                    ...{
                      display: "-webkit-box",
                      width: "150px",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "1",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textOverflow: "ellipsis",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "500",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Skills to evaluate`}</span>
                {/* name="Skills" id="958:34535" type="FRAME" */}
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
                  {/* name="Tag" id="958:34536" type="INSTANCE" */}
                  <QodeCustom32828485
                    style={{
                      ...{
                        display: "flex",
                        height: "30px",
                        padding: "0px 12px",
                        alignItems: "center",
                        gap: "var(--size-size-sizexxs-6px, 6px)",
                        borderRadius: "4px",
                        border: "1px solid var(--primary-primary-40, #64b9f5)",
                        background: "var(--primary-primary-10, #d6eeff)",
                      },
                      ...{},
                    }}
                    {...{
                      color: "primary",
                      state: "default",
                      size: "Default",
                      rounded: "False",
                    }}
                  />
                  {/* name="Tag" id="958:34537" type="INSTANCE" */}
                  <QodeCustom32828485
                    style={{
                      ...{
                        display: "flex",
                        height: "30px",
                        padding: "0px 12px",
                        alignItems: "center",
                        gap: "var(--size-size-sizexxs-6px, 6px)",
                        borderRadius: "4px",
                        border: "1px solid var(--primary-primary-40, #64b9f5)",
                        background: "var(--primary-primary-10, #d6eeff)",
                      },
                      ...{},
                    }}
                    {...{
                      color: "primary",
                      state: "default",
                      size: "Default",
                      rounded: "False",
                    }}
                  />
                  {/* name="Tag" id="958:34538" type="INSTANCE" */}
                  <QodeCustom32828485
                    style={{
                      ...{
                        display: "flex",
                        height: "30px",
                        padding: "0px 12px",
                        alignItems: "center",
                        gap: "var(--size-size-sizexxs-6px, 6px)",
                        borderRadius: "4px",
                        border: "1px solid var(--primary-primary-40, #64b9f5)",
                        background: "var(--primary-primary-10, #d6eeff)",
                      },
                      ...{},
                    }}
                    {...{
                      color: "primary",
                      state: "default",
                      size: "Default",
                      rounded: "False",
                    }}
                  />
                  {/* name="Tag" id="958:34539" type="INSTANCE" */}
                  <QodeCustom32828485
                    style={{
                      ...{
                        display: "flex",
                        height: "30px",
                        padding: "0px 12px",
                        alignItems: "center",
                        gap: "var(--size-size-sizexxs-6px, 6px)",
                        borderRadius: "4px",
                        border: "1px solid var(--primary-primary-40, #64b9f5)",
                        background: "var(--primary-primary-10, #d6eeff)",
                      },
                      ...{},
                    }}
                    {...{
                      color: "primary",
                      state: "default",
                      size: "Default",
                      rounded: "False",
                    }}
                  />
                  {/* name="Tag" id="958:34540" type="INSTANCE" */}
                  <QodeCustom32828485
                    style={{
                      ...{
                        display: "flex",
                        height: "30px",
                        padding: "0px 12px",
                        alignItems: "center",
                        gap: "var(--size-size-sizexxs-6px, 6px)",
                        borderRadius: "4px",
                        border: "1px solid var(--primary-primary-40, #64b9f5)",
                        background: "var(--primary-primary-10, #d6eeff)",
                      },
                      ...{},
                    }}
                    {...{
                      color: "primary",
                      state: "default",
                      size: "Default",
                      rounded: "False",
                    }}
                  />
                  {/* name="Tag" id="958:34541" type="INSTANCE" */}
                  <QodeCustom32828485
                    style={{
                      ...{
                        display: "flex",
                        height: "30px",
                        padding: "0px 12px",
                        alignItems: "center",
                        gap: "var(--size-size-sizexxs-6px, 6px)",
                        borderRadius: "4px",
                        border: "1px solid var(--primary-primary-40, #64b9f5)",
                        background: "var(--primary-primary-10, #d6eeff)",
                      },
                      ...{},
                    }}
                    {...{
                      color: "primary",
                      state: "default",
                      size: "Default",
                      rounded: "False",
                    }}
                  />
                </div>
              </div>
              {/* name="Questions" id="958:34542" type="FRAME" */}
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
                {/* name="Input__Label" id="958:34543" type="INSTANCE" */}
                <QodeCustom1268286
                  style={{
                    ...{
                      display: "flex",
                      width: "132px",
                      height: "var(--size-height-controlheight, 32px)",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                    },
                    ...{},
                  }}
                  {...{
                    title: "Questions",
                    direction: "horizontal",
                    size: "default",
                  }}
                />
                {/* name="List" id="958:34544" type="FRAME" */}
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
                  {/* name="Interview question" id="958:34545" type="INSTANCE" */}
                  <QodeCustom1489851
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "16px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                    {...{ state: "View" }}
                  />
                  {/* name="Line 21" id="958:34546" type="LINE" */}
                  <Flex
                    style={{
                      ...{
                        width: "390px",
                        height: "1px",
                        background: "var(--border-border-neutral-20, #e3e3e3)",
                      },
                      ...{},
                    }}
                  >
                    <></>
                  </Flex>
                  {/* name="Interview question" id="958:34547" type="INSTANCE" */}
                  <QodeCustom1489851
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "16px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                    {...{ state: "View" }}
                  />
                  {/* name="Line 22" id="958:34548" type="LINE" */}
                  <Flex
                    style={{
                      ...{
                        width: "390px",
                        height: "1px",
                        background: "var(--border-border-neutral-20, #e3e3e3)",
                      },
                      ...{},
                    }}
                  >
                    <></>
                  </Flex>
                  {/* name="Interview question" id="958:34549" type="INSTANCE" */}
                  <QodeCustom1489851
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: "16px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                    {...{ state: "View" }}
                  />
                  {/* name="Line 23" id="958:34550" type="LINE" */}
                  <Flex
                    style={{
                      ...{
                        width: "390px",
                        height: "1px",
                        background: "var(--border-border-neutral-20, #e3e3e3)",
                      },
                      ...{},
                    }}
                  >
                    <></>
                  </Flex>
                  {/* name="List" id="958:34551" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        height: "116px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "12px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Frame 37327" id="958:34552" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          gap: "12px",
                          alignSelf: "stretch",
                        },
                        ...{},
                      }}
                    >
                      {/* name="Frame 37328" id="958:34553" type="FRAME" */}
                      <div
                        style={{
                          ...{
                            display: "flex",
                            width: "20px",
                            height: "20px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            borderRadius: "4px",
                            background: "var(--neutral-gray-10, #e3e3e3)",
                          },
                          ...{},
                        }}
                      >
                        <span
                          style={{
                            ...{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-small, 12px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                            },
                            ...{},
                          }}
                        >{`4`}</span>
                      </div>
                      <span
                        style={{
                          ...{
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
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
                      >{`Explain the SOLID principles in software development. How do they help in writing maintainable and scalable code?`}</span>
                    </div>
                    {/* name="Line 21" id="958:34556" type="LINE" */}
                    <Flex
                      style={{
                        ...{
                          width: "390px",
                          height: "1px",
                          background:
                            "var(--border-border-neutral-20, #e3e3e3)",
                        },
                        ...{},
                      }}
                    >
                      <></>
                    </Flex>
                    {/* name="Frame 37328" id="958:34557" type="FRAME" */}
                    <div
                      style={{
                        ...{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          gap: "12px",
                          alignSelf: "stretch",
                        },
                        ...{},
                      }}
                    >
                      {/* name="Frame 37328" id="958:34558" type="FRAME" */}
                      <div
                        style={{
                          ...{
                            display: "flex",
                            width: "20px",
                            height: "20px",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            borderRadius: "4px",
                            background: "var(--neutral-gray-10, #e3e3e3)",
                          },
                          ...{},
                        }}
                      >
                        <span
                          style={{
                            ...{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color: "var(--text-text-neutral-50, #1d1d1d)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-small, 12px)",
                              fontStyle: "normal",
                              fontWeight: "700",
                              lineHeight:
                                "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                            },
                            ...{},
                          }}
                        >{`5`}</span>
                      </div>
                      <span
                        style={{
                          ...{
                            flex: "1 0 0",
                            color: "var(--text-text-neutral-50, #1d1d1d)",
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
                      >{`What is a RESTful API? Can you explain its core components and how it differs from other web service architectures`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="958:34715" */}
      {`${mode}` === `Edit` && (
        <>
          {/* name="Mode=Edit" id="958:34715" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "730px",
                height: "668px",
                padding: "20px",
                flexDirection: "column",
                alignItems: "flex-start",
                flexShrink: "0",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Content" id="958:34591" type="FRAME" */}
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
              {/* name="Icon" id="958:34592" type="INSTANCE" */}
              <QodeCustom66174
                style={{
                  ...{
                    display: "flex",
                    width: "16px",
                    height: "16px",
                    padding: "5.598px 2.398px 4.001px 2.398px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{}}
              />
              {/* name="Header" id="958:34593" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "12px 16px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-base, 8px)",
                    border:
                      "1px solid var(--border-border-neutral-20, #e3e3e3)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
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
                >{`Edit assessment`}</span>
                {/* name="Frame 37331" id="958:34595" type="FRAME" */}
                <div
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "4px" },
                    ...{},
                  }}
                >
                  {/* name="Button" id="958:34596" type="INSTANCE" */}
                  <QodeCustom228149018
                    style={{
                      ...{
                        display: "flex",
                        height: "var(--size-height-controlheight, 32px)",
                        padding: "4px 16px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        opacity: "0.3",
                      },
                      ...{},
                    }}
                    {...{
                      buttonname: "Cancel",
                      type: "text",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Button" id="958:34597" type="INSTANCE" */}
                  <QodeCustom228149015
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
                      buttonname: "Update",
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
              {/* name="Assessment" id="958:34598" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "20px 40px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "24px",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name="Skills" id="958:34599" type="FRAME" */}
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
                  <span
                    style={{
                      ...{
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
                  >{`Skills to evaluate`}</span>
                  {/* name="Input" id="958:34601" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "8px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Input/Text" id="958:34602" type="INSTANCE" */}
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
                        title: "Enter skills",
                        prefix: "PRE",
                        showClear: true,
                        state: "default",
                        status: "default",
                        size: "default",
                      }}
                    />
                    {/* name="Skills" id="958:34603" type="FRAME" */}
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
                      {/* name="Tag" id="958:34604" type="INSTANCE" */}
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
                      {/* name="Tag" id="958:34605" type="INSTANCE" */}
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
                      {/* name="Tag" id="958:34606" type="INSTANCE" */}
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
                      {/* name="Tag" id="958:34607" type="INSTANCE" */}
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
                      {/* name="Tag" id="958:34608" type="INSTANCE" */}
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
                      {/* name="Tag" id="958:34609" type="INSTANCE" */}
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
                      {/* name="Tag" id="958:34610" type="INSTANCE" */}
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
                {/* name="Questions" id="958:34611" type="FRAME" */}
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
                  <span
                    style={{
                      ...{
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
                  >{`Questions`}</span>
                  <span
                    style={{
                      ...{
                        color: "var(--color-error-colorerrortext, #ff6542)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--line-height-lineheight, 20px) /* 142.857% */",
                      },
                      ...{},
                    }}
                  >{`*`}</span>
                  {/* name="Icon" id="958:34614" type="INSTANCE" */}
                  <QodeCustom1197505
                    style={{
                      ...{
                        display: "flex",
                        width: "var(--font-size-base, 14px)",
                        height: "var(--font-size-base, 14px)",
                        padding: "1.4px",
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  {/* name="List" id="958:34615" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "8px",
                        alignSelf: "stretch",
                      },
                      ...{},
                    }}
                  >
                    {/* name="Interview question" id="958:34616" type="INSTANCE" */}
                    <QodeCustom1489853
                      style={{
                        ...{
                          display: "flex",
                          height: "54px",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          gap: "12px",
                          alignSelf: "stretch",
                        },
                        ...{},
                      }}
                      {...{ state: "Edit" }}
                    />
                    {/* name="Interview question" id="958:34617" type="INSTANCE" */}
                    <QodeCustom1489853
                      style={{
                        ...{
                          display: "flex",
                          height: "54px",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          gap: "12px",
                          alignSelf: "stretch",
                        },
                        ...{},
                      }}
                      {...{ state: "Edit" }}
                    />
                    {/* name="Interview question" id="958:34618" type="INSTANCE" */}
                    <QodeCustom1489853
                      style={{
                        ...{
                          display: "flex",
                          height: "54px",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          gap: "12px",
                          alignSelf: "stretch",
                        },
                        ...{},
                      }}
                      {...{ state: "Edit" }}
                    />
                    {/* name="Interview question" id="958:34619" type="INSTANCE" */}
                    <QodeCustom1489853
                      style={{
                        ...{
                          display: "flex",
                          height: "54px",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          gap: "12px",
                          alignSelf: "stretch",
                        },
                        ...{},
                      }}
                      {...{ state: "Edit" }}
                    />
                    {/* name="Interview question" id="958:34620" type="INSTANCE" */}
                    <QodeCustom1489853
                      style={{
                        ...{
                          display: "flex",
                          height: "54px",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          gap: "12px",
                          alignSelf: "stretch",
                        },
                        ...{},
                      }}
                      {...{ state: "Edit" }}
                    />
                    {/* name="Button" id="958:34621" type="INSTANCE" */}
                    <QodeCustom228149026
                      style={{
                        ...{
                          display: "flex",
                          height: "var(--size-height-controlheightsm, 24px)",
                          padding: "4px 8px",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "4px",
                          borderRadius: "var(--border-radius-rounded, 999px)",
                          border:
                            "1px solid var(--border-border-neutral-40, #bfbfbf)",
                          background: "var(--background-bg-white, #fff)",
                        },
                        ...{},
                      }}
                      {...{
                        buttonname: "Add question",
                        iconLeft: true,
                        type: "default",
                        size: "small",
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
          </div>
        </>
      )}
    </>
  )
}
