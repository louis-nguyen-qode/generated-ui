// id="405:20246"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom4743 } from "@designSystem/custom/QodeCustom4743"
import { QodeCustom475443 } from "@designSystem/custom/QodeCustom475443"

export interface QodeCustom40520246Props {
  urgent?: boolean
  state?: "default" | "hovered"
  _style?: "2"
}

export const QodeCustom40520246: React.FC<
  QodeCustom40520246Props & { style?: CSSProperties }
> = ({ urgent = false, state = "default", _style = "2", style, ...rest }) => {
  return (
    <>
      {/* name="Job item 2" id="405:20246" type="COMPONENT_SET" */}
      {/* id="405:20268" */}
      {`${state}` === `default` && `${_style}` === `2` && (
        <>
          {/* name="State=default, Style=2" id="405:20268" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "365px",
                maxWidth: "440px",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "12px",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="405:20269" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "12px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Frame 37173" id="405:20270" type="FRAME" */}
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
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-size-sizemd-20px, 20px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                    },
                    ...{},
                  }}
                >{`Sales Consultant`}</span>
                {/* name="arrow-up-right" id="405:20272" type="INSTANCE" */}
                <QodeCustom4743
                  style={{ ...{ width: "24px", height: "24px" }, ...{} }}
                  {...{}}
                />
              </div>
              {/* name="Desc" id="405:20273" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "4px 9px",
                    alignItems: "center",
                    gap: "12px",
                    borderRadius: "99px",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                {/* name="Urgent" id="405:20274" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px var(--size-size-sizexxs-6px, 6px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "12px",
                      background: "var(--neutral-gray-90, #464646)",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: '"SF Pro Display"',
                        fontSize: "10px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "normal",
                      },
                      ...{},
                    }}
                  >{`URGENT`}</span>
                </div>
                <span
                  style={{
                    ...{
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
                >{`3 yoe`}</span>
                {/* name="Line 3" id="405:20277" type="LINE" */}
                <Flex
                  style={{
                    ...{
                      width: "1px",
                      height: "8px",
                      background: "var(--border-border-neutral-50, #6f6f6f)",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
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
                >{`Vietnam`}</span>
              </div>
              {/* name="Skills" id="405:20279" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
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
                      color: "var(--text-text-neutral-30, #656565)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Skills:`}</span>
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
                >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
              </div>
            </div>
            {/* name="Line 2" id="405:20282" type="LINE" */}
            <Flex
              style={{
                ...{
                  width: "365px",
                  height: "1px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Frame 8" id="405:20283" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...{},
              }}
            >
              {/* name="Frame 37174" id="405:24335" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "center", gap: "12px" },
                  ...{},
                }}
              >
                {/* name="Job/Quick access" id="405:24336" type="INSTANCE" */}
                <QodeCustom475443
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "99px",
                    },
                    ...{},
                  }}
                  {...{
                    text: "125 shortlisted",
                    state: "Default",
                    _style: "Text",
                  }}
                />
                {/* name="divider" id="405:24337" type="LINE" */}
                <Flex
                  style={{
                    ...{
                      width: "1px",
                      height: "15px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
                {/* name="Job/Quick access" id="405:24338" type="INSTANCE" */}
                <QodeCustom475443
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "99px",
                    },
                    ...{},
                  }}
                  {...{
                    text: "44 interviewed",
                    state: "Default",
                    _style: "Text",
                  }}
                />
              </div>
              <span
                style={{
                  ...{
                    color: "var(--text-text-primary-20, #1597f4)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    textDecorationLine: "underline",
                  },
                  ...{},
                }}
              >{`JD`}</span>
            </div>
          </div>
        </>
      )}
      {/* id="405:20289" */}
      {`${state}` === `hovered` && `${_style}` === `2` && (
        <>
          {/* name="State=hovered, Style=2" id="405:20289" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "365px",
                maxWidth: "440px",
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "12px",
                border: "2px solid var(--border-border-neutral-40, #bfbfbf)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="405:20290" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "12px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Frame 37173" id="405:20291" type="FRAME" */}
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
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-size-sizemd-20px, 20px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                    },
                    ...{},
                  }}
                >{`Sales Consultant`}</span>
                {/* name="arrow-up-right" id="405:20293" type="INSTANCE" */}
                <QodeCustom4743
                  style={{ ...{ width: "24px", height: "24px" }, ...{} }}
                  {...{}}
                />
              </div>
              {/* name="Desc" id="405:20294" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "4px 9px",
                    alignItems: "center",
                    gap: "12px",
                    borderRadius: "99px",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                {/* name="Urgent" id="405:20295" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "2px var(--size-size-sizexxs-6px, 6px)",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "12px",
                      background: "var(--neutral-gray-90, #464646)",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: '"SF Pro Display"',
                        fontSize: "10px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "normal",
                      },
                      ...{},
                    }}
                  >{`URGENT`}</span>
                </div>
                <span
                  style={{
                    ...{
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
                >{`3 yoe`}</span>
                {/* name="Line 3" id="405:20298" type="LINE" */}
                <Flex
                  style={{
                    ...{
                      width: "1px",
                      height: "8px",
                      background: "var(--border-border-neutral-50, #6f6f6f)",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
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
                >{`Vietnam`}</span>
              </div>
              {/* name="Skills" id="405:20300" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
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
                      color: "var(--text-text-neutral-30, #656565)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Skills:`}</span>
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
                >{`Data analysis, Sales automation, Supervising, Salesforce, Hubspot, +5 more`}</span>
              </div>
            </div>
            {/* name="Line 2" id="405:20303" type="LINE" */}
            <Flex
              style={{
                ...{
                  width: "365px",
                  height: "2px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Frame 8" id="405:24673" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "16px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...{},
              }}
            >
              {/* name="Frame 37174" id="405:24674" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "center", gap: "12px" },
                  ...{},
                }}
              >
                {/* name="Job/Quick access" id="405:24675" type="INSTANCE" */}
                <QodeCustom475443
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "99px",
                    },
                    ...{},
                  }}
                  {...{
                    text: "125 shortlisted",
                    state: "Default",
                    _style: "Text",
                  }}
                />
                {/* name="divider" id="405:24676" type="LINE" */}
                <Flex
                  style={{
                    ...{
                      width: "1px",
                      height: "15px",
                      background: "var(--border-border-neutral-30, #d5d5d5)",
                    },
                    ...{},
                  }}
                >
                  <></>
                </Flex>
                {/* name="Job/Quick access" id="405:24677" type="INSTANCE" */}
                <QodeCustom475443
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-size-sizexxs-6px, 6px)",
                      borderRadius: "99px",
                    },
                    ...{},
                  }}
                  {...{
                    text: "44 interviewed",
                    state: "Default",
                    _style: "Text",
                  }}
                />
              </div>
              <span
                style={{
                  ...{
                    color: "var(--text-text-primary-20, #1597f4)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    textDecorationLine: "underline",
                  },
                  ...{},
                }}
              >{`JD`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
