// id="2789:2072"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeSteps } from "@designSystem/ant/QodeSteps"
import QodeSvg191979 from "@designSystem/icon/svg/QodeSvg191979"
import { QodeButton } from "@designSystem/ant/QodeButton"
import QodeSvg191983 from "@designSystem/icon/svg/QodeSvg191983"

export interface QodeCustom27892072Props {
  button?: boolean
  description?: boolean
  time?: string
  location?: boolean
  title?: string
  state?: "default" | "hover"
  status?: "error" | "finished" | "process" | "progress" | "wait"
  size?: "basic" | "dot" | "small"
}

export const QodeCustom27892072: React.FC<
  QodeCustom27892072Props & { style?: CSSProperties }
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
      {/* name=".exp_item_vertical" id="2789:2072" type="COMPONENT_SET" */}
      {/* id="2787:8903" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=finished, size=basic" id="2787:8903" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8904" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
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
                {/* name=".steps__item_progress" id="2787:8905" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "default" }}
                />
                {/* name=".steps__item_tail" id="2787:8906" type="INSTANCE" */}
                <QodeSvg191979
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8907" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9252" type="FRAME" */}
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
                  {/* name="Button" id="2787:9241" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8910" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=process, size=basic" id="2787:8910" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8911" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
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
                {/* name=".steps__item_progress" id="2787:8912" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "process", size: "default" }}
                />
                {/* name=".steps__item_tail" id="2787:8913" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8914" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9256" type="FRAME" */}
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
                  {/* name="Button" id="2787:9258" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8917" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=wait, size=basic" id="2787:8917" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8918" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
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
                {/* name=".steps__item_progress" id="2787:8919" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-neutral-10, #e3e3e3)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "wait", size: "default" }}
                />
                {/* name=".steps__item_tail" id="2787:8920" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8921" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9340" type="FRAME" */}
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
                  {/* name="Button" id="2787:9342" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8924" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=error, size=basic" id="2787:8924" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8925" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
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
                {/* name=".steps__item_progress" id="2787:8926" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--red-red-50, #dc3812)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "error", size: "default" }}
                />
                {/* name=".steps__item_tail" id="2787:8927" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8928" type="FRAME" */}
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
                      color: "var(--text-text-red, #dc3812)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9310" type="FRAME" */}
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
                  {/* name="Button" id="2787:9312" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8931" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=progress, size=basic" id="2787:8931" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8932" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
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
                {/* name=".steps__item_progress" id="2787:8933" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "progress", size: "default" }}
                />
                {/* name=".steps__item_tail" id="2787:8934" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8935" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9337" type="FRAME" */}
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
                  {/* name="Button" id="2787:9339" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8938" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=finished, size=basic" id="2787:8938" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8939" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
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
                {/* name=".steps__item_progress" id="2787:8940" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background:
                        "var(--color-success-colorsuccesshover, #1fc72f)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "default" }}
                />
                {/* name=".steps__item_tail" id="2787:8941" type="INSTANCE" */}
                <QodeSvg191979
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8942" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9331" type="FRAME" */}
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
                  {/* name="Button" id="2787:9333" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8945" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=process, size=basic" id="2787:8945" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8946" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
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
                {/* name=".steps__item_progress" id="2787:8947" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "process", size: "default" }}
                />
                {/* name=".steps__item_tail" id="2787:8948" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8949" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9319" type="FRAME" */}
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
                  {/* name="Button" id="2787:9321" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8952" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=wait, size=basic" id="2787:8952" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8953" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
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
                {/* name=".steps__item_progress" id="5747:1740" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-neutral-20, #d5d5d5)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "wait", size: "default" }}
                />
                {/* name=".steps__item_tail" id="2787:8955" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8956" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9325" type="FRAME" */}
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
                  {/* name="Button" id="2787:9327" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8959" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=error, size=basic" id="2787:8959" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8960" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
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
                {/* name=".steps__item_progress" id="2787:8961" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--color-error-colorerror, #dc3812)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "error", size: "default" }}
                />
                {/* name=".steps__item_tail" id="2787:8962" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8963" type="FRAME" */}
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
                      color: "var(--text-text-red, #dc3812)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9313" type="FRAME" */}
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
                  {/* name="Button" id="2787:9315" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8966" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=progress, size=basic" id="2787:8966" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8967" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "var(--line-height-lineheighheading3, 32px)",
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
                {/* name=".steps__item_progress" id="2787:8968" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "var(--line-height-lineheighheading3, 32px)",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--blue-techblue-50, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "progress", size: "default" }}
                />
                {/* name=".steps__item_tail" id="2787:8969" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8970" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9304" type="FRAME" */}
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
                  {/* name="Button" id="2787:9306" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8973" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=finished, size=small" id="2787:8973" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8974" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:8975" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                {/* name=".steps__item_tail" id="2787:8976" type="INSTANCE" */}
                <QodeSvg191979
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8977" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9280" type="FRAME" */}
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
                  {/* name="Button" id="2787:9282" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8980" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=process, size=small" id="2787:8980" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8981" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:8982" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "process", size: "small" }}
                />
                {/* name=".steps__item_tail" id="2787:8983" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8984" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9274" type="FRAME" */}
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
                  {/* name="Button" id="2787:9276" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8987" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=wait, size=small" id="2787:8987" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8988" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:8989" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-neutral-10, #e3e3e3)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "wait", size: "small" }}
                />
                {/* name=".steps__item_tail" id="2787:8990" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8991" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9307" type="FRAME" */}
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
                  {/* name="Button" id="2787:9309" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:8994" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=error, size=small" id="2787:8994" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:8995" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:8996" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--red-red-50, #dc3812)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "error", size: "small" }}
                />
                {/* name=".steps__item_tail" id="2787:8997" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:8998" type="FRAME" */}
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
                      color: "var(--text-text-red, #dc3812)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9301" type="FRAME" */}
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
                  {/* name="Button" id="2787:9303" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9001" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=progress, size=small" id="2787:9001" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9002" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9003" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "progress", size: "small" }}
                />
                {/* name=".steps__item_tail" id="2787:9004" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9005" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9298" type="FRAME" */}
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
                  {/* name="Button" id="2787:9300" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9008" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=finished, size=small" id="2787:9008" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9009" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9010" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                {/* name=".steps__item_tail" id="2787:9011" type="INSTANCE" */}
                <QodeSvg191979
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9012" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9295" type="FRAME" */}
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
                  {/* name="Button" id="2787:9297" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9015" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=process, size=small" id="2787:9015" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9016" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9017" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "process", size: "small" }}
                />
                {/* name=".steps__item_tail" id="2787:9018" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9019" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9289" type="FRAME" */}
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
                  {/* name="Button" id="2787:9291" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9022" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=wait, size=small" id="2787:9022" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9023" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9024" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-neutral-20, #d5d5d5)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "wait", size: "small" }}
                />
                {/* name=".steps__item_tail" id="2787:9025" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9026" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9322" type="FRAME" */}
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
                  {/* name="Button" id="2787:9324" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9029" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=error, size=small" id="2787:9029" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9030" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9031" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--red-red-50, #dc3812)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "error", size: "small" }}
                />
                {/* name=".steps__item_tail" id="2787:9032" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9033" type="FRAME" */}
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
                      color: "var(--text-text-red, #dc3812)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9316" type="FRAME" */}
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
                  {/* name="Button" id="2787:9318" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9036" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=progress, size=small" id="2787:9036" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9037" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9038" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "progress", size: "small" }}
                />
                {/* name=".steps__item_tail" id="2787:9039" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9040" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9292" type="FRAME" */}
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
                  {/* name="Button" id="2787:9294" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9043" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=finished, size=dot" id="2787:9043" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9044" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9045" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="2787:9046" type="INSTANCE" */}
                <QodeSvg191979
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9047" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9286" type="FRAME" */}
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
                  {/* name="Button" id="2787:9288" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9050" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=process, size=dot" id="2787:9050" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9051" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9052" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "10px",
                      height: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "process", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="2787:9053" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9054" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9283" type="FRAME" */}
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
                  {/* name="Button" id="2787:9285" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9057" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=wait, size=dot" id="2787:9057" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9058" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9059" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--neutral-gray-40, #a7a7a7)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "wait", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="2787:9060" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9061" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9277" type="FRAME" */}
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
                  {/* name="Button" id="2787:9279" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9064" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=error, size=dot" id="2787:9064" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9065" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9066" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--red-red-50, #dc3812)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "error", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="2787:9067" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9068" type="FRAME" */}
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
                      color: "var(--text-text-red, #dc3812)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9271" type="FRAME" */}
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
                  {/* name="Button" id="2787:9273" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9071" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=progress, size=dot" id="2787:9071" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9072" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9073" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "progress", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="2787:9074" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9075" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`In progress`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9328" type="FRAME" */}
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
                  {/* name="Button" id="2787:9330" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9078" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=finished, size=dot" id="2787:9078" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9079" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9080" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green-hover, #11a620)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="2787:9081" type="INSTANCE" */}
                <QodeSvg191979
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9082" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9334" type="FRAME" */}
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
                  {/* name="Button" id="2787:9336" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9085" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=process, size=dot" id="2787:9085" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9086" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9087" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "10px",
                      height: "10px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "process", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="2787:9088" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9089" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9268" type="FRAME" */}
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
                  {/* name="Button" id="2787:9270" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9092" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=wait, size=dot" id="2787:9092" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9093" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9094" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-neutral-20, #d5d5d5)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "wait", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="2787:9095" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9096" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9265" type="FRAME" */}
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
                  {/* name="Button" id="2787:9267" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9099" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=error, size=dot" id="2787:9099" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9100" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9101" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--red-red-50, #dc3812)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "error", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="2787:9102" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9103" type="FRAME" */}
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
                      color: "var(--text-text-red, #dc3812)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9262" type="FRAME" */}
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
                  {/* name="Button" id="2787:9264" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
      {/* id="2787:9106" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=progress, size=dot" id="2787:9106" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="2787:9107" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="2787:9108" type="INSTANCE" */}
                <QodeSteps
                  style={{
                    ...{
                      display: "flex",
                      width: "8px",
                      height: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "progress", size: "dot" }}
                />
                {/* name=".steps__item_tail" id="2787:9109" type="INSTANCE" */}
                <QodeSvg191983
                  style={{
                    ...{
                      width: "var(--size-size-size5xs-1px, 1px)",
                      flex: "1 0 0",
                    },
                    ...{},
                  }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="2787:9110" type="FRAME" */}
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
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-large, 16px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-lg, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Lorem Ipsum`}</span>
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
                >{`Location`}</span>
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
                >{`Time`}</span>
                {/* name="Description" id="2787:9259" type="FRAME" */}
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
                  {/* name="Button" id="2787:9261" type="INSTANCE" */}
                  <QodeButton
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
              </div>
            </div>
          </>
        )}
    </>
  )
}
