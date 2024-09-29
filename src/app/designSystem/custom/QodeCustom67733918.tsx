// id="677:33918"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom66431666 } from "@designSystem/custom/QodeCustom66431666"
import { QodeCustom228149028 } from "@designSystem/custom/QodeCustom228149028"
import { QodeCustom228149019 } from "@designSystem/custom/QodeCustom228149019"
import { QodeCustom67733618 } from "@designSystem/custom/QodeCustom67733618"
import { QodeCustom66431667 } from "@designSystem/custom/QodeCustom66431667"
import { QodeCustom67733735 } from "@designSystem/custom/QodeCustom67733735"

export interface QodeCustom67733918Props {
  property_1?: "Upcoming" | "Canceled" | "Finished"
}

export const QodeCustom67733918: React.FC<
  QodeCustom67733918Props & { style?: CSSProperties }
> = ({ property_1 = "Upcoming", style, ...rest }) => {
  return (
    <>
      {/* name="Interview/Timeline" id="677:33918" type="COMPONENT_SET" */}
      {/* id="677:33917" */}
      {`${property_1}` === `Upcoming` && (
        <>
          {/* name="Property 1=Upcoming" id="677:33917" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "714px",
                height: "80px",
                padding: "12px 24px",
                alignItems: "flex-start",
                gap: "20px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Datetime" id="677:33740" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "150px",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "4px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Sunday, Sep 15`}</span>
              {/* name="Time" id="745:36368" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "2px 10px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "right",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`10:00 – 11:00 AM`}</span>
              </div>
            </div>
            {/* name="Interview/List item" id="677:33744" type="INSTANCE" */}
            <QodeCustom66431666
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
              {...{ property_1: "2" }}
            />
            {/* name="r" id="677:33745" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  paddingRight: "24px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              {/* name="Description" id="677:33746" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "var(--size-margin-marginxs, 8px)",
                    alignSelf: "stretch",
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
                >{`Description`}</span>
                {/* name="Button" id="677:33748" type="INSTANCE" */}
                <QodeCustom228149028
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "See More",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
              {/* name="Frame 37424" id="677:33749" type="FRAME" */}
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
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      textDecorationLine: "underline",
                    },
                    ...{},
                  }}
                >{`2nd interview | Nguyen Quoc Thai - Technical round 2`}</span>
              </div>
              {/* name="Button" id="677:33752" type="INSTANCE" */}
              <QodeCustom228149019
                style={{
                  ...{
                    display: "flex",
                    width: "82px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Copy link",
                  iconLeft: true,
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
            {/* name="Interview/Badge" id="677:33861" type="INSTANCE" */}
            <QodeCustom67733618
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "32px",
                  padding: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: "0px",
                  borderRadius: "0px 0px 0px 12px",
                  border:
                    "1px solid var(--border-border-focused-primary, #82c8fa)",
                  background:
                    "linear-gradient(163deg, #B8E1FF 0.63%, #CDF6FF 76.87%)",
                },
                ...{},
              }}
              {...{ property_1: "AI" }}
            />
          </div>
        </>
      )}
      {/* id="677:33916" */}
      {`${property_1}` === `Finished` && (
        <>
          {/* name="Property 1=Finished" id="677:33916" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "714px",
                height: "80px",
                padding: "12px 24px",
                alignItems: "flex-start",
                gap: "20px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Datetime" id="677:33765" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "150px",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "4px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Wed, Sep 03`}</span>
              {/* name="Time" id="745:36408" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "2px 10px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "right",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`11:00 AM – 1:00 PM`}</span>
              </div>
            </div>
            {/* name="Interview/List item" id="677:33769" type="INSTANCE" */}
            <QodeCustom66431667
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
              {...{ property_1: "1" }}
            />
            {/* name="r" id="677:33770" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  paddingRight: "24px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              {/* name="Description" id="677:33771" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "var(--size-margin-marginxs, 8px)",
                    alignSelf: "stretch",
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
                >{`Description`}</span>
                {/* name="Button" id="677:33773" type="INSTANCE" */}
                <QodeCustom228149028
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "See More",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
              {/* name="Frame 37424" id="677:33774" type="FRAME" */}
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
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      textDecorationLine: "underline",
                    },
                    ...{},
                  }}
                >{`Exploratory call - Nguyen Quoc Thai - Senior Software developer`}</span>
              </div>
              {/* name="Button" id="677:33776" type="INSTANCE" */}
              <QodeCustom228149019
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 0px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "View result",
                  iconLeft: true,
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
            {/* name="Interview/Badge" id="745:36006" type="INSTANCE" */}
            <QodeCustom67733618
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "32px",
                  padding: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  right: "0px",
                  borderRadius: "0px 0px 0px 12px",
                  border:
                    "1px solid var(--border-border-focused-primary, #82c8fa)",
                  background:
                    "linear-gradient(163deg, #B8E1FF 0.63%, #CDF6FF 76.87%)",
                },
                ...{},
              }}
              {...{ property_1: "AI" }}
            />
          </div>
        </>
      )}
      {/* id="677:33915" */}
      {`${property_1}` === `Canceled` && (
        <>
          {/* name="Property 1=Canceled" id="677:33915" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "714px",
                height: "80px",
                padding: "12px 24px",
                alignItems: "flex-start",
                gap: "20px",
                flexShrink: "0",
                borderRadius: "var(--border-radius-base, 8px)",
                border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Datetime" id="677:33816" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "150px",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "4px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    color: "var(--text-text-neutral-40, #464646)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`Sat, Aug 31`}</span>
              {/* name="Time" id="745:36448" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "2px 10px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      textAlign: "right",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`11:00 AM – 1:00 PM`}</span>
              </div>
            </div>
            {/* name="Interview/List item" id="677:34021" type="INSTANCE" */}
            <QodeCustom67733735
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
              {...{ property_1: "Variant3" }}
            />
            {/* name="r" id="677:33821" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  paddingRight: "24px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  flex: "1 0 0",
                },
                ...{},
              }}
            >
              {/* name="Description" id="677:33822" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "var(--size-margin-marginxs, 8px)",
                    alignSelf: "stretch",
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
                >{`Description`}</span>
                {/* name="Button" id="677:33824" type="INSTANCE" */}
                <QodeCustom228149028
                  style={{
                    ...{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "See More",
                    type: "text",
                    size: "small",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
              {/* name="Frame 37424" id="677:33825" type="FRAME" */}
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
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: "1",
                      overflow: "hidden",
                      color: "var(--text-text-neutral-40, #464646)",
                      textOverflow: "ellipsis",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Exploratory call - Nguyen Quoc Thai`}</span>
              </div>
              <span
                style={{
                  ...{
                    color: "var(--text-text-red, #dc3812)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  },
                  ...{},
                }}
              >{`(Canceled)`}</span>
            </div>
          </div>
        </>
      )}
    </>
  )
}
