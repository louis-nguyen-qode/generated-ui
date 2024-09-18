// id="206:16773"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSegmented } from "@designSystem/ant/QodeSegmented"
import { QodeCustom1916003 } from "@designSystem/custom/QodeCustom1916003"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom20616773Props {
  showSegment?: boolean
  type?: "Human" | "AI" | "AI (revised)"
  step?: "1" | "2" | "3" | "4"
}

export const QodeCustom20616773: React.FC<
  QodeCustom20616773Props & { style?: CSSProperties }
> = ({ showSegment = true, type = "AI", step = "1", style, ...rest }) => {
  return (
    <>
      {/* name="Stepper | Interview" id="206:16773" type="COMPONENT_SET" */}
      {/* id="206:16772" */}
      {`${type}` === `AI` && `${step}` === `1` && (
        <>
          {/* name="Type=AI, Step=1" id="206:16772" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "270px",
                height: "668px",
                padding: "20px 20px 12px 20px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="206:16565" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Segmented" id="206:16566" type="INSTANCE" */}
              <QodeSegmented
                style={{
                  ...{
                    display: "flex",
                    padding: "2px",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-small, 4px)",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{ items: "2", size: "default" }}
              />
              {/* name="Steps" id="206:16567" type="INSTANCE" */}
              <QodeCustom1916003
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{ size: "basic", direction: "vertical", items: "4" }}
              />
            </div>
            {/* name="Note" id="273:19978" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "13px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Note" id="224:20541" type="FRAME" */}
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
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-20, #878787)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Click on a step number to navigate between steps`}</span>
              </div>
              {/* name="Line 29" id="273:21077" type="LINE" */}
              <Flex
                style={{
                  ...{
                    width: "230px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Button" id="273:19760" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "86px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  selectIconLeft: <Icon.QodeAngleLeft />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "How it works?",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="206:16771" */}
      {`${type}` === `AI` && `${step}` === `2` && (
        <>
          {/* name="Type=AI, Step=2" id="206:16771" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "270px",
                height: "668px",
                padding: "20px 20px 12px 20px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="206:16572" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Segmented" id="206:16573" type="INSTANCE" */}
              <QodeSegmented
                style={{
                  ...{
                    display: "flex",
                    padding: "2px",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-small, 4px)",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{ items: "2", size: "default" }}
              />
              {/* name="Steps" id="206:16574" type="INSTANCE" */}
              <QodeCustom1916003
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{ size: "basic", direction: "vertical", items: "4" }}
              />
            </div>
            {/* name="Note" id="275:17229" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "13px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Note" id="275:17230" type="FRAME" */}
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
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-20, #878787)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Click on a step number to navigate between steps`}</span>
              </div>
              {/* name="Line 29" id="275:17232" type="LINE" */}
              <Flex
                style={{
                  ...{
                    width: "230px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Button" id="275:17233" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "86px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  selectIconLeft: <Icon.QodeAngleLeft />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "How it works?",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="206:16770" */}
      {`${type}` === `AI` && `${step}` === `3` && (
        <>
          {/* name="Type=AI, Step=3" id="206:16770" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "270px",
                height: "668px",
                padding: "20px 20px 12px 20px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="206:16579" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Segmented" id="206:16580" type="INSTANCE" */}
              <QodeSegmented
                style={{
                  ...{
                    display: "flex",
                    padding: "2px",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-small, 4px)",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{ items: "2", size: "default" }}
              />
              {/* name="Steps" id="206:16581" type="INSTANCE" */}
              <QodeCustom1916003
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{ size: "basic", direction: "vertical", items: "4" }}
              />
            </div>
            {/* name="Note" id="275:17239" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "13px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Note" id="275:17240" type="FRAME" */}
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
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-20, #878787)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Click on a step number to navigate between steps`}</span>
              </div>
              {/* name="Line 29" id="275:17242" type="LINE" */}
              <Flex
                style={{
                  ...{
                    width: "230px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Button" id="275:17243" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "86px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  selectIconLeft: <Icon.QodeAngleLeft />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "How it works?",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="206:16769" */}
      {`${type}` === `AI` && `${step}` === `4` && (
        <>
          {/* name="Type=AI, Step=4" id="206:16769" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "270px",
                height: "668px",
                padding: "20px 20px 12px 20px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="206:16586" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Segmented" id="206:16587" type="INSTANCE" */}
              <QodeSegmented
                style={{
                  ...{
                    display: "flex",
                    padding: "2px",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-small, 4px)",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{ items: "2", size: "default" }}
              />
              {/* name="Steps" id="206:16588" type="INSTANCE" */}
              <QodeCustom1916003
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{ size: "basic", direction: "vertical", items: "4" }}
              />
            </div>
            {/* name="Note" id="275:17249" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "13px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Note" id="275:17250" type="FRAME" */}
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
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-20, #878787)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Click on a step number to navigate between steps`}</span>
              </div>
              {/* name="Line 29" id="275:17252" type="LINE" */}
              <Flex
                style={{
                  ...{
                    width: "230px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Button" id="275:17253" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "86px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  selectIconLeft: <Icon.QodeAngleLeft />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "How it works?",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="631:32870" */}
      {`${type}` === `AI (revised)` && `${step}` === `1` && (
        <>
          {/* name="Type=AI (revised), Step=1" id="631:32870" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "270px",
                height: "668px",
                padding: "20px 20px 12px 20px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="631:32871" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Segmented" id="631:32872" type="INSTANCE" */}
              <QodeSegmented
                style={{
                  ...{
                    display: "flex",
                    padding: "2px",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-small, 4px)",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{ items: "2", size: "default" }}
              />
              {/* name="Steps" id="631:32873" type="INSTANCE" */}
              <QodeCustom1916003
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{ size: "basic", direction: "vertical", items: "4" }}
              />
            </div>
            {/* name="Note" id="631:32874" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "13px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Note" id="631:32875" type="FRAME" */}
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
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-20, #878787)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Click on a step number to navigate between steps`}</span>
              </div>
              {/* name="Line 29" id="631:32877" type="LINE" */}
              <Flex
                style={{
                  ...{
                    width: "230px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Button" id="631:32878" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "86px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  selectIconLeft: <Icon.QodeAngleLeft />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "How it works?",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="631:32988" */}
      {`${type}` === `AI (revised)` && `${step}` === `2` && (
        <>
          {/* name="Type=AI (revised), Step=2" id="631:32988" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "270px",
                height: "668px",
                padding: "20px 20px 12px 20px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="631:32989" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Segmented" id="631:32990" type="INSTANCE" */}
              <QodeSegmented
                style={{
                  ...{
                    display: "flex",
                    padding: "2px",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-small, 4px)",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{ items: "2", size: "default" }}
              />
              {/* name="Steps" id="631:32991" type="INSTANCE" */}
              <QodeCustom1916003
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{ size: "basic", direction: "vertical", items: "4" }}
              />
            </div>
            {/* name="Note" id="631:32992" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "13px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Note" id="631:32993" type="FRAME" */}
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
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-20, #878787)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Click on a step number to navigate between steps`}</span>
              </div>
              {/* name="Line 29" id="631:32995" type="LINE" */}
              <Flex
                style={{
                  ...{
                    width: "230px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Button" id="631:32996" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "86px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  selectIconLeft: <Icon.QodeAngleLeft />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "How it works?",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="631:32928" */}
      {`${type}` === `AI (revised)` && `${step}` === `3` && (
        <>
          {/* name="Type=AI (revised), Step=3" id="631:32928" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "270px",
                height: "668px",
                padding: "20px 20px 12px 20px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="631:32929" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Segmented" id="631:32930" type="INSTANCE" */}
              <QodeSegmented
                style={{
                  ...{
                    display: "flex",
                    padding: "2px",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-small, 4px)",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{ items: "2", size: "default" }}
              />
              {/* name="Steps" id="631:32931" type="INSTANCE" */}
              <QodeCustom1916003
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{ size: "basic", direction: "vertical", items: "4" }}
              />
            </div>
            {/* name="Note" id="631:32932" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "13px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Note" id="631:32933" type="FRAME" */}
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
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-20, #878787)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Click on a step number to navigate between steps`}</span>
              </div>
              {/* name="Line 29" id="631:32935" type="LINE" */}
              <Flex
                style={{
                  ...{
                    width: "230px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Button" id="631:32936" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "86px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  selectIconLeft: <Icon.QodeAngleLeft />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "How it works?",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="206:16904" */}
      {`${type}` === `Human` && `${step}` === `1` && (
        <>
          {/* name="Type=Human, Step=1" id="206:16904" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "270px",
                height: "668px",
                padding: "20px 20px 12px 20px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="206:16905" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Segmented" id="206:16906" type="INSTANCE" */}
              <QodeSegmented
                style={{
                  ...{
                    display: "flex",
                    padding: "2px",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-small, 4px)",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{ items: "2", size: "default" }}
              />
              {/* name="Steps" id="206:16907" type="INSTANCE" */}
              <QodeCustom1916003
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{ size: "basic", direction: "vertical", items: "3" }}
              />
            </div>
            {/* name="Note" id="275:17259" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "13px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Note" id="275:17260" type="FRAME" */}
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
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-20, #878787)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Click on a step number to navigate between steps`}</span>
              </div>
              {/* name="Line 29" id="275:17262" type="LINE" */}
              <Flex
                style={{
                  ...{
                    width: "230px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Button" id="275:17263" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "86px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  selectIconLeft: <Icon.QodeAngleLeft />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "How it works?",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="206:16911" */}
      {`${type}` === `Human` && `${step}` === `2` && (
        <>
          {/* name="Type=Human, Step=2" id="206:16911" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "270px",
                height: "668px",
                padding: "20px 20px 12px 20px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="206:16912" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Segmented" id="206:16913" type="INSTANCE" */}
              <QodeSegmented
                style={{
                  ...{
                    display: "flex",
                    padding: "2px",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-small, 4px)",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{ items: "2", size: "default" }}
              />
              {/* name="Steps" id="206:16914" type="INSTANCE" */}
              <QodeCustom1916003
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{ size: "basic", direction: "vertical", items: "3" }}
              />
            </div>
            {/* name="Note" id="275:17269" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "13px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Note" id="275:17270" type="FRAME" */}
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
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-20, #878787)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Click on a step number to navigate between steps`}</span>
              </div>
              {/* name="Line 29" id="275:17272" type="LINE" */}
              <Flex
                style={{
                  ...{
                    width: "230px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Button" id="275:17273" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "86px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  selectIconLeft: <Icon.QodeAngleLeft />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "How it works?",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="206:16918" */}
      {`${type}` === `Human` && `${step}` === `3` && (
        <>
          {/* name="Type=Human, Step=3" id="206:16918" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "270px",
                height: "668px",
                padding: "20px 20px 12px 20px",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: "0",
                borderRight:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="206:16919" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Segmented" id="206:16920" type="INSTANCE" */}
              <QodeSegmented
                style={{
                  ...{
                    display: "flex",
                    padding: "2px",
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: "var(--border-radius-small, 4px)",
                    background: "var(--neutral-gray-10, #e3e3e3)",
                  },
                  ...{},
                }}
                {...{ items: "2", size: "default" }}
              />
              {/* name="Steps" id="206:16921" type="INSTANCE" */}
              <QodeCustom1916003
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
                {...{ size: "basic", direction: "vertical", items: "3" }}
              />
            </div>
            {/* name="Note" id="275:17279" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "13px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Note" id="275:17280" type="FRAME" */}
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
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-20, #878787)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-base, 14px)",
                      fontStyle: "italic",
                      fontWeight: "400",
                      lineHeight:
                        "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                    },
                    ...{},
                  }}
                >{`Click on a step number to navigate between steps`}</span>
              </div>
              {/* name="Line 29" id="275:17282" type="LINE" */}
              <Flex
                style={{
                  ...{
                    width: "230px",
                    height: "1px",
                    background: "var(--border-border-neutral-30, #d5d5d5)",
                  },
                  ...{},
                }}
              >
                <></>
              </Flex>
              {/* name="Button" id="275:17283" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "86px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  selectIconLeft: <Icon.QodeAngleLeft />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "How it works?",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}
