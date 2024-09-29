// id="206:17203"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg20617088 from "@designSystem/icon/svg/QodeSvg20617088"
import QodeSvg167546922 from "@designSystem/icon/svg/QodeSvg167546922"
import { QodeCustom66174 } from "@designSystem/custom/QodeCustom66174"
import { QodeCustom22116413 } from "@designSystem/custom/QodeCustom22116413"
import { QodeCustom228149026 } from "@designSystem/custom/QodeCustom228149026"
import { QodeTooltip } from "@designSystem/ant/QodeTooltip"
import QodeSvg20617207 from "@designSystem/icon/svg/QodeSvg20617207"
import QodeSvg167548664 from "@designSystem/icon/svg/QodeSvg167548664"
import QodeSvg25417029 from "@designSystem/icon/svg/QodeSvg25417029"
import QodeSvg167549254 from "@designSystem/icon/svg/QodeSvg167549254"
import { QodeCustom22423407 } from "@designSystem/custom/QodeCustom22423407"
import QodeSvg25417090 from "@designSystem/icon/svg/QodeSvg25417090"
import QodeSvg167549276 from "@designSystem/icon/svg/QodeSvg167549276"
import { QodeCustom22420154 } from "@designSystem/custom/QodeCustom22420154"

export interface QodeCustom20617203Props {
  showHighlighter?: boolean
  property_1?: "Default" | "Variant2" | "Variant3" | "Variant4"
}

export const QodeCustom20617203: React.FC<
  QodeCustom20617203Props & { style?: CSSProperties }
