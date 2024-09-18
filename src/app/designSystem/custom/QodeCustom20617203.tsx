// id="206:17203"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import QodeSvg20617088 from "@designSystem/icon/svg/QodeSvg20617088"
import { QodeCustom22116413 } from "@designSystem/custom/QodeCustom22116413"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeTooltip } from "@designSystem/ant/QodeTooltip"
import QodeSvg20617207 from "@designSystem/icon/svg/QodeSvg20617207"
import QodeSvg25417029 from "@designSystem/icon/svg/QodeSvg25417029"
import { QodeCustom22423407 } from "@designSystem/custom/QodeCustom22423407"
import QodeSvg25417090 from "@designSystem/icon/svg/QodeSvg25417090"
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
      {/* name="Customize (revised)" id="206:17203" type="COMPONENT_SET" */}
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
                padding: "32px 20px",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
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
                      buttonname: "Quick screening",
                      selectIconLeft: <Icon.QodeIcons />,
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Button" id="206:17122" type="INSTANCE" */}
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
                      buttonname: "Deep-dive Technical",
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
                  bottom: "256px",
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
            {/* name="Button" id="206:17123" type="INSTANCE" */}
            <QodeButton
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  position: "absolute",
                  left: "103.5px",
                  bottom: "20px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                },
                ...{},
              }}
              {...{
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                buttonname: "How it works?",
                selectIconLeft: <Icon.QodeAngleLeft />,
                type: "link",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
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
                padding: "32px 20px",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
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
                      buttonname: "Quick screening",
                      selectIconLeft: <Icon.QodePenToSquare />,
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Button" id="206:17241" type="INSTANCE" */}
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
                      buttonname: "Deep-dive Technical",
                      selectIconLeft: <Icon.QodePenToSquare />,
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
            {/* name="Button" id="224:23358" type="INSTANCE" */}
            <QodeButton
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  position: "absolute",
                  left: "103.5px",
                  bottom: "20px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                },
                ...{},
              }}
              {...{
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                buttonname: "How it works?",
                selectIconLeft: <Icon.QodeAngleLeft />,
                type: "link",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
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
                padding: "32px 20px",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
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
                      buttonname: "Quick screening",
                      selectIconLeft: <Icon.QodePenToSquare />,
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Button" id="254:17038" type="INSTANCE" */}
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
                      buttonname: "Deep-dive Technical",
                      selectIconLeft: <Icon.QodePenToSquare />,
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
            {/* name="Button" id="254:17039" type="INSTANCE" */}
            <QodeButton
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  position: "absolute",
                  left: "103.5px",
                  bottom: "20px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                },
                ...{},
              }}
              {...{
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                buttonname: "How it works?",
                selectIconLeft: <Icon.QodeAngleLeft />,
                type: "link",
                size: "small",
                state: "default",
                content: "default",
                danger: false,
                ghost: false,
              }}
            />
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
                padding: "32px 20px",
                flexDirection: "column",
                alignItems: "center",
                gap: "32px",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
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
                      buttonname: "Quick screening",
                      selectIconLeft: <Icon.QodePenToSquare />,
                      type: "default",
                      size: "small",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Button" id="254:17099" type="INSTANCE" */}
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
                      buttonname: "Deep-dive Technical",
                      selectIconLeft: <Icon.QodePenToSquare />,
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
            {/* name="Button" id="254:17100" type="INSTANCE" */}
            <QodeButton
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  position: "absolute",
                  left: "103.5px",
                  bottom: "20px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                },
                ...{},
              }}
              {...{
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                buttonname: "How it works?",
                selectIconLeft: <Icon.QodeAngleLeft />,
                type: "link",
                size: "small",
                state: "default",
                content: "default",
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
