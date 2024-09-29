// id="43:23425"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom198747736 } from "@designSystem/custom/QodeCustom198747736"
import { QodeCustom698757 } from "@designSystem/custom/QodeCustom698757"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom4310802 } from "@designSystem/custom/QodeCustom4310802"
import { QodeCustom228149326 } from "@designSystem/custom/QodeCustom228149326"
import { QodeCustom198747739 } from "@designSystem/custom/QodeCustom198747739"

export interface QodeCustom4323425Props {
  showDelete?: boolean
  property_1?: "active" | "default" | "hover"
  verified?: "false" | "true"
}

export const QodeCustom4323425: React.FC<
  QodeCustom4323425Props & { style?: CSSProperties }
> = ({
  showDelete = true,
  property_1 = "default",
  verified = "false",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Shortlisted/List item" id="43:23425" type="COMPONENT_SET" */}
      {/* id="43:23424" */}
      {`${property_1}` === `default` && `${verified}` === `false` && (
        <>
          {/* name="Property 1=default, verified=false" id="43:23424" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "352px",
                padding: "12px 16px",
                alignItems: "flex-start",
                gap: "24px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "#FFF",
              },
              ...style,
            }}
          >
            {/* name="Header" id="43:23681" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "300px",
                  alignItems: "flex-start",
                  gap: "12px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="1987:50993" type="INSTANCE" */}
              <QodeCustom198747736
                style={{
                  ...{
                    display: "flex",
                    width: "38px",
                    height: "38px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{ verified: false, size: "38" }}
              />
              {/* name="R" id="43:23683" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="wrap" id="43:23684" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        maxHeight: "var(--line-height-lineheight, 22px)",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                  {/* name="YoE" id="490:28738" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      },
                      ...{},
                    }}
                  >
                    <span
                      style={{
                        ...{
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
                    >{`12 YoE`}</span>
                  </div>
                </div>
                <span
                  style={{
                    ...{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "1",
                      alignSelf: "stretch",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer at The Chemico`}</span>
                {/* name="Location" id="69:8862" type="FRAME" */}
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
                  {/* name="location-dot" id="69:8863" type="INSTANCE" */}
                  <QodeCustom698757
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        flex: "1 0 0",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
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
            {/* name="Frame 37201" id="43:23365" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              {/* name="Button" id="43:23366" type="INSTANCE" */}
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
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  },
                  ...{},
                }}
                {...{
                  title: "Add notes",
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Upload CV" id="43:23367" type="INSTANCE" */}
              <QodeCustom4310802
                style={{
                  ...{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
            </div>
            {/* name="Indicator" id="43:23368" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "15px",
                  borderRadius: "8px",
                  background: "#FF7878",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Button" id="69:6437" type="INSTANCE" */}
            <QodeCustom228149326
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  opacity: "0.5",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Button",
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="246:16842" */}
      {`${property_1}` === `hover` && `${verified}` === `false` && (
        <>
          {/* name="Property 1=hover, verified=false" id="246:16842" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "352px",
                padding: "12px 16px",
                alignItems: "flex-start",
                gap: "24px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="490:29091" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "300px",
                  alignItems: "flex-start",
                  gap: "12px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="1987:51004" type="INSTANCE" */}
              <QodeCustom198747736
                style={{
                  ...{
                    display: "flex",
                    width: "38px",
                    height: "38px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{ verified: false, size: "38" }}
              />
              {/* name="R" id="490:29093" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="wrap" id="490:29094" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        maxHeight: "var(--line-height-lineheight, 22px)",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                  {/* name="YoE" id="490:29096" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      },
                      ...{},
                    }}
                  >
                    <span
                      style={{
                        ...{
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
                    >{`12 YoE`}</span>
                  </div>
                </div>
                <span
                  style={{
                    ...{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "1",
                      alignSelf: "stretch",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer at The Chemico`}</span>
                {/* name="Location" id="490:29099" type="FRAME" */}
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
                  {/* name="location-dot" id="490:29100" type="INSTANCE" */}
                  <QodeCustom698757
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        flex: "1 0 0",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
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
            {/* name="Frame 37201" id="246:16854" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              {/* name="Button" id="246:16855" type="INSTANCE" */}
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
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  },
                  ...{},
                }}
                {...{
                  title: "Add notes",
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Upload CV" id="246:16856" type="INSTANCE" */}
              <QodeCustom4310802
                style={{
                  ...{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
            </div>
            {/* name="Indicator" id="246:16857" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "15px",
                  borderRadius: "8px",
                  background: "#FF7878",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Button" id="246:16858" type="INSTANCE" */}
            <QodeCustom228149326
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  opacity: "0.5",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Button",
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="43:23423" */}
      {`${property_1}` === `active` && `${verified}` === `false` && (
        <>
          {/* name="Property 1=active, verified=false" id="43:23423" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "352px",
                padding: "12px 16px",
                alignItems: "flex-start",
                gap: "24px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-primary-20, #158de2)",
                background: "var(--blue-techblue-5, #f8fcff)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="490:29136" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "300px",
                  alignItems: "flex-start",
                  gap: "12px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="1987:51015" type="INSTANCE" */}
              <QodeCustom198747736
                style={{
                  ...{
                    display: "flex",
                    width: "38px",
                    height: "38px",
                    justifyContent: "center",
                    alignItems: "center",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{ verified: false, size: "38" }}
              />
              {/* name="R" id="490:29138" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="wrap" id="490:29139" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        maxHeight: "var(--line-height-lineheight, 22px)",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                  {/* name="YoE" id="490:29141" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      },
                      ...{},
                    }}
                  >
                    <span
                      style={{
                        ...{
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
                    >{`12 YoE`}</span>
                  </div>
                </div>
                <span
                  style={{
                    ...{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "1",
                      alignSelf: "stretch",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer at The Chemico`}</span>
                {/* name="Location" id="490:29144" type="FRAME" */}
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
                  {/* name="location-dot" id="490:29145" type="INSTANCE" */}
                  <QodeCustom698757
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        flex: "1 0 0",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
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
            {/* name="Frame 37201" id="43:23395" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "794px",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              {/* name="Button" id="43:23396" type="INSTANCE" */}
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
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  },
                  ...{},
                }}
                {...{
                  title: "Add notes",
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Upload CV" id="43:23397" type="INSTANCE" */}
              <QodeCustom4310802
                style={{
                  ...{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
            </div>
            {/* name="Indicator" id="43:23398" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "15px",
                  borderRadius: "8px",
                  background: "#FF7878",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Button" id="69:6584" type="INSTANCE" */}
            <QodeCustom228149326
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Button",
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2099:85754" */}
      {`${property_1}` === `default` && `${verified}` === `true` && (
        <>
          {/* name="Property 1=default, verified=true" id="2099:85754" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "352px",
                padding: "12px 16px",
                alignItems: "flex-start",
                gap: "24px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "#FFF",
              },
              ...style,
            }}
          >
            {/* name="Header" id="2099:85755" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "300px",
                  alignItems: "flex-start",
                  gap: "12px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="2099:85756" type="INSTANCE" */}
              <QodeCustom198747739
                style={{
                  ...{ width: "38px", height: "38px", flexShrink: "0" },
                  ...{},
                }}
                {...{ verified: true, size: "38" }}
              />
              {/* name="R" id="2099:85757" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="wrap" id="2099:85758" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        maxHeight: "var(--line-height-lineheight, 22px)",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                  {/* name="YoE" id="2099:85760" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      },
                      ...{},
                    }}
                  >
                    <span
                      style={{
                        ...{
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
                    >{`12 YoE`}</span>
                  </div>
                </div>
                <span
                  style={{
                    ...{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "1",
                      alignSelf: "stretch",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer at The Chemico`}</span>
                {/* name="Location" id="2099:85763" type="FRAME" */}
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
                  {/* name="location-dot" id="2099:85764" type="INSTANCE" */}
                  <QodeCustom698757
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        flex: "1 0 0",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
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
            {/* name="Frame 37201" id="2099:85766" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              {/* name="Button" id="2099:85767" type="INSTANCE" */}
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
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  },
                  ...{},
                }}
                {...{
                  title: "Add notes",
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Upload CV" id="2099:85768" type="INSTANCE" */}
              <QodeCustom4310802
                style={{
                  ...{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
            </div>
            {/* name="Indicator" id="2099:85769" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "15px",
                  borderRadius: "8px",
                  background: "#FF7878",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Button" id="2099:85770" type="INSTANCE" */}
            <QodeCustom228149326
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  opacity: "0.5",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Button",
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2099:85714" */}
      {`${property_1}` === `hover` && `${verified}` === `true` && (
        <>
          {/* name="Property 1=hover, verified=true" id="2099:85714" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "352px",
                padding: "12px 16px",
                alignItems: "flex-start",
                gap: "24px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="2099:85715" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "300px",
                  alignItems: "flex-start",
                  gap: "12px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="2099:85716" type="INSTANCE" */}
              <QodeCustom198747739
                style={{
                  ...{ width: "38px", height: "38px", flexShrink: "0" },
                  ...{},
                }}
                {...{ verified: true, size: "38" }}
              />
              {/* name="R" id="2099:85717" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="wrap" id="2099:85718" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        maxHeight: "var(--line-height-lineheight, 22px)",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                  {/* name="YoE" id="2099:85720" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      },
                      ...{},
                    }}
                  >
                    <span
                      style={{
                        ...{
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
                    >{`12 YoE`}</span>
                  </div>
                </div>
                <span
                  style={{
                    ...{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "1",
                      alignSelf: "stretch",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer at The Chemico`}</span>
                {/* name="Location" id="2099:85723" type="FRAME" */}
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
                  {/* name="location-dot" id="2099:85724" type="INSTANCE" */}
                  <QodeCustom698757
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        flex: "1 0 0",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
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
            {/* name="Frame 37201" id="2099:85726" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              {/* name="Button" id="2099:85727" type="INSTANCE" */}
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
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  },
                  ...{},
                }}
                {...{
                  title: "Add notes",
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Upload CV" id="2099:85728" type="INSTANCE" */}
              <QodeCustom4310802
                style={{
                  ...{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
            </div>
            {/* name="Indicator" id="2099:85729" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "15px",
                  borderRadius: "8px",
                  background: "#FF7878",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Button" id="2099:85730" type="INSTANCE" */}
            <QodeCustom228149326
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  opacity: "0.5",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Button",
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="2099:85674" */}
      {`${property_1}` === `active` && `${verified}` === `true` && (
        <>
          {/* name="Property 1=active, verified=true" id="2099:85674" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "352px",
                padding: "12px 16px",
                alignItems: "flex-start",
                gap: "24px",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "2px solid var(--border-border-primary-20, #158de2)",
                background: "var(--blue-techblue-5, #f8fcff)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="2099:85675" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "300px",
                  alignItems: "flex-start",
                  gap: "12px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="2099:85676" type="INSTANCE" */}
              <QodeCustom198747739
                style={{
                  ...{ width: "38px", height: "38px", flexShrink: "0" },
                  ...{},
                }}
                {...{ verified: true, size: "38" }}
              />
              {/* name="R" id="2099:85677" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "4px",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                {/* name="wrap" id="2099:85678" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        maxHeight: "var(--line-height-lineheight, 22px)",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                  {/* name="YoE" id="2099:85680" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-10, #e3e3e3)",
                      },
                      ...{},
                    }}
                  >
                    <span
                      style={{
                        ...{
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
                    >{`12 YoE`}</span>
                  </div>
                </div>
                <span
                  style={{
                    ...{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "1",
                      alignSelf: "stretch",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer at The Chemico`}</span>
                {/* name="Location" id="2099:85683" type="FRAME" */}
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
                  {/* name="location-dot" id="2099:85684" type="INSTANCE" */}
                  <QodeCustom698757
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        flex: "1 0 0",
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily: 'var(--family-family, "sf pro display")',
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
            {/* name="Frame 37201" id="2099:85686" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "794px",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "8px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              {/* name="Button" id="2099:85687" type="INSTANCE" */}
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
                    borderRadius: "var(--style-radius-borderround, 999px)",
                    background: "var(--color-info-colorinfo, #2e2e2e)",
                  },
                  ...{},
                }}
                {...{
                  title: "Add notes",
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Upload CV" id="2099:85688" type="INSTANCE" */}
              <QodeCustom4310802
                style={{
                  ...{
                    display: "flex",
                    width: "124px",
                    alignItems: "flex-start",
                    flexShrink: "0",
                  },
                  ...{},
                }}
                {...{ property_1: "Default" }}
              />
            </div>
            {/* name="Indicator" id="2099:85689" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "8px",
                  height: "8px",
                  position: "absolute",
                  left: "40px",
                  bottom: "15px",
                  borderRadius: "8px",
                  background: "#FF7878",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Button" id="2099:85690" type="INSTANCE" */}
            <QodeCustom228149326
              style={{
                ...{
                  display: "flex",
                  width: "24px",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "var(--size-padding-paddingxxs, 4px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Button",
                iconLeft: true,
                type: "default",
                size: "small",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
