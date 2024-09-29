// id="2019:49444"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom266995 } from "@designSystem/custom/QodeCustom266995"
import { QodeCustom698757 } from "@designSystem/custom/QodeCustom698757"
import { QodeCustom228149016 } from "@designSystem/custom/QodeCustom228149016"
import { QodeCustom228149316 } from "@designSystem/custom/QodeCustom228149316"
import { QodeCustom55935790 } from "@designSystem/custom/QodeCustom55935790"
import { QodeCustom228149029 } from "@designSystem/custom/QodeCustom228149029"
import { QodeCustom54532247 } from "@designSystem/custom/QodeCustom54532247"
import { QodeCustom32839533 } from "@designSystem/custom/QodeCustom32839533"

export interface QodeCustom201949444Props {
  property_1?: "Default" | "Variant2"
}

export const QodeCustom201949444: React.FC<
  QodeCustom201949444Props & { style?: CSSProperties }
> = ({ property_1 = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Profile left" id="2019:49444" type="COMPONENT_SET" */}
      {/* id="2019:49437" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="2019:49437" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "340px",
                height: "714px",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: "0",
                borderRight:
                  "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--text-text-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Card" id="2019:49360" type="FRAME" */}
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
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              {/* name="avatar" id="2019:49361" type="INSTANCE" */}
              <QodeCustom266995
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
              {/* name="Frame 37378" id="2019:49362" type="FRAME" */}
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
                {/* name="Frame 37368" id="2019:49363" type="FRAME" */}
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
                  {/* name="Name yoe" id="2019:49364" type="FRAME" */}
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
                          fontFamily: 'var(--family-family, "sf pro display")',
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
                {/* name="Frame 37356" id="2019:49367" type="FRAME" */}
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
                  {/* name="Location" id="2019:49369" type="FRAME" */}
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
                    {/* name="location-dot" id="2019:49370" type="INSTANCE" */}
                    <QodeCustom698757
                      style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                      {...{}}
                    />
                    <span
                      style={{
                        ...{
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
              {/* name="Frame 37376" id="2019:49372" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "center", gap: "8px" },
                  ...{},
                }}
              >
                {/* name="Button" id="2019:49373" type="INSTANCE" */}
                <QodeCustom228149016
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
                        "1px solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
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
              {/* name="Button" id="2019:49374" type="INSTANCE" */}
              <QodeCustom228149316
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
                  content: "icon",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
            {/* name="CV" id="2019:49375" type="INSTANCE" */}
            <QodeCustom55935790
              style={{
                ...{
                  display: "flex",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
              {...{ property_1: "Default" }}
            />
            {/* name="Job status" id="2019:49376" type="FRAME" */}
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
              {/* name="Header" id="2019:49377" type="FRAME" */}
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
                {/* name="Button" id="2019:49379" type="INSTANCE" */}
                <QodeCustom228149029
                  style={{
                    ...{
                      display: "flex",
                      width: "53px",
                      padding: "4px 8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Assign",
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
              {/* name="wr" id="2019:49380" type="FRAME" */}
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
                {/* name="Job status" id="2019:49381" type="INSTANCE" */}
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
                {/* name="Job status" id="2019:49382" type="INSTANCE" */}
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
                {/* name="Job status" id="2019:49383" type="INSTANCE" */}
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
        </>
      )}
      {/* id="2019:49445" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="2019:49445" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "340px",
                height: "714px",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: "0",
                borderRight:
                  "1px solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--text-text-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Card" id="2019:49446" type="FRAME" */}
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
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              {/* name="avatar" id="2019:49447" type="INSTANCE" */}
              <QodeCustom266995
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
              {/* name="Frame 37378" id="2019:49448" type="FRAME" */}
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
                {/* name="Frame 37368" id="2019:49449" type="FRAME" */}
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
                  {/* name="Name yoe" id="2019:49450" type="FRAME" */}
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
                          fontFamily: 'var(--family-family, "sf pro display")',
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
                {/* name="Frame 37356" id="2019:49453" type="FRAME" */}
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
                  {/* name="Location" id="2019:49455" type="FRAME" */}
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
                    {/* name="location-dot" id="2019:49456" type="INSTANCE" */}
                    <QodeCustom698757
                      style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                      {...{}}
                    />
                    <span
                      style={{
                        ...{
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
              {/* name="Frame 37376" id="2019:49458" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "center", gap: "8px" },
                  ...{},
                }}
              >
                {/* name="Button" id="2019:49459" type="INSTANCE" */}
                <QodeCustom228149016
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
                        "1px solid var(--border-border-neutral-40, #bfbfbf)",
                      background: "var(--background-bg-white, #fff)",
                    },
                    ...{},
                  }}
                  {...{
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
              {/* name="Button" id="2019:49460" type="INSTANCE" */}
              <QodeCustom228149316
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
                  content: "icon",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
            {/* name="CV" id="2019:49461" type="INSTANCE" */}
            <QodeCustom55935790
              style={{
                ...{
                  display: "flex",
                  padding: "16px 20px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "1px solid var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
              {...{ property_1: "Default" }}
            />
            {/* name="Job status" id="2019:49462" type="FRAME" */}
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
              {/* name="Header" id="2019:49463" type="FRAME" */}
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
                {/* name="Button" id="2019:49465" type="INSTANCE" */}
                <QodeCustom228149029
                  style={{
                    ...{
                      display: "flex",
                      width: "53px",
                      padding: "4px 8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                    },
                    ...{},
                  }}
                  {...{
                    buttonname: "Assign",
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
              {/* name="Frame 37490" id="2019:49537" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingTop: "32px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                  },
                  ...{},
                }}
              >
                {/* name="Frame 37489" id="2019:49535" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "8px",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--border-radius-rounded, 999px)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                >
                  {/* name="briefcase" id="2019:49532" type="INSTANCE" */}
                  <QodeCustom32839533
                    style={{ ...{ width: "24px", height: "24px" }, ...{} }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-30, #656565)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`No job assigned`}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
