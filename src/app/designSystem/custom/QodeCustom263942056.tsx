// id="2639:42056"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom63011043 } from "@designSystem/custom/QodeCustom63011043"
import { QodeCustom63012059 } from "@designSystem/custom/QodeCustom63012059"

export interface QodeCustom263942056Props {
  iconTag_2?: boolean
  tag_2Label?: string
  tag_2?: boolean
  iconTag_1?: React.ReactNode
  tag_1Label?: string
  description?: boolean
  title?: string
  tag_1?: boolean
  type?: "Brand" | "Flow" | "Component" | "Draft"
}

export const QodeCustom263942056: React.FC<
  QodeCustom263942056Props & { style?: CSSProperties }
> = ({
  iconTag_2 = true,
  tag_2Label = "Variants & Properties",
  tag_2 = true,
  iconTag_1 = undefined,
  tag_1Label = "Local Variables",
  description = true,
  title = "Private Talent Pool",
  tag_1 = true,
  type = "Brand",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name="Thumbnail" id="2639:42056" type="COMPONENT_SET" */}
      {/* id="2639:42055" */}
      {`${type}` === `Brand` && (
        <>
          {/* name="Type=Brand" id="2639:42055" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1616px",
                height: "960px",
                padding: "48px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
                background: "var(--neutral-gray-90, #464646)",
              },
              ...style,
            }}
          >
            {/* name="Ellipse 3" id="2636:42037" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "1627px",
                  height: "1586px",
                  position: "absolute",
                  right: "-249px",
                  top: "-313px",
                  borderRadius: "1627px",
                  background: "var(--primary-primary-50, #1597f4)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Ellipse 6" id="2636:42038" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "473px",
                  height: "462px",
                  position: "absolute",
                  right: "544px",
                  bottom: "193px",
                  borderRadius: "473px",
                  background:
                    "var(--color-success-colorsuccessactive, #11a620)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Ellipse 4" id="2636:42039" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "759px",
                  height: "740px",
                  position: "absolute",
                  left: "125px",
                  top: "44px",
                  borderRadius: "759px",
                  background: "var(--color-error-colorerror, #dc3812)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Ellipse 1" id="2636:42040" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "1054px",
                  height: "1048px",
                  position: "absolute",
                  left: "-277px",
                  bottom: "-559px",
                  borderRadius: "1054px",
                  background: "var(--color-warning-colorwarning, #f5a60c)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Ellipse 5" id="2636:42041" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "1264px",
                  height: "1232px",
                  position: "absolute",
                  left: "-860px",
                  bottom: "-575px",
                  borderRadius: "1264px",
                  background: "var(--primary-primary-50, #1597f4)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="content" id="2636:42042" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "64px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "88px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRadius: "24px",
                  border:
                    "var(--style-line-width-linewidthbold, 2px) solid var(--opacity-white-white-opacity-25, rgba(255, 255, 255, 0.25))",
                  background:
                    "var(--opacity-white-white-opacity-25, rgba(255, 255, 255, 0.25))",
                  boxShadow: "0px 0px 54.1px 0px rgba(0, 0, 0, 0.15)",
                  backdropFilter: "blur(37.849998474121094px)",
                },
                ...{},
              }}
            >
              {/* name="titles" id="2636:42043" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "64px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortextsolid, #fff)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "64px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "124px /* 193.75% */",
                    },
                    ...{},
                  }}
                >{`Design System`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortextsolid, #fff)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "148px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "124px /* 83.784% */",
                    },
                    ...{},
                  }}
                >{`Private Talent Pool`}</span>
              </div>
              {/* name="Features" id="2636:42046" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start", gap: "24px" },
                  ...{},
                }}
              >
                {/* name="Local Variables" id="2636:42047" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      background:
                        "var(--opacity-black-black-opacity-25, rgba(0, 0, 0, 0.25))",
                    },
                    ...{},
                  }}
                >
                  {/* name="gear" id="2639:42078" type="INSTANCE" */}
                  <QodeCustom63011043
                    style={{
                      ...{
                        width: "var(--line-height-lineheighheading3, 32px)",
                        height: "var(--line-height-lineheighheading3, 32px)",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        color: "var(--color-neutral-text-colortextsolid, #fff)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading1, 40px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h1, 48px) /* 120% */",
                      },
                      ...{},
                    }}
                  >{`Local Variables`}</span>
                </div>
                {/* name="Variant and Properties" id="2636:42051" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      background:
                        "var(--opacity-black-black-opacity-25, rgba(0, 0, 0, 0.25))",
                    },
                    ...{},
                  }}
                >
                  {/* name="list-tree" id="2639:42081" type="INSTANCE" */}
                  <QodeCustom63012059
                    style={{
                      ...{
                        width: "var(--line-height-lineheighheading3, 32px)",
                        height: "var(--line-height-lineheighheading3, 32px)",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        color: "var(--color-neutral-text-colortextsolid, #fff)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading1, 40px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h1, 48px) /* 120% */",
                      },
                      ...{},
                    }}
                  >{`Variants & Properties`}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="2639:42057" */}
      {`${type}` === `Flow` && (
        <>
          {/* name="Type=Flow" id="2639:42057" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1616px",
                height: "960px",
                padding: "48px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
                background: "var(--neutral-gray-10, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="Ellipse 6" id="2639:42059" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "843px",
                  height: "824px",
                  position: "absolute",
                  right: "359px",
                  bottom: "12px",
                  borderRadius: "843px",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Ellipse 4" id="2639:42060" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "449px",
                  height: "438px",
                  position: "absolute",
                  left: "280px",
                  top: "195px",
                  borderRadius: "449px",
                  background: "var(--color-warning-colorwarning, #f5a60c)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Ellipse 1" id="2639:42061" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "558px",
                  height: "555px",
                  position: "absolute",
                  left: "219px",
                  bottom: "-66px",
                  borderRadius: "558px",
                  background: "var(--color-error-colorerror, #dc3812)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="content" id="2639:42063" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "64px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "88px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRadius: "24px",
                  border:
                    "var(--style-line-width-linewidthbold, 2px) solid var(--opacity-white-white-opacity-25, rgba(255, 255, 255, 0.25))",
                  background:
                    "var(--opacity-white-white-opacity-25, rgba(255, 255, 255, 0.25))",
                  boxShadow: "0px 0px 54.1px 0px rgba(0, 0, 0, 0.15)",
                  backdropFilter: "blur(37.849998474121094px)",
                },
                ...{},
              }}
            >
              {/* name="titles" id="2639:42064" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "64px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "64px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "124px /* 193.75% */",
                    },
                    ...{},
                  }}
                >{`Design System`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "148px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "124px /* 83.784% */",
                    },
                    ...{},
                  }}
                >{`Private Talent Pool`}</span>
              </div>
              {/* name="Features" id="2639:42067" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start", gap: "24px" },
                  ...{},
                }}
              >
                {/* name="Local Variables" id="2639:42068" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      background:
                        "var(--color-neutral-fill-colorfill, rgba(0, 0, 0, 0.15))",
                    },
                    ...{},
                  }}
                >
                  {/* name="gear" id="2639:42084" type="INSTANCE" */}
                  <QodeCustom63011043
                    style={{
                      ...{
                        width: "var(--line-height-lineheighheading3, 32px)",
                        height: "var(--line-height-lineheighheading3, 32px)",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        color: "var(--color-neutral-text-colortext, #000)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading1, 40px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h1, 48px) /* 120% */",
                      },
                      ...{},
                    }}
                  >{`Local Variables`}</span>
                </div>
                {/* name="Variant and Properties" id="2639:42072" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      background:
                        "var(--color-neutral-fill-colorfill, rgba(0, 0, 0, 0.15))",
                    },
                    ...{},
                  }}
                >
                  {/* name="list-tree" id="2639:42086" type="INSTANCE" */}
                  <QodeCustom63012059
                    style={{
                      ...{
                        width: "var(--line-height-lineheighheading3, 32px)",
                        height: "var(--line-height-lineheighheading3, 32px)",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        color: "var(--color-neutral-text-colortext, #000)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading1, 40px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h1, 48px) /* 120% */",
                      },
                      ...{},
                    }}
                  >{`Variants & Properties`}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="2639:42088" */}
      {`${type}` === `Component` && (
        <>
          {/* name="Type=Component" id="2639:42088" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1616px",
                height: "960px",
                padding: "48px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
                background: "var(--neutral-gray-10, #e3e3e3)",
              },
              ...style,
            }}
          >
            {/* name="Ellipse 6" id="2639:42089" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "488.121px",
                  height: "477.119px",
                  transform: "rotate(120deg)",
                  position: "absolute",
                  right: "-9.181px",
                  bottom: "128.453px",
                  borderRadius: "488.121px",
                  background: "var(--color-success-colorsuccess, #11a620)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Ellipse 4" id="2639:42090" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "449px",
                  height: "438px",
                  transform: "rotate(120deg)",
                  position: "absolute",
                  right: "-253.617px",
                  top: "-28.672px",
                  borderRadius: "449px",
                  background: "var(--color-warning-colorwarning, #f5a60c)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Ellipse 1" id="2639:42091" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "729.223px",
                  height: "564.051px",
                  transform: "rotate(120deg)",
                  position: "absolute",
                  right: "-45.094px",
                  top: "-282.526px",
                  borderRadius: "729.223px",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="content" id="2639:42092" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "64px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "88px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRadius: "24px",
                  border:
                    "var(--style-line-width-linewidthbold, 2px) solid var(--opacity-white-white-opacity-25, rgba(255, 255, 255, 0.25))",
                  background:
                    "var(--opacity-white-white-opacity-25, rgba(255, 255, 255, 0.25))",
                  boxShadow: "0px 0px 54.1px 0px rgba(0, 0, 0, 0.15)",
                  backdropFilter: "blur(37.849998474121094px)",
                },
                ...{},
              }}
            >
              {/* name="titles" id="2639:42093" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "64px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "64px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "124px /* 193.75% */",
                    },
                    ...{},
                  }}
                >{`Design System`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "148px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "124px /* 83.784% */",
                    },
                    ...{},
                  }}
                >{`Private Talent Pool`}</span>
              </div>
              {/* name="Features" id="2639:42096" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start", gap: "24px" },
                  ...{},
                }}
              >
                {/* name="Local Variables" id="2639:42097" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      background:
                        "var(--color-neutral-fill-colorfill, rgba(0, 0, 0, 0.15))",
                    },
                    ...{},
                  }}
                >
                  {/* name="gear" id="2639:42098" type="INSTANCE" */}
                  <QodeCustom63011043
                    style={{
                      ...{
                        width: "var(--line-height-lineheighheading3, 32px)",
                        height: "var(--line-height-lineheighheading3, 32px)",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        color: "var(--color-neutral-text-colortext, #000)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading1, 40px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h1, 48px) /* 120% */",
                      },
                      ...{},
                    }}
                  >{`Local Variables`}</span>
                </div>
                {/* name="Variant and Properties" id="2639:42100" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      background:
                        "var(--color-neutral-fill-colorfill, rgba(0, 0, 0, 0.15))",
                    },
                    ...{},
                  }}
                >
                  {/* name="list-tree" id="2639:42101" type="INSTANCE" */}
                  <QodeCustom63012059
                    style={{
                      ...{
                        width: "var(--line-height-lineheighheading3, 32px)",
                        height: "var(--line-height-lineheighheading3, 32px)",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        color: "var(--color-neutral-text-colortext, #000)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading1, 40px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h1, 48px) /* 120% */",
                      },
                      ...{},
                    }}
                  >{`Variants & Properties`}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="2676:1074" */}
      {`${type}` === `Draft` && (
        <>
          {/* name="Type=Draft" id="2676:1074" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1616px",
                height: "960px",
                padding: "48px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "12px",
                flexShrink: "0",
                background: "var(--neutral-gray-30, #bfbfbf)",
              },
              ...style,
            }}
          >
            {/* name="Ellipse 6" id="2676:1075" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "488.121px",
                  height: "477.119px",
                  transform: "rotate(120deg)",
                  position: "absolute",
                  right: "-9.181px",
                  bottom: "128.453px",
                  borderRadius: "488.121px",
                  background: "var(--color-primary-colorprimary, #1597f4)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Ellipse 4" id="2676:1076" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "449px",
                  height: "438px",
                  transform: "rotate(120deg)",
                  position: "absolute",
                  right: "-253.617px",
                  top: "-28.672px",
                  borderRadius: "449px",
                  background: "var(--neutral-gray-30, #bfbfbf)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="Ellipse 1" id="2676:1077" type="ELLIPSE" */}
            <Flex
              style={{
                ...{
                  width: "729.223px",
                  height: "564.051px",
                  transform: "rotate(120deg)",
                  position: "absolute",
                  right: "-45.094px",
                  top: "-282.526px",
                  borderRadius: "729.223px",
                  background: "var(--neutral-gray-60, #6f6f6f)",
                  filter: "blur(133.14999389648438px)",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
            {/* name="content" id="2676:1078" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "64px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "88px",
                  flex: "1 0 0",
                  alignSelf: "stretch",
                  borderRadius: "24px",
                  border:
                    "var(--style-line-width-linewidthbold, 2px) solid var(--opacity-white-white-opacity-25, rgba(255, 255, 255, 0.25))",
                  background:
                    "var(--opacity-white-white-opacity-25, rgba(255, 255, 255, 0.25))",
                  boxShadow: "0px 0px 54.1px 0px rgba(0, 0, 0, 0.15)",
                  backdropFilter: "blur(37.849998474121094px)",
                },
                ...{},
              }}
            >
              {/* name="titles" id="2676:1079" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "64px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "64px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "124px /* 193.75% */",
                    },
                    ...{},
                  }}
                >{`Design System`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "148px",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight: "124px /* 83.784% */",
                    },
                    ...{},
                  }}
                >{`Private Talent Pool`}</span>
              </div>
              {/* name="Features" id="2676:1082" type="FRAME" */}
              <div
                style={{
                  ...{ display: "flex", alignItems: "flex-start", gap: "24px" },
                  ...{},
                }}
              >
                {/* name="Local Variables" id="2676:1083" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      background:
                        "var(--color-neutral-fill-colorfill, rgba(0, 0, 0, 0.15))",
                    },
                    ...{},
                  }}
                >
                  {/* name="gear" id="2676:1084" type="INSTANCE" */}
                  <QodeCustom63011043
                    style={{
                      ...{
                        width: "var(--line-height-lineheighheading3, 32px)",
                        height: "var(--line-height-lineheighheading3, 32px)",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        color: "var(--color-neutral-text-colortext, #000)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading1, 40px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h1, 48px) /* 120% */",
                      },
                      ...{},
                    }}
                  >{`Local Variables`}</span>
                </div>
                {/* name="Variant and Properties" id="2676:1086" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      padding: "16px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "12px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      background:
                        "var(--color-neutral-fill-colorfill, rgba(0, 0, 0, 0.15))",
                    },
                    ...{},
                  }}
                >
                  {/* name="list-tree" id="2676:1087" type="INSTANCE" */}
                  <QodeCustom63012059
                    style={{
                      ...{
                        width: "var(--line-height-lineheighheading3, 32px)",
                        height: "var(--line-height-lineheighheading3, 32px)",
                      },
                      ...{},
                    }}
                    {...{}}
                  />
                  <span
                    style={{
                      ...{
                        color: "var(--color-neutral-text-colortext, #000)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-heading1, 40px)",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight:
                          "var(--lineheight-lineheight-h1, 48px) /* 120% */",
                      },
                      ...{},
                    }}
                  >{`Variants & Properties`}</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
