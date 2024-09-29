// id="607:40891"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom60740862 } from "@designSystem/custom/QodeCustom60740862"
import QodeSvg1308527 from "@designSystem/icon/svg/QodeSvg1308527"
import QodeSvg1308529 from "@designSystem/icon/svg/QodeSvg1308529"
import { QodeCustom60740864 } from "@designSystem/custom/QodeCustom60740864"
import { QodeCustom60740867 } from "@designSystem/custom/QodeCustom60740867"
import { QodeCustom60740869 } from "@designSystem/custom/QodeCustom60740869"
import { QodeCustom60740872 } from "@designSystem/custom/QodeCustom60740872"

export interface QodeCustom60740891Props {
  description?: boolean
  title?: string
  state?: "default" | "hover"
  status?: "finished" | "process" | "wait" | "error" | "progress"
  size?: "basic" | "small" | "dot"
}

export const QodeCustom60740891: React.FC<
  QodeCustom60740891Props & { style?: CSSProperties }
> = ({
  description = true,
  title = "Lorem Ipsum",
  state = "default",
  status = "finished",
  size = "basic",
  style,
  ...rest
}) => {
  return (
    <>
      {/* name=".steps__item_vertical" id="607:40891" type="COMPONENT_SET" */}
      {/* id="607:40892" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=finished, size=basic" id="607:40892" type="COMPONENT" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-padding, 16px)",
                },
                ...style,
              }}
            >
              {/* name="Icon Wrapper" id="607:40922" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "6px",
                    alignSelf: "stretch",
                  },
                  ...{},
                }}
              >
                {/* name=".steps__item_progress" id="607:40923" type="INSTANCE" */}
                <QodeCustom60740862
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
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
                {/* name=".steps__item_tail" id="607:40924" type="INSTANCE" */}
                <QodeSvg1308527
                  style={{ ...{ width: "1px", height: "34px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40925" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "224px",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40893" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=process, size=basic" id="607:40893" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:40928" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:40929" type="INSTANCE" */}
                <QodeCustom60740862
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "default" }}
                />
                {/* name=".steps__item_tail" id="607:40930" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "34px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40931" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40894" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=wait, size=basic" id="607:40894" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:40934" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:40935" type="INSTANCE" */}
                <QodeCustom60740864
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
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
                {/* name=".steps__item_tail" id="607:40936" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "34px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40937" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40895" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=error, size=basic" id="607:40895" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:40940" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:40941" type="INSTANCE" */}
                <QodeCustom60740862
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-red-hover, #dc3812)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "default" }}
                />
                {/* name=".steps__item_tail" id="607:40942" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "34px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40943" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40896" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=default, status=progress, size=basic" id="607:40896" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:40946" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:40947" type="INSTANCE" */}
                <QodeCustom60740862
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "default" }}
                />
                {/* name=".steps__item_tail" id="607:40948" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "34px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40949" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40897" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=finished, size=basic" id="607:40897" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:40952" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:40953" type="INSTANCE" */}
                <QodeCustom60740862
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
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
                {/* name=".steps__item_tail" id="607:40954" type="INSTANCE" */}
                <QodeSvg1308527
                  style={{ ...{ width: "1px", height: "34px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40955" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40898" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=process, size=basic" id="607:40898" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:40958" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:40959" type="INSTANCE" */}
                <QodeCustom60740862
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "default" }}
                />
                {/* name=".steps__item_tail" id="607:40960" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "34px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40961" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40899" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=wait, size=basic" id="607:40899" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:40964" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:40965" type="INSTANCE" */}
                <QodeCustom60740864
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
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
                {/* name=".steps__item_tail" id="607:40966" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "34px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40967" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40900" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=error, size=basic" id="607:40900" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:40970" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:40971" type="INSTANCE" */}
                <QodeCustom60740862
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-red-hover, #dc3812)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "default" }}
                />
                {/* name=".steps__item_tail" id="607:40972" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "34px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40973" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40901" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `basic` && (
          <>
            {/* name="state=hover, status=progress, size=basic" id="607:40901" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:40976" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:40977" type="INSTANCE" */}
                <QodeCustom60740862
                  style={{
                    ...{
                      display: "flex",
                      width: "32px",
                      height: "var(--size-height-controlheight, 32px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-primary, #1597f4)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "default" }}
                />
                {/* name=".steps__item_tail" id="607:40978" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "34px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40979" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) 0px var(--size-padding-paddingsm, 12px) 0px",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "224px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40902" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=finished, size=small" id="607:40902" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:40982" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:40983" type="INSTANCE" */}
                <QodeCustom60740867
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
                {/* name=".steps__item_tail" id="607:40984" type="INSTANCE" */}
                <QodeSvg1308527
                  style={{ ...{ width: "1px", height: "27px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40985" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40903" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=process, size=small" id="607:40903" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:40988" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:40989" type="INSTANCE" */}
                <QodeCustom60740867
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
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                {/* name=".steps__item_tail" id="607:40990" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "27px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40991" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40904" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=wait, size=small" id="607:40904" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:40994" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:40995" type="INSTANCE" */}
                <QodeCustom60740869
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
                {/* name=".steps__item_tail" id="607:40996" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "27px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:40997" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40905" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=error, size=small" id="607:40905" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41000" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:41001" type="INSTANCE" */}
                <QodeCustom60740867
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-red-hover, #dc3812)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                {/* name=".steps__item_tail" id="607:41002" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "27px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41003" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40906" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `small` && (
          <>
            {/* name="state=default, status=progress, size=small" id="607:40906" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41006" type="FRAME" */}
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
                {/* name=".steps__item_progress" id="607:41007" type="INSTANCE" */}
                <QodeCustom60740867
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
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                {/* name=".steps__item_tail" id="607:41008" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "27px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41009" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40907" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=finished, size=small" id="607:40907" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41012" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
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
                {/* name=".steps__item_progress" id="607:41013" type="INSTANCE" */}
                <QodeCustom60740867
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-green, #1fc72f)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                {/* name=".steps__item_tail" id="607:41014" type="INSTANCE" */}
                <QodeSvg1308527
                  style={{ ...{ width: "1px", height: "28px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41015" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40908" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=process, size=small" id="607:40908" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41018" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
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
                {/* name=".steps__item_progress" id="607:41019" type="INSTANCE" */}
                <QodeCustom60740867
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
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                {/* name=".steps__item_tail" id="607:41020" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "28px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41021" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40909" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=wait, size=small" id="607:40909" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41024" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
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
                {/* name=".steps__item_progress" id="607:41025" type="INSTANCE" */}
                <QodeCustom60740869
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
                {/* name=".steps__item_tail" id="607:41026" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "28px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41027" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40910" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=error, size=small" id="607:40910" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41030" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
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
                {/* name=".steps__item_progress" id="607:41031" type="INSTANCE" */}
                <QodeCustom60740867
                  style={{
                    ...{
                      display: "flex",
                      width: "24px",
                      height: "var(--size-height-controlheightsm, 24px)",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "999px",
                      background: "var(--background-bg-red-hover, #dc3812)",
                    },
                    ...{},
                  }}
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                {/* name=".steps__item_tail" id="607:41032" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "28px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41033" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40911" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `small` && (
          <>
            {/* name="state=hover, status=progress, size=small" id="607:40911" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41036" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
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
                {/* name=".steps__item_progress" id="607:41037" type="INSTANCE" */}
                <QodeCustom60740867
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
                  {...{ step: "2", status: "finish", size: "small" }}
                />
                {/* name=".steps__item_tail" id="607:41038" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "28px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41039" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "232px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40912" */}
      {`${state}` === `default` &&
        `${status}` === `finished` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=finished, size=dot" id="607:40912" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41042" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
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
                {/* name=".steps__item_progress" id="607:41043" type="INSTANCE" */}
                <QodeCustom60740872
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
                {/* name=".steps__item_tail" id="607:41044" type="INSTANCE" */}
                <QodeSvg1308527
                  style={{ ...{ width: "1px", height: "44px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41045" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40913" */}
      {`${state}` === `default` &&
        `${status}` === `process` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=process, size=dot" id="607:40913" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41048" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
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
                {/* name=".steps__item_progress" id="607:41049" type="INSTANCE" */}
                <QodeCustom60740872
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
                {/* name=".steps__item_tail" id="607:41050" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "43px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41051" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "246px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40914" */}
      {`${state}` === `default` &&
        `${status}` === `wait` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=wait, size=dot" id="607:40914" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41054" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
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
                {/* name=".steps__item_progress" id="607:41055" type="INSTANCE" */}
                <QodeCustom60740872
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
                {/* name=".steps__item_tail" id="607:41056" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "44px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41057" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      flex: "1 0 0",
                      color: "var(--text-text-neutral-40, #464646)",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40915" */}
      {`${state}` === `default` &&
        `${status}` === `error` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=error, size=dot" id="607:40915" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41060" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
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
                {/* name=".steps__item_progress" id="607:41061" type="INSTANCE" */}
                <QodeCustom60740872
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
                {/* name=".steps__item_tail" id="607:41062" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "44px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41063" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40916" */}
      {`${state}` === `default` &&
        `${status}` === `progress` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=default, status=progress, size=dot" id="607:40916" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41066" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
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
                {/* name=".steps__item_progress" id="607:41067" type="INSTANCE" */}
                <QodeCustom60740872
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
                {/* name=".steps__item_tail" id="607:41068" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "44px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41069" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40917" */}
      {`${state}` === `hover` &&
        `${status}` === `finished` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=finished, size=dot" id="607:40917" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41072" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
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
                {/* name=".steps__item_progress" id="607:41073" type="INSTANCE" */}
                <QodeCustom60740872
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
                {/* name=".steps__item_tail" id="607:41074" type="INSTANCE" */}
                <QodeSvg1308527
                  style={{ ...{ width: "1px", height: "44px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "active",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41075" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40918" */}
      {`${state}` === `hover` &&
        `${status}` === `process` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=process, size=dot" id="607:40918" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41078" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
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
                {/* name=".steps__item_progress" id="607:41079" type="INSTANCE" */}
                <QodeCustom60740872
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
                {/* name=".steps__item_tail" id="607:41080" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "43px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41081" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "246px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40919" */}
      {`${state}` === `hover` &&
        `${status}` === `wait` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=wait, size=dot" id="607:40919" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41084" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
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
                {/* name=".steps__item_progress" id="607:41085" type="INSTANCE" */}
                <QodeCustom60740872
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
                {/* name=".steps__item_tail" id="607:41086" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "44px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41087" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40920" */}
      {`${state}` === `hover` &&
        `${status}` === `error` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=error, size=dot" id="607:40920" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41090" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
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
                {/* name=".steps__item_progress" id="607:41091" type="INSTANCE" */}
                <QodeCustom60740872
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
                {/* name=".steps__item_tail" id="607:41092" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "44px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41093" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
      {/* id="607:40921" */}
      {`${state}` === `hover` &&
        `${status}` === `progress` &&
        `${size}` === `dot` && (
          <>
            {/* name="state=hover, status=progress, size=dot" id="607:40921" type="COMPONENT" */}
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
              {/* name="Icon Wrapper" id="607:41096" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "8px",
                    paddingTop: "7px",
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
                {/* name=".steps__item_progress" id="607:41097" type="INSTANCE" */}
                <QodeCustom60740872
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
                {/* name=".steps__item_tail" id="607:41098" type="INSTANCE" */}
                <QodeSvg1308529
                  style={{ ...{ width: "1px", height: "44px" }, ...{} }}
                  {...{
                    direction: "vertical",
                    _style: "default",
                    state: "waiting",
                  }}
                />
              </div>
              {/* name="Text Wrapper" id="607:41099" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    paddingBottom: "var(--size-padding-paddingsm, 12px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--size-padding-paddingxxs, 4px)",
                    flex: "1 0 0",
                  },
                  ...{},
                }}
              >
                <span
                  style={{
                    ...{
                      width: "248px",
                      flex: "1 0 0",
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
                >{`This is a description`}</span>
              </div>
            </div>
          </>
        )}
    </>
  )
}
