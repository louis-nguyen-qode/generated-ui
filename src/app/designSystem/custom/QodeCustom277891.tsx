// id="27:7891"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg166020 from "@designSystem/icon/svg/QodeSvg166020"
import { QodeButton } from "@designSystem/ant/QodeButton"
import QodeSvg166024 from "@designSystem/icon/svg/QodeSvg166024"

export interface QodeCustom277891Props {
  button?: boolean
  description?: boolean
  time?: string
  location?: boolean
  title?: string
  state?: "default" | "hover"
  status?: "error" | "finished" | "process" | "progress" | "wait"
  size?: "basic" | "dot" | "small"
}

export const QodeCustom277891: React.FC<
  QodeCustom277891Props & { style?: CSSProperties }
> = ({
  button = true,
  description = true,
  time = "Time",
  location = true,
  title = "Lorem Ipsum",
  state = "default",
  status = "finished",
  size = "basic",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".exp_item_vertical" id="27:7891" type="COMPONENT_SET" */}
      {/* id="27:7892" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=finished, size=basic" id="27:7892" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "16px",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:7922" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:7923" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-success-colorsuccess, #8db911)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "default" }}
                />
                {/* name=".steps__item_tail" id="27:7924" type="INSTANCE" */}
                <QodeSvg166020
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:7925" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxs, 8px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      height: "24px",
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:7929" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:7931" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7893" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=process, size=basic" id="27:7893" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:7932" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:7933" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "process", size: "default" }}
                />
                {/* name=".steps__item_tail" id="27:7934" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:7935" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxs, 8px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:7939" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:7941" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7894" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=wait, size=basic" id="27:7894" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:7942" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:7943" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background:
                        "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "wait", size: "default" }}
                />
                {/* name=".steps__item_tail" id="27:7944" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:7945" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxs, 8px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:7949" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:7951" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7895" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=error, size=basic" id="27:7895" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:7952" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:7953" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-error-colorerror, #ff6542)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "error", size: "default" }}
                />
                {/* name=".steps__item_tail" id="27:7954" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:7955" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxs, 8px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      height: "24px",
                      color: "var(--color-error-colorerrortext, #ff6542)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:7959" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:7961" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7896" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=progress, size=basic" id="27:7896" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:7962" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:7963" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "progress", size: "default" }}
                />
                {/* name=".steps__item_tail" id="27:7964" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:7965" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxs, 8px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:7969" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:7971" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7897" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=finished, size=basic" id="27:7897" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "16px",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:7972" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:7973" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background:
                        "var(--color-success-colorsuccesshover, #a3c73e)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "default" }}
                />
                {/* name=".steps__item_tail" id="27:7974" type="INSTANCE" */}
                <QodeSvg166020
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:7975" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxs, 8px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:7979" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:7981" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7898" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=process, size=basic" id="27:7898" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:7982" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:7983" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "process", size: "default" }}
                />
                {/* name=".steps__item_tail" id="27:7984" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:7985" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxs, 8px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:7989" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:7991" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7899" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=wait, size=basic" id="27:7899" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:7992" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:7993" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background:
                        "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "wait", size: "default" }}
                />
                {/* name=".steps__item_tail" id="27:7994" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:7995" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxs, 8px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:7999" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8001" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7900" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=error, size=basic" id="27:7900" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8002" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8003" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-error-colorerror, #ff6542)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "error", size: "default" }}
                />
                {/* name=".steps__item_tail" id="27:8004" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8005" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxs, 8px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      height: "24px",
                      color: "var(--color-error-colorerrortext, #ff6542)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8009" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8011" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7901" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=progress, size=basic" id="27:7901" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8012" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8013" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "progress", size: "default" }}
                />
                {/* name=".steps__item_tail" id="27:8014" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8015" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingxs, 8px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8019" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8021" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7902" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=finished, size=small" id="27:7902" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "16px",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8022" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8023" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-success-colorsuccess, #8db911)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                {/* name=".steps__item_tail" id="27:8024" type="INSTANCE" */}
                <QodeSvg166020
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8025" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8029" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8031" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7903" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=process, size=small" id="27:7903" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8032" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    paddingBottom: "2px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8033" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "process", size: "small" }}
                />
                {/* name=".steps__item_tail" id="27:8034" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8035" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8039" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8041" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7904" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=wait, size=small" id="27:7904" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8042" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8043" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background:
                        "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "wait", size: "small" }}
                />
                {/* name=".steps__item_tail" id="27:8044" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8045" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8049" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8051" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7905" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=error, size=small" id="27:7905" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8052" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8053" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-error-colorerror, #ff6542)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "error", size: "small" }}
                />
                {/* name=".steps__item_tail" id="27:8054" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8055" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      height: "24px",
                      color: "var(--color-error-colorerrortext, #ff6542)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8059" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8061" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7906" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=progress, size=small" id="27:7906" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8062" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8063" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "progress", size: "small" }}
                />
                {/* name=".steps__item_tail" id="27:8064" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8065" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8069" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8071" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7907" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=finished, size=small" id="27:7907" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "16px",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8072" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    paddingBottom: "2px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8073" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-success-colorsuccess, #8db911)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                {/* name=".steps__item_tail" id="27:8074" type="INSTANCE" */}
                <QodeSvg166020
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8075" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8079" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8081" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7908" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=process, size=small" id="27:7908" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8082" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8083" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "process", size: "small" }}
                />
                {/* name=".steps__item_tail" id="27:8084" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8085" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8089" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8091" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7909" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=wait, size=small" id="27:7909" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8092" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8093" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background:
                        "var(--color-neutral-fill-colorfillsecondary, rgba(0, 0, 0, 0.06))",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "wait", size: "small" }}
                />
                {/* name=".steps__item_tail" id="27:8094" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8095" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8099" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8101" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7910" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=error, size=small" id="27:7910" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8102" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8103" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-error-colorerror, #ff6542)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "error", size: "small" }}
                />
                {/* name=".steps__item_tail" id="27:8104" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8105" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      height: "24px",
                      color: "var(--color-error-colorerrortext, #ff6542)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8109" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8111" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7911" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=progress, size=small" id="27:7911" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8112" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8113" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "progress", size: "small" }}
                />
                {/* name=".steps__item_tail" id="27:8114" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8115" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8119" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8121" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7912" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=finished, size=dot" id="27:7912" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "16px",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8122" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    padding: "7px 0px 9px 0px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8123" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="27:8124" type="INSTANCE" */}
                <QodeSvg166020
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8125" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8129" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8131" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7913" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=process, size=dot" id="27:7913" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8132" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "10px",
                    padding: "7px 0px 9px 0px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8133" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "10px",
                      height: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "process", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="27:8134" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8135" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "246px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8139" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8141" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7914" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=wait, size=dot" id="27:7914" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8142" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    padding: "7px 0px 9px 0px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8143" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background:
                        "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "wait", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="27:8144" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8145" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8149" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8151" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7915" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=error, size=dot" id="27:7915" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8152" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    padding: "7px 0px 9px 0px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8153" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-error-colorerror, #ff6542)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "error", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="27:8154" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8155" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      height: "24px",
                      color: "var(--color-error-colorerrortext, #ff6542)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8159" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8161" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7916" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=progress, size=dot" id="27:7916" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8162" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    padding: "7px 0px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8163" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "progress", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="27:8164" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8165" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`In progress`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8169" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8171" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7917" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=finished, size=dot" id="27:7917" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "16px",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8172" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    padding: "7px 0px 9px 0px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8173" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="27:8174" type="INSTANCE" */}
                <QodeSvg166020
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8175" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8179" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8181" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7918" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=process, size=dot" id="27:7918" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8182" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "10px",
                    padding: "7px 0px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8183" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "10px",
                      height: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "process", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="27:8184" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8185" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "246px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8189" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8191" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7919" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=wait, size=dot" id="27:7919" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8192" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    padding: "7px 0px 11px 0px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8193" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background:
                        "var(--color-neutral-text-colortextplaceholder, rgba(0, 0, 0, 0.45))",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "wait", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="27:8194" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8195" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8199" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8201" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7920" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=error, size=dot" id="27:7920" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8202" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    padding: "7px 0px 11px 0px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8203" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-error-colorerror, #ff6542)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "error", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="27:8204" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8205" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      height: "24px",
                      color: "var(--color-error-colorerrortext, #ff6542)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8209" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8211" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
      {/* id="27:7921" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=progress, size=dot" id="27:7921" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "272px",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="27:8212" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    padding: "7px 0px 11px 0px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    flexShrink: "0",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="27:8213" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-primary-colorprimary, #2d64bc)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "progress", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="27:8214" type="INSTANCE" */}
                <QodeSvg166024
                  style={{ ...{ width: "1px", flex: "1 0 0" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="27:8215" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingxs, 8px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-margin-marginxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      height: "24px",
                      color: "var(--color-neutral-text-colortext, #000)",
                      fontFamily:
                        'var(--font-family-fontfamily, "sf pro display")',
                      fontSize: "var(--font-size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--line-height-lineheighlg, 24px) /* 150% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--color-neutral-text-colortext, #000)",
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
                >{`Location`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color:
                        "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
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
                >{`Time`}</span>
                {/* name="Description" id="27:8219" type="FRAME" */}
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
                        color: "var(--color-neutral-text-colortext, #000)",
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
                  >{`Description`}</span>
                  {/* name="Button" id="27:8221" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      ...{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-padding-paddingxxs, 4px)",
                        borderRadius: "var(--style-radius-borderround, 999px)",
                      },
                      ...{},
                    }}
                    {...{
                      title: "See More",
                      type: "text",
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
          </>
        )}
    </>
  )
}
