// id="40:9539"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom198747736 } from "@designSystem/custom/QodeCustom198747736"
import { QodeCustom698757 } from "@designSystem/custom/QodeCustom698757"
import { QodeCustom5016533 } from "@designSystem/custom/QodeCustom5016533"
import { QodeCustom198747739 } from "@designSystem/custom/QodeCustom198747739"

export interface QodeCustom409539Props {
  state?: "active" | "default" | "hover"
  verified?: "false" | "true"
}

export const QodeCustom409539: React.FC<
  QodeCustom409539Props & { style?: CSSProperties }
> = ({ state = "default", verified = "false", style, ...rest }) => {
  return (
    <>
      {/* name="Profile/List item" id="40:9539" type="COMPONENT_SET" */}
      {/* id="40:9540" */}
      {`${state}` === `default` && `${verified}` === `false` && (
        <>
          {/* name="state=default, verified=false" id="40:9540" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "350px",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                borderBottom:
                  "1px solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="40:9541" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="1987:47809" type="INSTANCE" */}
              <QodeCustom198747736
                style={{
                  ...{
                    display: "flex",
                    width: "38px",
                    height: "38px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{ verified: false, size: "38" }}
              />
              {/* name="Content" id="40:9582" type="FRAME" */}
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
                {/* name="wrap" id="40:9583" type="FRAME" */}
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
                  <span
                    style={{
                      ...{
                        maxWidth: "212px",
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
                  {/* name="YoE" id="40:9585" type="FRAME" */}
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
                      height: "20px",
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer at The Chemico Vietnam Co., Ltd.`}</span>
                {/* name="Location" id="40:9588" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="location-dot" id="69:8839" type="INSTANCE" */}
                  <QodeCustom698757
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "1",
                        flex: "1 0 0",
                        overflow: "hidden",
                        color: "var(--text-text-neutral-40, #464646)",
                        textOverflow: "ellipsis",
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
                  >{`Ho Chi Minh city, Vietnam`}</span>
                </div>
              </div>
            </div>
            {/* name="eye" id="71:9955" type="INSTANCE" */}
            <QodeCustom5016533
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "26px",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="71:11140" */}
      {`${state}` === `hover` && `${verified}` === `false` && (
        <>
          {/* name="state=hover, verified=false" id="71:11140" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "350px",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                borderBottom:
                  "2px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="71:11141" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="1987:47798" type="INSTANCE" */}
              <QodeCustom198747736
                style={{
                  ...{
                    display: "flex",
                    width: "38px",
                    height: "38px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{ verified: false, size: "38" }}
              />
              {/* name="Content" id="71:11143" type="FRAME" */}
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
                {/* name="wrap" id="500:27442" type="FRAME" */}
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
                  <span
                    style={{
                      ...{
                        maxWidth: "212px",
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
                  {/* name="YoE" id="500:27444" type="FRAME" */}
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
                      height: "20px",
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer at The Chemico Vietnam Co., Ltd.`}</span>
                {/* name="Location" id="71:11149" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="location-dot" id="71:11150" type="INSTANCE" */}
                  <QodeCustom698757
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "1",
                        flex: "1 0 0",
                        overflow: "hidden",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textOverflow: "ellipsis",
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
                  >{`Ho Chi Minh city, Vietnam`}</span>
                </div>
              </div>
            </div>
            {/* name="eye" id="71:11152" type="INSTANCE" */}
            <QodeCustom5016533
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "26px",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="40:9553" */}
      {`${state}` === `active` && `${verified}` === `false` && (
        <>
          {/* name="state=active, verified=false" id="40:9553" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "350px",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                borderBottom:
                  "2px solid var(--border-border-primary-20, #158de2)",
                background: "#F6FBFF",
              },
              ...style,
            }}
          >
            {/* name="Header" id="40:9554" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="1987:47787" type="INSTANCE" */}
              <QodeCustom198747736
                style={{
                  ...{
                    display: "flex",
                    width: "38px",
                    height: "38px",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
                {...{ verified: false, size: "38" }}
              />
              {/* name="Frame 37215" id="40:9556" type="FRAME" */}
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
                {/* name="wrap" id="500:27456" type="FRAME" */}
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
                  <span
                    style={{
                      ...{
                        maxWidth: "212px",
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
                  {/* name="YoE" id="500:27458" type="FRAME" */}
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
                      height: "20px",
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer at The Chemico Vietnam Co., Ltd.`}</span>
                {/* name="Location" id="69:9009" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="location-dot" id="69:9010" type="INSTANCE" */}
                  <QodeCustom698757
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "1",
                        flex: "1 0 0",
                        overflow: "hidden",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textOverflow: "ellipsis",
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
                  >{`Ho Chi Minh city, Vietnam`}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="2099:85958" */}
      {`${state}` === `default` && `${verified}` === `true` && (
        <>
          {/* name="state=default, verified=true" id="2099:85958" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "350px",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                borderBottom:
                  "1px solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="2099:85959" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="2099:85960" type="INSTANCE" */}
              <QodeCustom198747739
                style={{ ...{ width: "38px", height: "38px" }, ...{} }}
                {...{ verified: true, size: "38" }}
              />
              {/* name="Content" id="2099:85961" type="FRAME" */}
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
                {/* name="wrap" id="2099:85962" type="FRAME" */}
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
                  <span
                    style={{
                      ...{
                        maxWidth: "212px",
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
                  {/* name="YoE" id="2099:85964" type="FRAME" */}
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
                      height: "20px",
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer at The Chemico Vietnam Co., Ltd.`}</span>
                {/* name="Location" id="2099:85967" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="location-dot" id="2099:85968" type="INSTANCE" */}
                  <QodeCustom698757
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "1",
                        flex: "1 0 0",
                        overflow: "hidden",
                        color: "var(--text-text-neutral-40, #464646)",
                        textOverflow: "ellipsis",
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
                  >{`Ho Chi Minh city, Vietnam`}</span>
                </div>
              </div>
            </div>
            {/* name="eye" id="2099:85970" type="INSTANCE" */}
            <QodeCustom5016533
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "26px",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="2099:85934" */}
      {`${state}` === `hover` && `${verified}` === `true` && (
        <>
          {/* name="state=hover, verified=true" id="2099:85934" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "350px",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                borderBottom:
                  "2px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="2099:85935" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="2099:85936" type="INSTANCE" */}
              <QodeCustom198747739
                style={{ ...{ width: "38px", height: "38px" }, ...{} }}
                {...{ verified: true, size: "38" }}
              />
              {/* name="Content" id="2099:85937" type="FRAME" */}
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
                {/* name="wrap" id="2099:85938" type="FRAME" */}
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
                  <span
                    style={{
                      ...{
                        maxWidth: "212px",
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
                  {/* name="YoE" id="2099:85940" type="FRAME" */}
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
                      height: "20px",
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer at The Chemico Vietnam Co., Ltd.`}</span>
                {/* name="Location" id="2099:85943" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="location-dot" id="2099:85944" type="INSTANCE" */}
                  <QodeCustom698757
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "1",
                        flex: "1 0 0",
                        overflow: "hidden",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textOverflow: "ellipsis",
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
                  >{`Ho Chi Minh city, Vietnam`}</span>
                </div>
              </div>
            </div>
            {/* name="eye" id="2099:85946" type="INSTANCE" */}
            <QodeCustom5016533
              style={{
                ...{
                  display: "flex",
                  width: "12px",
                  height: "12px",
                  padding: "1.8px 0.599px 1.8px 0.6px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  left: "28px",
                  bottom: "26px",
                },
                ...{},
              }}
              {...{}}
            />
          </div>
        </>
      )}
      {/* id="2099:85912" */}
      {`${state}` === `active` && `${verified}` === `true` && (
        <>
          {/* name="state=active, verified=true" id="2099:85912" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "350px",
                padding: "12px 16px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                borderBottom:
                  "2px solid var(--border-border-primary-20, #158de2)",
                background: "#F6FBFF",
              },
              ...style,
            }}
          >
            {/* name="Header" id="2099:85913" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "var(--font-size-base, 14px)",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Profile/Avatar" id="2099:85914" type="INSTANCE" */}
              <QodeCustom198747739
                style={{ ...{ width: "38px", height: "38px" }, ...{} }}
                {...{ verified: true, size: "38" }}
              />
              {/* name="Frame 37215" id="2099:85915" type="FRAME" */}
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
                {/* name="wrap" id="2099:85916" type="FRAME" */}
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
                  <span
                    style={{
                      ...{
                        maxWidth: "212px",
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
                  {/* name="YoE" id="2099:85918" type="FRAME" */}
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
                      height: "20px",
                      maxHeight: "40px",
                      alignSelf: "stretch",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Senior Software Developer at The Chemico Vietnam Co., Ltd.`}</span>
                {/* name="Location" id="2099:85921" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  {/* name="location-dot" id="2099:85922" type="INSTANCE" */}
                  <QodeCustom698757
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: "1",
                        flex: "1 0 0",
                        overflow: "hidden",
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textOverflow: "ellipsis",
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
                  >{`Ho Chi Minh city, Vietnam`}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
