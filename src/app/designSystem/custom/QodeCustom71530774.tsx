// id="715:30774"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom13120 } from "@designSystem/custom/QodeCustom13120"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom438719 } from "@designSystem/custom/QodeCustom438719"
import { QodeCustom588051 } from "@designSystem/custom/QodeCustom588051"
import { QodeCustom7110910 } from "@designSystem/custom/QodeCustom7110910"
import { QodeCustom204899 } from "@designSystem/custom/QodeCustom204899"

export interface QodeCustom71530774Props {
  screensize?: "1600" | "1280" | "1366" | "1440"
}

export const QodeCustom71530774: React.FC<
  QodeCustom71530774Props & { style?: CSSProperties }
> = ({ screensize = "1280", style, ...rest }) => {
  return (
    <>
      {/* name="Responsive/Sourcing" id="715:30774" type="COMPONENT_SET" */}
      {/* id="715:30773" */}
      {`${screensize}` === `1280` && (
        <>
          {/* name="screensize=1280" id="715:30773" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                
                height: "768px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                background: "var(--app-bg, #f4f4f6)",
              },
              ...style,
            }}
          >
            {/* name="Navbar" id="206:13090" type="INSTANCE" */}
            <QodeCustom13120
              style={{
                ...{
                  display: "flex",
                  width: "84px",
                  height: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="b" id="206:13091" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  
                  padding: "24px 40px 0px 40px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  background: "var(--app-bg, #f4f4f6)",
                },
                ...{},
              }}
            >
              {/* name="Job title" id="206:13092" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    height: "42px",
                    
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius:
                      "0px 0px var(--border-radius-large, 12px) var(--border-radius-large, 12px)",
                  },
                  ...{},
                }}
              >
                {/* name="Wrap" id="206:13093" type="FRAME" */}
                <div
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "12px" },
                    ...{},
                  }}
                >
                  {/* name="Button" id="206:13094" type="INSTANCE" */}
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
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeChevronLeft />,
                      buttonname: "Source new job",
                      selectIconLeft: <Icon.QodePlus />,
                      iconLeft: true,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Title" id="206:13095" type="FRAME" */}
                  <div
                    style={{
                      ...{ display: "flex", alignItems: "center", gap: "4px" },
                      ...{},
                    }}
                  >
                    <span
                      style={{
                        ...{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-size-sizemd-20px, 20px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight:
                            "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          textDecorationLine: "underline",
                        },
                        ...{},
                      }}
                    >{`Senior Software Developer `}</span>
                    {/* name="angle-down" id="206:13097" type="INSTANCE" */}
                    <Icon.QodeAngleDown
                      style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                      {...{}}
                    />
                  </div>
                  {/* name="Button" id="206:13098" type="INSTANCE" */}
                  <QodeButton
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
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      buttonname: "View JD",
                      selectIconLeft: <Icon.QodeIcons />,
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="Special button/Shortlist" id="206:13099" type="INSTANCE" */}
                <QodeCustom438719
                  style={{
                    ...{
                      display: "flex",
                      height: "40px",
                      padding: "8px 20px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "2px solid var(--border-border-primary-20, #158de2)",
                      background: "var(--neutral-white, #fff)",
                      boxShadow:
                        "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                    },
                    ...{},
                  }}
                  {...{ state: "Default" }}
                />
              </div>
              {/* name="Wrap" id="206:13100" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    borderRadius: "12px 12px 0px 0px",
                    border:
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                {/* name="Search filter" id="206:13101" type="INSTANCE" */}
                <QodeCustom588051
                  style={{
                    ...{
                      display: "flex",
                      padding: "8px 12px",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                      borderRadius:
                        "var(--border-radius-large, 12px) var(--border-radius-large, 12px) 0px 0px",
                      border:
                        "1px solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--neutral-gray-10, #e3e3e3)",
                    },
                    ...{},
                  }}
                  {...{ property_1: "Default" }}
                />
                {/* name="Body" id="206:13102" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      background: "#FFF",
                    },
                    ...{},
                  }}
                >
                  {/* name="List | Profile" id="206:13103" type="INSTANCE" */}
                  <QodeCustom7110910
                    style={{
                      ...{
                        display: "flex",
                        width: "353px",
                        flexDirection: "column",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "#FFF",
                      },
                      ...{},
                    }}
                    {...{ property_1: "Default" }}
                  />
                  {/* name="Profile" id="206:13104" type="INSTANCE" */}
                  <QodeCustom204899
                    style={{
                      ...{
                        display: "flex",
                        padding: "20px",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        borderLeft:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ property_1: "Default" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="715:30772" */}
      {`${screensize}` === `1366` && (
        <>
          {/* name="screensize=1366" id="715:30772" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1366px",
                height: "768px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                background: "var(--app-bg, #f4f4f6)",
              },
              ...style,
            }}
          >
            {/* name="Navbar" id="206:19114" type="INSTANCE" */}
            <QodeCustom13120
              style={{
                ...{
                  display: "flex",
                  width: "84px",
                  height: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="b" id="206:19115" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "24px 40px 0px 40px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "var(--app-bg, #f4f4f6)",
                },
                ...{},
              }}
            >
              {/* name="Job title" id="206:19116" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    height: "42px",
                    
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius:
                      "0px 0px var(--border-radius-large, 12px) var(--border-radius-large, 12px)",
                  },
                  ...{},
                }}
              >
                {/* name="Wrap" id="206:19117" type="FRAME" */}
                <div
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "12px" },
                    ...{},
                  }}
                >
                  {/* name="Button" id="206:19118" type="INSTANCE" */}
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
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeChevronLeft />,
                      buttonname: "Source new job",
                      selectIconLeft: <Icon.QodePlus />,
                      iconLeft: true,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Title" id="206:19119" type="FRAME" */}
                  <div
                    style={{
                      ...{ display: "flex", alignItems: "center", gap: "4px" },
                      ...{},
                    }}
                  >
                    <span
                      style={{
                        ...{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-size-sizemd-20px, 20px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight:
                            "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          textDecorationLine: "underline",
                        },
                        ...{},
                      }}
                    >{`Senior Software Developer `}</span>
                    {/* name="angle-down" id="206:19121" type="INSTANCE" */}
                    <Icon.QodeAngleDown
                      style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                      {...{}}
                    />
                  </div>
                  {/* name="Button" id="206:19122" type="INSTANCE" */}
                  <QodeButton
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
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      buttonname: "View JD",
                      selectIconLeft: <Icon.QodeIcons />,
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="Special button/Shortlist" id="206:19123" type="INSTANCE" */}
                <QodeCustom438719
                  style={{
                    ...{
                      display: "flex",
                      height: "40px",
                      padding: "8px 20px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "2px solid var(--border-border-primary-20, #158de2)",
                      background: "var(--neutral-white, #fff)",
                      boxShadow:
                        "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                    },
                    ...{},
                  }}
                  {...{ state: "Default" }}
                />
              </div>
              {/* name="Wrap" id="206:19124" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    borderRadius: "12px 12px 0px 0px",
                    border:
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                {/* name="Search filter" id="206:19125" type="INSTANCE" */}
                <QodeCustom588051
                  style={{
                    ...{
                      display: "flex",
                      padding: "8px 12px",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                      borderRadius:
                        "var(--border-radius-large, 12px) var(--border-radius-large, 12px) 0px 0px",
                      border:
                        "1px solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--neutral-gray-10, #e3e3e3)",
                    },
                    ...{},
                  }}
                  {...{ property_1: "Default" }}
                />
                {/* name="Body" id="206:19126" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      background: "#FFF",
                    },
                    ...{},
                  }}
                >
                  {/* name="List | Profile" id="206:19127" type="INSTANCE" */}
                  <QodeCustom7110910
                    style={{
                      ...{
                        display: "flex",
                        width: "353px",
                        flexDirection: "column",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "#FFF",
                      },
                      ...{},
                    }}
                    {...{ property_1: "Default" }}
                  />
                  {/* name="Profile" id="206:19128" type="INSTANCE" */}
                  <QodeCustom204899
                    style={{
                      ...{
                        display: "flex",
                        padding: "20px",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        borderLeft:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ property_1: "Default" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="715:30770" */}
      {`${screensize}` === `1440` && (
        <>
          {/* name="screensize=1440" id="715:30770" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1440px",
                height: "1024px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                background: "var(--app-bg, #f4f4f6)",
              },
              ...style,
            }}
          >
            {/* name="Navbar" id="206:20171" type="INSTANCE" */}
            <QodeCustom13120
              style={{
                ...{
                  display: "flex",
                  width: "84px",
                  height: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="b" id="206:20172" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "24px 40px 0px 40px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "var(--app-bg, #f4f4f6)",
                },
                ...{},
              }}
            >
              {/* name="Job title" id="206:20173" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    height: "42px",
                    
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius:
                      "0px 0px var(--border-radius-large, 12px) var(--border-radius-large, 12px)",
                  },
                  ...{},
                }}
              >
                {/* name="Wrap" id="206:20174" type="FRAME" */}
                <div
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "12px" },
                    ...{},
                  }}
                >
                  {/* name="Button" id="206:20175" type="INSTANCE" */}
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
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeChevronLeft />,
                      buttonname: "Source new job",
                      selectIconLeft: <Icon.QodePlus />,
                      iconLeft: true,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Title" id="206:20176" type="FRAME" */}
                  <div
                    style={{
                      ...{ display: "flex", alignItems: "center", gap: "4px" },
                      ...{},
                    }}
                  >
                    <span
                      style={{
                        ...{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-size-sizemd-20px, 20px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight:
                            "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          textDecorationLine: "underline",
                        },
                        ...{},
                      }}
                    >{`Senior Software Developer `}</span>
                    {/* name="angle-down" id="206:20178" type="INSTANCE" */}
                    <Icon.QodeAngleDown
                      style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                      {...{}}
                    />
                  </div>
                  {/* name="Button" id="206:20179" type="INSTANCE" */}
                  <QodeButton
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
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      buttonname: "View JD",
                      selectIconLeft: <Icon.QodeIcons />,
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="Special button/Shortlist" id="206:20180" type="INSTANCE" */}
                <QodeCustom438719
                  style={{
                    ...{
                      display: "flex",
                      height: "40px",
                      padding: "8px 20px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "2px solid var(--border-border-primary-20, #158de2)",
                      background: "var(--neutral-white, #fff)",
                      boxShadow:
                        "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                    },
                    ...{},
                  }}
                  {...{ state: "Default" }}
                />
              </div>
              {/* name="Wrap" id="206:20181" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    borderRadius: "12px 12px 0px 0px",
                    border:
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                {/* name="Search filter" id="206:20182" type="INSTANCE" */}
                <QodeCustom588051
                  style={{
                    ...{
                      display: "flex",
                      padding: "8px 12px",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                      borderRadius:
                        "var(--border-radius-large, 12px) var(--border-radius-large, 12px) 0px 0px",
                      border:
                        "1px solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--neutral-gray-10, #e3e3e3)",
                    },
                    ...{},
                  }}
                  {...{ property_1: "Default" }}
                />
                {/* name="Body" id="206:20183" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      background: "#FFF",
                    },
                    ...{},
                  }}
                >
                  {/* name="List | Profile" id="206:20184" type="INSTANCE" */}
                  <QodeCustom7110910
                    style={{
                      ...{
                        display: "flex",
                        width: "353px",
                        flexDirection: "column",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "#FFF",
                      },
                      ...{},
                    }}
                    {...{ property_1: "Default" }}
                  />
                  {/* name="Profile" id="206:20185" type="INSTANCE" */}
                  <QodeCustom204899
                    style={{
                      ...{
                        display: "flex",
                        padding: "20px",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        borderLeft:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ property_1: "Default" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="715:30771" */}
      {`${screensize}` === `1600` && (
        <>
          {/* name="screensize=1600" id="715:30771" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1600px",
                height: "900px",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                background: "var(--app-bg, #f4f4f6)",
              },
              ...style,
            }}
          >
            {/* name="Navbar" id="206:20732" type="INSTANCE" */}
            <QodeCustom13120
              style={{
                ...{
                  display: "flex",
                  width: "84px",
                  height: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  flexShrink: "0",
                  alignSelf: "stretch",
                  borderRight:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{}}
            />
            {/* name="b" id="206:20733" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "24px 40px 0px 40px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  background: "var(--app-bg, #f4f4f6)",
                },
                ...{},
              }}
            >
              {/* name="Job title" id="206:20734" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    height: "42px",
                    
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius:
                      "0px 0px var(--border-radius-large, 12px) var(--border-radius-large, 12px)",
                  },
                  ...{},
                }}
              >
                {/* name="Wrap" id="206:20735" type="FRAME" */}
                <div
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "12px" },
                    ...{},
                  }}
                >
                  {/* name="Button" id="206:20736" type="INSTANCE" */}
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
                        borderRadius: "var(--border-radius-rounded, 999px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeChevronLeft />,
                      buttonname: "Source new job",
                      selectIconLeft: <Icon.QodePlus />,
                      iconLeft: true,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "icon",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Title" id="206:20737" type="FRAME" */}
                  <div
                    style={{
                      ...{ display: "flex", alignItems: "center", gap: "4px" },
                      ...{},
                    }}
                  >
                    <span
                      style={{
                        ...{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-size-sizemd-20px, 20px)",
                          fontStyle: "normal",
                          fontWeight: "600",
                          lineHeight:
                            "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                          textDecorationLine: "underline",
                        },
                        ...{},
                      }}
                    >{`Senior Software Developer `}</span>
                    {/* name="angle-down" id="206:20739" type="INSTANCE" */}
                    <Icon.QodeAngleDown
                      style={{ ...{ width: "20px", height: "20px" }, ...{} }}
                      {...{}}
                    />
                  </div>
                  {/* name="Button" id="206:20740" type="INSTANCE" */}
                  <QodeButton
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
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      buttonname: "View JD",
                      selectIconLeft: <Icon.QodeIcons />,
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                </div>
                {/* name="Special button/Shortlist" id="206:20741" type="INSTANCE" */}
                <QodeCustom438719
                  style={{
                    ...{
                      display: "flex",
                      height: "40px",
                      padding: "8px 20px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8px",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "2px solid var(--border-border-primary-20, #158de2)",
                      background: "var(--neutral-white, #fff)",
                      boxShadow:
                        "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                    },
                    ...{},
                  }}
                  {...{ state: "Default" }}
                />
              </div>
              {/* name="Wrap" id="206:20742" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                    borderRadius: "12px 12px 0px 0px",
                    border:
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                {/* name="Search filter" id="206:20743" type="INSTANCE" */}
                <QodeCustom588051
                  style={{
                    ...{
                      display: "flex",
                      padding: "8px 12px",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                      borderRadius:
                        "var(--border-radius-large, 12px) var(--border-radius-large, 12px) 0px 0px",
                      border:
                        "1px solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "var(--neutral-gray-10, #e3e3e3)",
                    },
                    ...{},
                  }}
                  {...{ property_1: "Default" }}
                />
                {/* name="Body" id="206:20744" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                      background: "#FFF",
                    },
                    ...{},
                  }}
                >
                  {/* name="List | Profile" id="206:20745" type="INSTANCE" */}
                  <QodeCustom7110910
                    style={{
                      ...{
                        display: "flex",
                        width: "353px",
                        flexDirection: "column",
                        alignItems: "center",
                        alignSelf: "stretch",
                        background: "#FFF",
                      },
                      ...{},
                    }}
                    {...{ property_1: "Default" }}
                  />
                  {/* name="Profile" id="206:20746" type="INSTANCE" */}
                  <QodeCustom204899
                    style={{
                      ...{
                        display: "flex",
                        padding: "20px",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        borderLeft:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "var(--background-bg-white, #fff)",
                      },
                      ...{},
                    }}
                    {...{ property_1: "Default" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