> = ({ showHighlighter = true, property_1 = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Setup interview/Mixer" id="206:17203" type="COMPONENT_SET" */}
      {/* id="206:17191" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="206:17191" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "300px",
                height: "612px",
                padding: "28px 20px",
                flexDirection: "column",
                alignItems: "center",
                gap: "28px",
                flexShrink: "0",
                borderRight:
                  "1px solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Info" id="206:17086" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "243px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                },
                ...{},
              }}
            >
              {/* name="Icon" id="206:17087" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "44px",
                    border:
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                {/* name="cube" id="206:17088" type="FRAME" */}
                <QodeSvg20617088
                  style={{ ...{ width: "24px", height: "24px" }, ...{} }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
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
              >{`Customize your interview`}</span>
            </div>
            {/* name="Select" id="1675:46920" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "224px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              {/* name="🧬 input" id="1675:46921" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background: "var(--neutral-white, #fff)",
                  },
                  ...{},
                }}
              >
                {/* name="🦆 icon "United States"" id="1675:46922" type="GROUP" */}
                <QodeSvg167546922
                  style={{
                    ...{
                      width: "18.667px",
                      height: "var(--font-size-base, 14px)",
                    },
                    ...{},
                  }}
                  {...{}}
                />
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
                >{`English`}</span>
                {/* name="Icon" id="1675:46939" type="INSTANCE" */}
                <QodeCustom66174
                  style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                  {...{}}
                />
              </div>
            </div>
            {/* name="Wrap" id="206:17091" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "48px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Mixer" id="221:16436" type="INSTANCE" */}
              <QodeCustom22116413
                style={{ ...{ width: "248px", height: "248px" }, ...{} }}
                {...{ property_1: "Default" }}
              />
              {/* name="Preset" id="206:17118" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
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
                      color: "var(--text-text-neutral-20, #878787)",
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
                >{`Or select a preset`}</span>
                {/* name="Presets" id="206:17120" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "4px",
                    },
                    ...{},
                  }}
                >
                  {/* name="Button" id="206:17121" type="INSTANCE" */}
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
                      buttonname: "Quick screening",
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Button" id="206:17122" type="INSTANCE" */}
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
                      buttonname: "Deep-dive Technical",
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
            {/* name="Tooltip" id="206:17187" type="INSTANCE" */}
            <QodeTooltip
              style={{
                ...{
                  display: "flex",
                  width: "244px",
                  padding:
                    "var(--size-size-sizexxs-6px, 6px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  position: "absolute",
                  left: "28px",
                  bottom: "206px",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background: "var(--neutral-gray-95, #383838)",
                  boxShadow:
                    "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
                },
                ...{},
              }}
              {...{
                showArrow: true,
                title: "Drag this handle to adjust the interview",
                placement: "bottom",
              }}
            />
            {/* name="Outline highlighter" id="391:31219" type="RECTANGLE" */}
            <Flex
              style={{
                ...{
                  width: "300px",
                  height: "612px",
                  position: "absolute",
                  border: "var(--border-radius-small, 4px) solid #356DFF",
                },
                ...{},
              }}
            >
              <></>
            </Flex>
          </div>
        </>
      )}
      {/* id="206:17204" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="206:17204" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "300px",
                height: "612px",
                padding: "28px 20px",
                flexDirection: "column",
                alignItems: "center",
                gap: "28px",
                flexShrink: "0",
                borderRight:
                  "1px solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Info" id="206:17205" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "243px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                },
                ...{},
              }}
            >
              {/* name="Icon" id="206:17206" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "44px",
                    border:
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                {/* name="cube" id="206:17207" type="FRAME" */}
                <QodeSvg20617207
                  style={{ ...{ width: "24px", height: "24px" }, ...{} }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
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
              >{`Customize your interview`}</span>
            </div>
            {/* name="Select" id="1675:48662" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "224px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              {/* name="🧬 input" id="1675:48663" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background: "var(--neutral-white, #fff)",
                  },
                  ...{},
                }}
              >
                {/* name="🦆 icon "United States"" id="1675:48664" type="GROUP" */}
                <QodeSvg167548664
                  style={{
                    ...{
                      width: "18.667px",
                      height: "var(--font-size-base, 14px)",
                    },
                    ...{},
                  }}
                  {...{}}
                />
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
                >{`English`}</span>
                {/* name="Icon" id="1675:48681" type="INSTANCE" */}
                <QodeCustom66174
                  style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                  {...{}}
                />
              </div>
            </div>
            {/* name="Wrap" id="206:17210" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "48px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Mixer" id="224:22361" type="INSTANCE" */}
              <QodeCustom22116413
                style={{ ...{ width: "248px", height: "248px" }, ...{} }}
                {...{ property_1: "Default" }}
              />
              {/* name="Preset" id="206:17237" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
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
                      color: "var(--text-text-neutral-20, #878787)",
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
                >{`Or select a preset`}</span>
                {/* name="Presets" id="206:17239" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "4px",
                    },
                    ...{},
                  }}
                >
                  {/* name="Button" id="206:17240" type="INSTANCE" */}
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
                      buttonname: "Quick screening",
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Button" id="206:17241" type="INSTANCE" */}
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
                      buttonname: "Deep-dive Technical",
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
        </>
      )}
      {/* id="254:17026" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="254:17026" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "300px",
                height: "612px",
                padding: "28px 20px",
                flexDirection: "column",
                alignItems: "center",
                gap: "28px",
                flexShrink: "0",
                borderRight:
                  "1px solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Info" id="254:17027" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "243px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                },
                ...{},
              }}
            >
              {/* name="Icon" id="254:17028" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "44px",
                    border:
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                {/* name="cube" id="254:17029" type="FRAME" */}
                <QodeSvg25417029
                  style={{ ...{ width: "24px", height: "24px" }, ...{} }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
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
              >{`Customize your interview`}</span>
            </div>
            {/* name="Select" id="1675:49252" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "224px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              {/* name="🧬 input" id="1675:49253" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background: "var(--neutral-white, #fff)",
                  },
                  ...{},
                }}
              >
                {/* name="🦆 icon "United States"" id="1675:49254" type="GROUP" */}
                <QodeSvg167549254
                  style={{
                    ...{
                      width: "18.667px",
                      height: "var(--font-size-base, 14px)",
                    },
                    ...{},
                  }}
                  {...{}}
                />
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
                >{`English`}</span>
                {/* name="Icon" id="1675:49271" type="INSTANCE" */}
                <QodeCustom66174
                  style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                  {...{}}
                />
              </div>
            </div>
            {/* name="Wrap" id="254:17032" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "48px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Mixer" id="254:17033" type="INSTANCE" */}
              <QodeCustom22423407
                style={{ ...{ width: "248px", height: "248px" }, ...{} }}
                {...{ property_1: "QT" }}
              />
              {/* name="Preset" id="254:17034" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
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
                      color: "var(--text-text-neutral-20, #878787)",
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
                >{`Or select a preset`}</span>
                {/* name="Presets" id="254:17036" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "4px",
                    },
                    ...{},
                  }}
                >
                  {/* name="Button" id="254:17037" type="INSTANCE" */}
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
                      buttonname: "Quick screening",
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Button" id="254:17038" type="INSTANCE" */}
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
                      buttonname: "Deep-dive Technical",
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
        </>
      )}
      {/* id="254:17087" */}
      {`${property_1}` === `Variant4` && (
        <>
          {/* name="Property 1=Variant4" id="254:17087" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "300px",
                height: "612px",
                padding: "28px 20px",
                flexDirection: "column",
                alignItems: "center",
                gap: "28px",
                flexShrink: "0",
                borderRight:
                  "1px solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Info" id="254:17088" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "243px",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                },
                ...{},
              }}
            >
              {/* name="Icon" id="254:17089" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding: "10px",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "44px",
                    border:
                      "1px solid var(--border-border-neutral-30, #d5d5d5)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                {/* name="cube" id="254:17090" type="FRAME" */}
                <QodeSvg25417090
                  style={{ ...{ width: "24px", height: "24px" }, ...{} }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
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
              >{`Customize your interview`}</span>
            </div>
            {/* name="Select" id="1675:49274" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "224px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxxs, 4px)",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border: "1px solid var(--border-border-neutral-30, #d5d5d5)",
                },
                ...{},
              }}
            >
              {/* name="🧬 input" id="1675:49275" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "0px var(--size-padding-paddingsm, 12px)",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    alignSelf: "stretch",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    border:
                      "1px solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                    background: "var(--neutral-white, #fff)",
                  },
                  ...{},
                }}
              >
                {/* name="🦆 icon "United States"" id="1675:49276" type="GROUP" */}
                <QodeSvg167549276
                  style={{
                    ...{
                      width: "18.667px",
                      height: "var(--font-size-base, 14px)",
                    },
                    ...{},
                  }}
                  {...{}}
                />
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
                >{`English`}</span>
                {/* name="Icon" id="1675:49293" type="INSTANCE" */}
                <QodeCustom66174
                  style={{ ...{ width: "16px", height: "16px" }, ...{} }}
                  {...{}}
                />
              </div>
            </div>
            {/* name="Wrap" id="254:17093" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "48px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Mixer" id="254:17094" type="INSTANCE" */}
              <QodeCustom22420154
                style={{ ...{ width: "248px", height: "248px" }, ...{} }}
                {...{ property_1: "TD" }}
              />
              {/* name="Preset" id="254:17095" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
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
                      color: "var(--text-text-neutral-20, #878787)",
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
                >{`Or select a preset`}</span>
                {/* name="Presets" id="254:17097" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "4px",
                    },
                    ...{},
                  }}
                >
                  {/* name="Button" id="254:17098" type="INSTANCE" */}
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
                      buttonname: "Quick screening",
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Button" id="254:17099" type="INSTANCE" */}
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
                      buttonname: "Deep-dive Technical",
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
        </>
      )}
    </>
  )
}
