// id="202:32980"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

export interface QodeCustom20232980Props {
  yearEndDate?: string
  yearStartDate?: string
  yearDate?: string
  monthEndDate?: string
  dayDate?: string
  monthDate?: string
  dayEndDate?: string
  dayStartDate?: string
  monthStartDate?: string
  type?: "date and time" | "day" | "month" | "year"
  range?: "false" | "true"
}

export const QodeCustom20232980: React.FC<
  QodeCustom20232980Props & { style?: CSSProperties }
> = ({
  yearEndDate = "2030-2039",
  yearStartDate = "2020-2029",
  yearDate = "2020-2029",
  monthEndDate = "2021",
  dayDate = "Dec 2020",
  monthDate = "2020",
  dayEndDate = "Jan 2021",
  dayStartDate = "Dec 2020",
  monthStartDate = "2020",
  type = "day",
  range = "false",
  ...rest
}) => {
  return (
    <>
      {/* name=".datePicker__menu" id="202:32980" type="COMPONENT_SET" */}
      {/* id="202:32979" */}
      {`${type}` === `day` && `${range}` === `false` && (
        <>
          {/* name="type=day, range=false" id="202:32979" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "280px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background:
                "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            {/* name="Header" id="202:32983" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
              }}
            >
              {/* name="Navigation Left" id="202:32988" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                }}
              >
                {/* name="chevrons-left" id="202:32986" type="INSTANCE" */}
                <Icon.QodeChevronsLeft
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                {/* name="chevron-left" id="202:32984" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  height: "22px",
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Dec 2020`}</span>
              {/* name="Navigation Right" id="202:32989" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                }}
              >
                {/* name="chevron-right" id="202:32991" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                {/* name="chevrons-right" id="202:32990" type="INSTANCE" */}
                <Icon.QodeChevronsRight
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </div>
            </div>
            {/* name="Content" id="202:32996" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
              }}
            >
              {/* name="Row" id="202:33012" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:33023" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33008" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Su`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33024" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33025" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Mo`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33027" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33028" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Tu`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33030" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33031" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`We`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33033" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33034" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Th`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33036" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33037" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Fr`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33039" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33040" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Sa`}</span>
                  </Flex>
                </div>
              </div>
              {/* name="Row" id="202:33045" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:33046" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33047" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`29`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33048" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33049" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`30`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33050" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33051" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`1`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33052" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33053" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33054" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33055" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`3`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33056" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33057" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`4`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33058" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33059" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`5`}</span>
                  </Flex>
                </div>
              </div>
              {/* name="Row" id="202:33067" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:33068" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33069" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`6`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33070" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33071" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`7`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33072" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33073" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`8`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33074" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33075" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`9`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33076" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33077" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`10`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33078" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33079" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`11`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33080" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33081" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`12`}</span>
                  </Flex>
                </div>
              </div>
              {/* name="Row" id="202:33089" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:33090" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33091" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`13`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33092" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33093" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`14`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33094" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33095" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`15`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33096" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33097" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`16`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33098" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33099" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`17`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33100" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33101" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`18`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33102" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33103" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`19`}</span>
                  </Flex>
                </div>
              </div>
              {/* name="Row" id="202:33111" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:33112" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33113" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`20`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33114" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33115" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`21`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33116" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33117" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`22`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33118" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33119" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`23`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33120" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33121" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`24`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33122" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33123" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`25`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33124" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33125" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`26`}</span>
                  </Flex>
                </div>
              </div>
              {/* name="Row" id="202:33133" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:33134" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33135" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`27`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33136" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33137" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`28`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33138" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33139" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`29`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33140" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33141" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`30`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33142" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33143" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`31`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33144" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33145" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`1`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33146" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33147" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2`}</span>
                  </Flex>
                </div>
              </div>
              {/* name="Row" id="202:33155" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:33156" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33157" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`3`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33158" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33159" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`4`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33160" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33161" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`5`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33162" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33163" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`6`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33164" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33165" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`7`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33166" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33167" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`8`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33168" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33169" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`9`}</span>
                  </Flex>
                </div>
              </div>
            </div>
            {/* name="Footer" id="202:33177" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "var(--size-padding-paddingxs, 8px) 0px",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              {/* name="Button" id="202:33189" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-primary-30, #158de2)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Button`}</span>
              </Flex>
            </div>
          </div>
        </>
      )}
      {/* id="202:33207" */}
      {`${type}` === `day` && `${range}` === `true` && (
        <>
          {/* name="type=day, range=true" id="202:33207" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "560px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background:
                "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            {/* name="Body" id="202:33381" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name="Header" id="202:33382" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* name="Navigation Left" id="202:33383" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  {/* name="chevrons-left" id="202:33384" type="INSTANCE" */}
                  <Icon.QodeChevronsLeft
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                  {/* name="chevron-left" id="202:33385" type="INSTANCE" */}
                  <Icon.QodeChevronLeft
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    height: "22px",
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Dec 2020`}</span>
                {/* name="Navigation Right" id="202:33387" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  {/* name="Right" id="202:33388" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.232px 3.25px 1.231px 4.25px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I202:33388;35:11263" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "8.5px",
                        height: "13.536px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
                      }}
                    >
                      {/* name="Vector" id=I202:33388;35:11263 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  {/* name="DoubleRight" id="202:33389" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.714px 2.071px 1.715px 2.071px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I202:33389;35:11301" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.858px",
                        height: "12.571px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
                      }}
                    >
                      {/* name="Vector" id=I202:33389;35:11301 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Content" id="202:33390" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* name="Row" id="202:33391" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33392" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33393" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Su`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33394" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33395" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Mo`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33396" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33397" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Tu`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33398" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33399" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`We`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33400" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33401" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Th`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33402" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33403" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Fr`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33404" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33405" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Sa`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:33406" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33407" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33408" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`29`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33409" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33410" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`30`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33411" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33412" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`1`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33413" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33414" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33415" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33416" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`3`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33417" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33418" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`4`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33419" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33420" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`5`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:33421" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33422" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33423" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                        background:
                          "var(--color-primary-colorprimary, #1597f4)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextsolid, #fff)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`6`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33424" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33425" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`7`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33426" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33427" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`8`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33428" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33429" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`9`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33430" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33431" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`10`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33432" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33433" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`11`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33434" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33435" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`12`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:33436" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33437" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33438" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`13`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33439" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33440" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`14`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33441" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33442" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`15`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33443" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33444" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`16`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33445" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33446" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`17`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33447" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33448" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`18`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33449" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33450" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`19`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:33451" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33452" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33453" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`20`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33454" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33455" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`21`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33456" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33457" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`22`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33458" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33459" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`23`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33460" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33461" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`24`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33462" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33463" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`25`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33464" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33465" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`26`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:33466" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33467" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33468" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`27`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33469" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33470" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`28`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33471" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33472" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`29`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33473" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33474" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`30`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33475" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33476" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`31`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33477" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33478" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`1`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33479" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33480" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:33481" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33482" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33483" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`3`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33484" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33485" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`4`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33486" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33487" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`5`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33488" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33489" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`6`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33490" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33491" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`7`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33492" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33493" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`8`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33494" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33495" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`9`}</span>
                    </Flex>
                  </div>
                </div>
              </div>
            </div>
            {/* name="Body" id="202:33380" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name="Header" id="202:33208" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* name="Navigation Left" id="202:33209" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  {/* name="DoubleLeft" id="202:33210" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.714px 2.071px 1.715px 2.071px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I202:33210;35:11305" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.858px",
                        height: "12.571px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
                      }}
                    >
                      {/* name="Vector" id=I202:33210;35:11305 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  {/* name="Left" id="202:33211" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.231px 4.214px 1.234px 3.286px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I202:33211;35:11259" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "8.5px",
                        height: "13.535px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
                      }}
                    >
                      {/* name="Vector" id=I202:33211;35:11259 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </div>
                <span
                  style={{
                    height: "22px",
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`Jan 2021`}</span>
                {/* name="Navigation Right" id="202:33213" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  {/* name="chevron-right" id="202:33214" type="INSTANCE" */}
                  <Icon.QodeChevronRight
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                  {/* name="chevrons-right" id="202:33215" type="INSTANCE" */}
                  <Icon.QodeChevronsRight
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </div>
              </div>
              {/* name="Content" id="202:33216" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* name="Row" id="202:33217" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33218" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33219" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Su`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33220" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33221" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Mo`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33222" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33223" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Tu`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33224" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33225" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`We`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33226" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33227" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Th`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33228" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33229" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Fr`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33230" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33231" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Sa`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:33232" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33233" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33234" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`27`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33235" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33236" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`28`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33237" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33238" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`29`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33239" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33240" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`30`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33241" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33242" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`31`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33243" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33244" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`1`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33245" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33246" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:33247" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33248" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33249" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`3`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33250" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33251" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`4`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33252" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33253" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`5`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33254" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33255" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`6`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33256" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33257" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`7`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33258" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33259" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`8`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33260" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33261" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`9`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:33262" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33263" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33264" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`10`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33265" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33266" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`11`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33267" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33268" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`12`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33269" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33270" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`13`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33271" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33272" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`14`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33273" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33274" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`15`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33275" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33276" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`16`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:33277" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33278" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33279" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`17`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33280" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33281" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`18`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33282" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33283" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`19`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33284" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33285" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`20`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33286" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33287" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`21`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33288" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33289" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`22`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33290" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33291" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`23`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:33292" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33293" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33294" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`24`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33295" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33296" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`25`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33297" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33298" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`26`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33299" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33300" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`27`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33301" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33302" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`28`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33303" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33304" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`29`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33305" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33306" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`30`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:33307" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:33308" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33309" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`31`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33310" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33311" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`1`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33312" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33313" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33314" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33315" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`3`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33316" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33317" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`4`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33318" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33319" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`5`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:33320" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:33321" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        width: "24px",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`6`}</span>
                    </Flex>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="202:33728" */}
      {`${type}` === `month` && `${range}` === `false` && (
        <>
          {/* name="type=month, range=false" id="202:33728" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "280px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background:
                "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            {/* name="Header" id="202:33729" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
              }}
            >
              {/* name="Navigation Left" id="202:33730" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                }}
              >
                {/* name="chevrons-left" id="202:33731" type="INSTANCE" */}
                <Icon.QodeChevronsLeft
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                {/* name="chevron-left" id="202:33732" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  height: "22px",
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`2020`}</span>
              {/* name="Navigation Right" id="202:33734" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                }}
              >
                {/* name="chevron-right" id="202:33735" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                {/* name="chevrons-right" id="202:33736" type="INSTANCE" */}
                <Icon.QodeChevronsRight
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </div>
            </div>
            {/* name="Content" id="202:33737" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
              }}
            >
              {/* name="Row" id="202:33738" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:33739" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33740" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Jan`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33741" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33742" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Feb`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33743" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33744" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Mar`}</span>
                  </Flex>
                </div>
              </div>
              {/* name="Row" id="202:33753" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:33754" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33755" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Apr`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33756" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33757" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`May`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33758" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33759" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      background: "var(--color-primary-colorprimary, #1597f4)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortextsolid, #fff)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Jun`}</span>
                  </Flex>
                </div>
              </div>
              {/* name="Row" id="202:33768" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:33769" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33770" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Jul`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33771" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33772" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Aug`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33773" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33774" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Sep`}</span>
                  </Flex>
                </div>
              </div>
              {/* name="Row" id="202:33783" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:33784" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33785" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Oct`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33786" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33787" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Nov`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:33788" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:33789" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Dev`}</span>
                  </Flex>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="202:34749" */}
      {`${type}` === `month` && `${range}` === `true` && (
        <>
          {/* name="type=month, range=true" id="202:34749" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "560px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background:
                "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            {/* name="Body" id="202:34804" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name="Header" id="202:34805" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* name="Navigation Left" id="202:34806" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  {/* name="chevrons-left" id="202:34807" type="INSTANCE" */}
                  <Icon.QodeChevronsLeft
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                  {/* name="chevron-left" id="202:34808" type="INSTANCE" */}
                  <Icon.QodeChevronLeft
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    height: "22px",
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`2020`}</span>
                {/* name="Navigation Right" id="202:34810" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  {/* name="Right" id="202:34811" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.232px 3.25px 1.231px 4.25px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I202:34811;35:11263" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "8.5px",
                        height: "13.536px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
                      }}
                    >
                      {/* name="Vector" id=I202:34811;35:11263 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  {/* name="DoubleRight" id="202:34812" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.714px 2.071px 1.715px 2.071px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I202:34812;35:11301" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.858px",
                        height: "12.571px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
                      }}
                    >
                      {/* name="Vector" id=I202:34812;35:11301 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Content" id="202:34813" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* name="Row" id="202:34814" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:34815" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34816" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Jan`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34817" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34818" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Feb`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34819" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34820" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Mar`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:34821" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:34822" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34823" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Apr`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34824" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34825" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`May`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34826" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34827" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                        background:
                          "var(--color-primary-colorprimary, #1597f4)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextsolid, #fff)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Jun`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:34828" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:34829" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34830" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Jul`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34831" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34832" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Aug`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34833" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34834" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Sep`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:34835" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:34836" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34837" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Oct`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34838" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34839" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Nov`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34840" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34841" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Dev`}</span>
                    </Flex>
                  </div>
                </div>
              </div>
            </div>
            {/* name="Body" id="202:34803" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name="Header" id="202:34750" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* name="Navigation Left" id="202:34751" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  {/* name="DoubleLeft" id="202:34752" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.714px 2.071px 1.715px 2.071px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I202:34752;35:11305" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.858px",
                        height: "12.571px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
                      }}
                    >
                      {/* name="Vector" id=I202:34752;35:11305 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  {/* name="Left" id="202:34753" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.231px 4.214px 1.234px 3.286px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I202:34753;35:11259" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "8.5px",
                        height: "13.535px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
                      }}
                    >
                      {/* name="Vector" id=I202:34753;35:11259 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </div>
                <span
                  style={{
                    height: "22px",
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`2021`}</span>
                {/* name="Navigation Right" id="202:34755" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  {/* name="chevron-right" id="202:34756" type="INSTANCE" */}
                  <Icon.QodeChevronRight
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                  {/* name="chevrons-right" id="202:34757" type="INSTANCE" */}
                  <Icon.QodeChevronsRight
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </div>
              </div>
              {/* name="Content" id="202:34758" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* name="Row" id="202:34759" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:34760" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34761" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Jan`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34762" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34763" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Feb`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34764" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34765" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Mar`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:34766" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:34767" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34768" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Apr`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34769" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34770" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`May`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34771" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34772" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Jun`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:34773" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:34774" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34775" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Jul`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34776" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34777" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Aug`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34778" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34779" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Sep`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:34780" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:34781" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34782" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Oct`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34783" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34784" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Nov`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:34785" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:34786" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`Dev`}</span>
                    </Flex>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="202:34978" */}
      {`${type}` === `year` && `${range}` === `false` && (
        <>
          {/* name="type=year, range=false" id="202:34978" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "280px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background:
                "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            {/* name="Header" id="202:34979" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--size-height-controlheightlg, 40px)",
                padding: "0px var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
              }}
            >
              {/* name="Navigation Left" id="202:34980" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                }}
              >
                {/* name="chevrons-left" id="202:34981" type="INSTANCE" */}
                <Icon.QodeChevronsLeft
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                {/* name="chevron-left" id="202:34982" type="INSTANCE" */}
                <Icon.QodeChevronLeft
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  height: "22px",
                  flex: "1 0 0",
                  color: "var(--color-neutral-text-colortext, #000)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`2020-2029`}</span>
              {/* name="Navigation Right" id="202:34984" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                }}
              >
                {/* name="chevron-right" id="202:34985" type="INSTANCE" */}
                <Icon.QodeChevronRight
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
                {/* name="chevrons-right" id="202:34986" type="INSTANCE" */}
                <Icon.QodeChevronsRight
                  style={{ width: "16px", height: "16px" }}
                  {...{}}
                />
              </div>
            </div>
            {/* name="Content" id="202:34987" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
              }}
            >
              {/* name="Row" id="202:34988" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:34989" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:34990" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2019`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:34991" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:34992" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2020`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:34993" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:34994" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2021`}</span>
                  </Flex>
                </div>
              </div>
              {/* name="Row" id="202:34995" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:34996" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:34997" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2022`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:34998" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:34999" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2023`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:35000" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:35001" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      background: "var(--color-primary-colorprimary, #1597f4)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortextsolid, #fff)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2024`}</span>
                  </Flex>
                </div>
              </div>
              {/* name="Row" id="202:35002" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:35003" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:35004" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2025`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:35005" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:35006" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2026`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:35007" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:35008" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2027`}</span>
                  </Flex>
                </div>
              </div>
              {/* name="Row" id="202:35009" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Cell Wrapper" id="202:35010" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:35011" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2028`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:35012" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:35013" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color: "var(--color-neutral-text-colortext, #000)",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2029`}</span>
                  </Flex>
                </div>
                {/* name="Cell Wrapper" id="202:35014" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                  }}
                >
                  {/* name=".datePicker__menuItem" id="202:35015" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      borderRadius: "var(--style-radius-borderradiussm, 6px)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                        color:
                          "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                        textAlign: "center",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`2030`}</span>
                  </Flex>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="202:35016" */}
      {`${type}` === `year` && `${range}` === `true` && (
        <>
          {/* name="type=year, range=true" id="202:35016" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "560px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background:
                "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            {/* name="Body" id="202:35017" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name="Header" id="202:35018" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* name="Navigation Left" id="202:35019" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  {/* name="chevrons-left" id="202:35020" type="INSTANCE" */}
                  <Icon.QodeChevronsLeft
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                  {/* name="chevron-left" id="202:35021" type="INSTANCE" */}
                  <Icon.QodeChevronLeft
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    height: "22px",
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`2020-2029`}</span>
                {/* name="Navigation Right" id="202:35023" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  {/* name="Right" id="202:35024" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.232px 3.25px 1.231px 4.25px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I202:35024;35:11263" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "8.5px",
                        height: "13.536px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
                      }}
                    >
                      {/* name="Vector" id=I202:35024;35:11263 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  {/* name="DoubleRight" id="202:35025" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.714px 2.071px 1.715px 2.071px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I202:35025;35:11301" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.858px",
                        height: "12.571px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
                      }}
                    >
                      {/* name="Vector" id=I202:35025;35:11301 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </div>
              </div>
              {/* name="Content" id="202:35026" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* name="Row" id="202:35145" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:35146" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35147" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2019`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35148" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35149" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2020`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35150" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35151" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2021`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:35152" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:35153" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35154" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2022`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35155" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35156" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2023`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35157" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35158" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                        background:
                          "var(--color-primary-colorprimary, #1597f4)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextsolid, #fff)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2024`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:35159" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:35160" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35161" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2025`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35162" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35163" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2026`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35164" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35165" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2027`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:35166" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:35167" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35168" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2028`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35169" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35170" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2029`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35171" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35172" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2030`}</span>
                    </Flex>
                  </div>
                </div>
              </div>
            </div>
            {/* name="Body" id="202:35055" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                flex: "1 0 0",
              }}
            >
              {/* name="Header" id="202:35056" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightlg, 40px)",
                  padding: "0px var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* name="Navigation Left" id="202:35057" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  {/* name="DoubleLeft" id="202:35058" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.714px 2.071px 1.715px 2.071px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I202:35058;35:11305" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "11.858px",
                        height: "12.571px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
                      }}
                    >
                      {/* name="Vector" id=I202:35058;35:11305 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                  {/* name="Left" id="202:35059" type="INSTANCE" */}
                  <Flex
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      padding: "1.231px 4.214px 1.234px 3.286px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* name="Vector" id="I202:35059;35:11259" type="VECTOR" */}
                    <Flex
                      style={{
                        width: "8.5px",
                        height: "13.535px",
                        flexShrink: "0",
                        fill: "var(--color-neutral-text-coloricon, rgba(0, 0, 0, 0.45))",
                      }}
                    >
                      {/* name="Vector" id=I202:35059;35:11259 type=VECTOR */}
                      <></>
                    </Flex>
                  </Flex>
                </div>
                <span
                  style={{
                    height: "22px",
                    flex: "1 0 0",
                    color: "var(--color-neutral-text-colortext, #000)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-base, 14px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  }}
                >{`2030-2039`}</span>
                {/* name="Navigation Right" id="202:35061" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                  }}
                >
                  {/* name="chevron-right" id="202:35062" type="INSTANCE" */}
                  <Icon.QodeChevronRight
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                  {/* name="chevrons-right" id="202:35063" type="INSTANCE" */}
                  <Icon.QodeChevronsRight
                    style={{ width: "16px", height: "16px" }}
                    {...{}}
                  />
                </div>
              </div>
              {/* name="Content" id="202:35064" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                }}
              >
                {/* name="Row" id="202:35185" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:35186" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35187" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2029`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35188" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35189" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2030`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35190" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35191" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2031`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:35192" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:35193" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35194" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2032`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35195" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35196" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2033`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35197" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35198" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2034`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:35199" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:35200" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35201" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2035`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35202" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35203" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2036`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35204" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35205" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2037`}</span>
                    </Flex>
                  </div>
                </div>
                {/* name="Row" id="202:35206" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Cell Wrapper" id="202:35207" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35208" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2038`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35209" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35210" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color: "var(--color-neutral-text-colortext, #000)",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2039`}</span>
                    </Flex>
                  </div>
                  {/* name="Cell Wrapper" id="202:35211" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      padding:
                        "var(--size-padding-padding, 16px) var(--size-padding-paddingxs, 8px)",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                    }}
                  >
                    {/* name=".datePicker__menuItem" id="202:35212" type="INSTANCE" */}
                    <Flex
                      style={{
                        display: "flex",
                        height: "var(--size-height-controlheightsm, 24px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        borderRadius: "var(--style-radius-borderradiussm, 6px)",
                      }}
                    >
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          flex: "1 0 0",
                          alignSelf: "stretch",
                          color:
                            "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                          textAlign: "center",
                          fontFamily: 'var(--family-family, "sf pro display")',
                          fontSize: "var(--size-base, 14px)",
                          fontStyle: "normal",
                          fontWeight: "400",
                          lineHeight:
                            "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                        }}
                      >{`2040`}</span>
                    </Flex>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* id="202:33555" */}
      {`${type}` === `date and time` && `${range}` === `false` && (
        <>
          {/* name="type=date and time, range=false" id="202:33555" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "440px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background:
                "var(--color-neutral-background-colorbgelevated, #f8f6f6)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            {/* name="Body" id="202:35410" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                alignSelf: "stretch",
              }}
            >
              {/* name="Date Picker" id="202:35241" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: "1 0 0",
                }}
              >
                {/* name="Header" id="202:33556" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="Navigation Left" id="202:33557" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                    }}
                  >
                    {/* name="chevrons-left" id="202:33558" type="INSTANCE" */}
                    <Icon.QodeChevronsLeft
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    {/* name="chevron-left" id="202:33559" type="INSTANCE" */}
                    <Icon.QodeChevronLeft
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                  </div>
                  <span
                    style={{
                      height: "22px",
                      flex: "1 0 0",
                      color: "var(--color-neutral-text-colortext, #000)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    }}
                  >{`Dec 2020`}</span>
                  {/* name="Navigation Right" id="202:33561" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--size-padding-paddingxxs, 4px)",
                    }}
                  >
                    {/* name="chevron-right" id="202:33562" type="INSTANCE" */}
                    <Icon.QodeChevronRight
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                    {/* name="chevrons-right" id="202:33563" type="INSTANCE" */}
                    <Icon.QodeChevronsRight
                      style={{ width: "16px", height: "16px" }}
                      {...{}}
                    />
                  </div>
                </div>
                {/* name="Content" id="202:33564" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="Row" id="202:33565" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Cell Wrapper" id="202:33566" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33567" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Su`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33568" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33569" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Mo`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33570" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33571" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Tu`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33572" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33573" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`We`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33574" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33575" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Th`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33576" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33577" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Fr`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33578" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33579" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`Sa`}</span>
                      </Flex>
                    </div>
                  </div>
                  {/* name="Row" id="202:33580" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Cell Wrapper" id="202:33581" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33582" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color:
                              "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`29`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33583" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33584" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color:
                              "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`30`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33585" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33586" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                          border:
                            "var(--style-line-width-linewidth, 1px) solid var(--color-primary-colorprimary, #1597f4)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`1`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33587" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33588" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`2`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33589" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33590" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`3`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33591" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33592" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`4`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33593" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33594" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`5`}</span>
                      </Flex>
                    </div>
                  </div>
                  {/* name="Row" id="202:33595" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Cell Wrapper" id="202:33596" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33597" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`6`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33598" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33599" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`7`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33600" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33601" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`8`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33602" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33603" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`9`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33604" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33605" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`10`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33606" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33607" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`11`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33608" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33609" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`12`}</span>
                      </Flex>
                    </div>
                  </div>
                  {/* name="Row" id="202:33610" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Cell Wrapper" id="202:33611" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33612" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`13`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33613" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33614" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`14`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33615" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33616" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`15`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33617" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33618" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`16`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33619" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33620" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`17`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33621" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33622" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`18`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33623" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33624" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`19`}</span>
                      </Flex>
                    </div>
                  </div>
                  {/* name="Row" id="202:33625" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Cell Wrapper" id="202:33626" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33627" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`20`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33628" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33629" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`21`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33630" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33631" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`22`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33632" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33633" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`23`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33634" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33635" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`24`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33636" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33637" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`25`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33638" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33639" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`26`}</span>
                      </Flex>
                    </div>
                  </div>
                  {/* name="Row" id="202:33640" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Cell Wrapper" id="202:33641" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33642" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`27`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33643" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33644" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`28`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33645" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33646" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`29`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33647" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33648" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`30`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33649" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33650" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color: "var(--color-neutral-text-colortext, #000)",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`31`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33651" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33652" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color:
                              "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`1`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33653" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33654" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color:
                              "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`2`}</span>
                      </Flex>
                    </div>
                  </div>
                  {/* name="Row" id="202:33655" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignSelf: "stretch",
                    }}
                  >
                    {/* name="Cell Wrapper" id="202:33656" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33657" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color:
                              "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`3`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33658" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33659" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color:
                              "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`4`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33660" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33661" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color:
                              "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`5`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33662" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33663" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color:
                              "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`6`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33664" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33665" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color:
                              "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`7`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33666" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33667" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color:
                              "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`8`}</span>
                      </Flex>
                    </div>
                    {/* name="Cell Wrapper" id="202:33668" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding:
                          "var(--size-padding-paddingxxs, 4px) var(--size-size-size5xs-1px, 1px)",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                      }}
                    >
                      {/* name=".datePicker__menuItem" id="202:33669" type="INSTANCE" */}
                      <Flex
                        style={{
                          display: "flex",
                          width: "24px",
                          height: "var(--size-height-controlheightsm, 24px)",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius:
                            "var(--style-radius-borderradiussm, 6px)",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            flex: "1 0 0",
                            alignSelf: "stretch",
                            color:
                              "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                            textAlign: "center",
                            fontFamily:
                              'var(--family-family, "sf pro display")',
                            fontSize: "var(--size-base, 14px)",
                            fontStyle: "normal",
                            fontWeight: "400",
                            lineHeight:
                              "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                          }}
                        >{`9`}</span>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              {/* name="Time Picker" id="202:35242" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "170px",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Header" id="202:35243" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    height: "var(--size-height-controlheightlg, 40px)",
                    padding: "0px var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderBottom:
                      "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                  }}
                >
                  {/* name="Header" id=202:35243 type=FRAME */}
                  <></>
                </div>
                {/* name="Time Picker" id="2636:41792" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    width: "170px",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* name="Content" id="2636:41793" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      paddingTop: "var(--size-padding-paddingxxs, 4px)",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      alignSelf: "stretch",
                      borderBottom:
                        "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                    }}
                  >
                    {/* name="Column" id="2636:41794" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "0px var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Cell Wrapper" id="2636:41795" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41796" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`00`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41797" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41798" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`01`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41799" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41800" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                            background:
                              "var(--color-primary-colorprimarybg, #f8fcff)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-primary-colorprimarytext, #1597f4)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`24`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41801" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41802" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`03`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41803" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41804" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`04`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41805" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41806" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`05`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41807" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41808" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`06`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41809" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41810" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`07`}</span>
                        </Flex>
                      </div>
                    </div>
                    {/* name="Divider" id="2636:41811" type="RECTANGLE" */}
                    <Flex
                      style={{
                        width: "var(--size-size-size5xs-1px, 1px)",
                        alignSelf: "stretch",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                      }}
                    >
                      {/* name="Divider" id=2636:41811 type=RECTANGLE */}
                      <></>
                    </Flex>
                    {/* name="Column" id="2636:41812" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "0px var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Cell Wrapper" id="2636:41813" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41814" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`00`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41815" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41816" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`01`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41817" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41818" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`02`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41819" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41820" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`03`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41821" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41822" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                            background:
                              "var(--color-primary-colorprimarybg, #f8fcff)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-primary-colorprimarytext, #1597f4)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`24`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41823" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41824" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`05`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41825" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41826" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`06`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41827" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".datePicker__menuItem" id="2636:41828" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`07`}</span>
                        </Flex>
                      </div>
                    </div>
                    {/* name="Divider" id="2636:41829" type="RECTANGLE" */}
                    <Flex
                      style={{
                        width: "var(--size-size-size5xs-1px, 1px)",
                        alignSelf: "stretch",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorsplit, rgba(0, 0, 0, 0.06))",
                      }}
                    >
                      {/* name="Divider" id=2636:41829 type=RECTANGLE */}
                      <></>
                    </Flex>
                    {/* name="Column" id="2636:41830" type="FRAME" */}
                    <div
                      style={{
                        display: "flex",
                        padding: "0px var(--size-padding-paddingxxs, 4px)",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flex: "1 0 0",
                        alignSelf: "stretch",
                      }}
                    >
                      {/* name="Cell Wrapper" id="2636:41831" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41832" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`00`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41833" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41834" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`01`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41835" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41836" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`02`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41837" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41838" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`03`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41839" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41840" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`04`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41841" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41842" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`05`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41843" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41844" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                            background:
                              "var(--color-primary-colorprimarybg, #f8fcff)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-primary-colorprimarytext, #1597f4)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`24`}</span>
                        </Flex>
                      </div>
                      {/* name="Cell Wrapper" id="2636:41845" type="FRAME" */}
                      <div
                        style={{
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                          alignSelf: "stretch",
                        }}
                      >
                        {/* name=".timePicker__menuItem" id="2636:41846" type="INSTANCE" */}
                        <Flex
                          style={{
                            display: "flex",
                            height: "var(--size-height-controlheightsm, 24px)",
                            justifyContent: "center",
                            alignItems: "center",
                            flex: "1 0 0",
                            borderRadius:
                              "var(--style-radius-borderradiussm, 6px)",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              flex: "1 0 0",
                              alignSelf: "stretch",
                              color:
                                "var(--color-neutral-text-colortext, #000)",
                              textAlign: "center",
                              fontFamily:
                                'var(--family-family, "sf pro display")',
                              fontSize: "var(--size-base, 14px)",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight:
                                "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                            }}
                          >{`07`}</span>
                        </Flex>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* name="Footer" id="202:33670" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding:
                  "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingsm, 12px)",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              {/* name="Button" id="202:33671" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-primary-30, #158de2)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  }}
                >{`Now`}</span>
              </Flex>
              {/* name="Button" id="202:35415" type="INSTANCE" */}
              <Flex
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                }}
              >
                <span
                  style={{
                    color: "var(--text-text-white, #fff)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-small, 12px)",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight:
                      "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                  }}
                >{`Ok`}</span>
              </Flex>
            </div>
          </div>
        </>
      )}
    </>
  )
}