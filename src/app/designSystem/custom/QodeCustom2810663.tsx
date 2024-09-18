// id="28:10663"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom562954 } from "@designSystem/custom/QodeCustom562954"
import QodeSvg405608 from "@designSystem/icon/svg/QodeSvg405608"
import QodeSvg2810655 from "@designSystem/icon/svg/QodeSvg2810655"

export interface QodeCustom2810663Props {
  property_1?: "Default" | "Active"
}

export const QodeCustom2810663: React.FC<
  QodeCustom2810663Props & { style?: CSSProperties }
> = ({ property_1 = "Active", style, ...rest }) => {
  return (
    <>
      {/* name="Profile/List item" id="28:10663" type="COMPONENT_SET" */}
      {/* id="28:10662" */}
      {`${property_1}` === `Active` && (
        <>
          {/* name="Property 1=Active" id="28:10662" type="COMPONENT" */}
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
                background: "#FFF",
              },
              ...style,
            }}
          >
            {/* name="Header" id="28:10629" type="FRAME" */}
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
              {/* name="avatar" id="28:10664" type="INSTANCE" */}
              <QodeCustom562954
                style={{
                  ...{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
                  },
                  ...{},
                }}
                {...{
                  opentowork: true,
                  img: true,
                  type: "Round",
                  state: "Default",
                }}
              />
              {/* name="Frame 37215" id="28:10633" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "264px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                  ...{},
                }}
              >
                {/* name="wrap" id="28:10634" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        color: "var(--text-text-primary-30, #158de2)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                  {/* name="Frame 37239" id="28:10636" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      },
                      ...{},
                    }}
                  >
                    <span
                      style={{
                        ...{
                          color: "var(--text-text-neutral-50, #1d1d1d)",
                          fontFamily:
                            'var(--font-family-fontfamily, "sf pro display")',
                          fontSize: "var(--font-size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                        },
                        ...{},
                      }}
                    >{`12 YoE`}</span>
                  </div>
                </div>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
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
                >{`Senior Software Developer at The Chemico Vietnam Co., Ltd.`}</span>
                {/* name="Location" id="40:5607" type="FRAME" */}
                <div
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "8px" },
                    ...{},
                  }}
                >
                  {/* name="Frame" id="40:5608" type="FRAME" */}
                  <QodeSvg405608
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        textAlign: "center",
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
                  >{`Ho Chi Minh city, Viet Nam`}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="28:10661" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="28:10661" type="COMPONENT" */}
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
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Header" id="28:10644" type="FRAME" */}
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
              {/* name="avatar" id="28:10673" type="INSTANCE" */}
              <QodeCustom562954
                style={{
                  ...{
                    display: "flex",
                    width: "36px",
                    height: "36px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--font-size-large, 16px)",
                    borderRadius: "499.5px",
                    background:
                      "var(--color-success-colorsuccesshover, #a3c73e)",
                  },
                  ...{},
                }}
                {...{
                  opentowork: true,
                  img: true,
                  type: "Round",
                  state: "Default",
                }}
              />
              {/* name="Frame 37215" id="28:10648" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "264px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  },
                  ...{},
                }}
              >
                {/* name="wrap" id="28:10649" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                >
                  <span
                    style={{
                      ...{
                        color: "var(--text-text-neutral-40, #464646)",
                        fontFamily:
                          'var(--font-family-fontfamily, "sf pro display")',
                        fontSize: "var(--font-size-heading6, 16px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--line-height-lineheighheading5, 24px) /* 150% */",
                      },
                      ...{},
                    }}
                  >{`Nguyen Quoc Thai`}</span>
                  {/* name="Frame 37240" id="40:5631" type="FRAME" */}
                  <div
                    style={{
                      ...{
                        display: "flex",
                        padding: "2px 7px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: "12px",
                        background: "var(--neutral-gray-5, #f8f6f6)",
                      },
                      ...{},
                    }}
                  >
                    <span
                      style={{
                        ...{
                          color: "var(--text-text-neutral-40, #464646)",
                          fontFamily:
                            'var(--font-family-fontfamily, "sf pro display")',
                          fontSize: "var(--font-size-small, 12px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--line-height-lineheighsm, 16px) /* 133.333% */",
                        },
                        ...{},
                      }}
                    >{`12 YoE`}</span>
                  </div>
                </div>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
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
                >{`Senior Software Developer at The Chemico Vietnam Co., Ltd.`}</span>
                {/* name="Location" id="28:10654" type="FRAME" */}
                <div
                  style={{
                    ...{ display: "flex", alignItems: "center", gap: "8px" },
                    ...{},
                  }}
                >
                  {/* name="Frame" id="28:10655" type="FRAME" */}
                  <QodeSvg2810655
                    style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        color: "var(--text-text-neutral-40, #464646)",
                        textAlign: "center",
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
                  >{`Ho Chi Minh city, Viet Nam`}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
