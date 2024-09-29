// id="1278:37493"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom127837379 } from "@designSystem/custom/QodeCustom127837379"
import { QodeCustom127837386 } from "@designSystem/custom/QodeCustom127837386"
import { QodeCustom195652994 } from "@designSystem/custom/QodeCustom195652994"
import { QodeCustom127037143 } from "@designSystem/custom/QodeCustom127037143"
import QodeSvg195649789 from "@designSystem/icon/svg/QodeSvg195649789"
import { QodeCustom133139605 } from "@designSystem/custom/QodeCustom133139605"
import { QodeCustom133139621 } from "@designSystem/custom/QodeCustom133139621"
import QodeSvg195650155 from "@designSystem/icon/svg/QodeSvg195650155"
import { QodeCustom127837391 } from "@designSystem/custom/QodeCustom127837391"
import { QodeCustom195650283 } from "@designSystem/custom/QodeCustom195650283"
import QodeSvg195649972 from "@designSystem/icon/svg/QodeSvg195649972"

export interface QodeCustom127837493Props {
  type?: "AI" | "Human" | "Both"
  mobile?: "Default" | "true"
}

export const QodeCustom127837493: React.FC<
  QodeCustom127837493Props & { style?: CSSProperties }
> = ({ type = "Human", mobile = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Interview" id="1278:37493" type="COMPONENT_SET" */}
      {/* id="1278:37458" */}
      {`${type}` === `Human` && `${mobile}` === `Default` && (
        <>
          {/* name="type=Human, mobile=Default" id="1278:37458" type="COMPONENT" */}
          <div
            style={{
              ...{
                width: "1280px",
                height: "88px",
                flexShrink: "0",
                borderTop: "1px solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Frame 37447" id="1270:37156" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "62px",
                  alignItems: "center",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              {/* name="Interviewbtn/Present" id="1278:37400" type="INSTANCE" */}
              <QodeCustom127837379
                style={{
                  ...{
                    display: "flex",
                    width: "65px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
                {...{ option: true, state: "off", _style: "Default" }}
              />
              {/* name="Interviewbtn/Chat" id="1278:37407" type="INSTANCE" */}
              <QodeCustom127837386
                style={{
                  ...{
                    display: "flex",
                    width: "65px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
                {...{
                  option: true,
                  showText: "Chat",
                  state: "on",
                  _style: "Default",
                }}
              />
            </div>
            {/* name="R" id="1956:52122" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  alignItems: "flex-start",
                  gap: "20px",
                },
                ...{},
              }}
            >
              {/* name="Report" id="1956:52357" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
              >
                {/* name="Icon" id="1956:52358" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "8px",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                >
                  {/* name="triangle-exclamation" id="1956:52359" type="INSTANCE" */}
                  <QodeCustom195652994
                    style={{
                      ...{ width: "24px", height: "24px", flexShrink: "0" },
                      ...{},
                    }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-40, #464646)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    },
                    ...{},
                  }}
                >{`Report`}</span>
              </div>
              {/* name="End" id="1354:37729" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
              >
                {/* name="Icon" id="1354:37730" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border: "1px solid var(--border-border-red-20, #dc3812)",
                      background: "var(--background-bg-red, #f85631)",
                    },
                    ...{},
                  }}
                >
                  {/* name="phone-hangup" id="1354:37731" type="INSTANCE" */}
                  <QodeCustom127037143
                    style={{
                      ...{ width: "24px", height: "24px", flexShrink: "0" },
                      ...{},
                    }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-40, #464646)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    },
                    ...{},
                  }}
                >{`End`}</span>
              </div>
            </div>
            {/* name="L" id="1331:40031" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "0px 20px",
                  alignItems: "center",
                  gap: "12px",
                },
                ...{},
              }}
            >
              {/* name="Icon" id="1956:49788" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "40px",
                    height: "40px",
                    padding: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "8px",
                    border:
                      "1px solid var(--border-border-neutral-20, #e3e3e3)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                {/* name="Vector" id="1956:49789" type="VECTOR" */}
                <QodeSvg195649789
                  style={{
                    ...{
                      width: "19.003px",
                      height: "20.003px",
                      flexShrink: "0",
                      fill: "var(--neutral-gray-70, #656565)",
                    },
                    ...{},
                  }}
                  {...{}}
                />
              </div>
              {/* name="Interviewbtn/Camera" id="1331:39676" type="INSTANCE" */}
              <QodeCustom133139605
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                  },
                  ...{},
                }}
                {...{ option: true, property_1: "on", _style: "simple" }}
              />
              {/* name="Interviewbtn/Microphone" id="1331:39745" type="INSTANCE" */}
              <QodeCustom133139621
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                  },
                  ...{},
                }}
                {...{ option: true, property_1: "on", _style: "simple" }}
              />
            </div>
          </div>
        </>
      )}
      {/* id="1354:37805" */}
      {`${type}` === `Both` && `${mobile}` === `true` && (
        <>
          {/* name="type=Both, mobile=true" id="1354:37805" type="COMPONENT" */}
          <div
            style={{
              ...{
                width: "375px",
                height: "64px",
                flexShrink: "0",
                borderTop: "1px solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Left Menu" id="1354:37926" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  padding: "0px 12px",
                  alignItems: "center",
                  gap: "12px",
                },
                ...{},
              }}
            >
              {/* name="Icon" id="1956:50154" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "40px",
                    height: "40px",
                    padding: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "8px",
                    border:
                      "1px solid var(--border-border-neutral-20, #e3e3e3)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                {/* name="Vector" id="1956:50155" type="VECTOR" */}
                <QodeSvg195650155
                  style={{
                    ...{
                      width: "19.003px",
                      height: "20.003px",
                      flexShrink: "0",
                      fill: "var(--neutral-gray-70, #656565)",
                    },
                    ...{},
                  }}
                  {...{}}
                />
              </div>
              {/* name="Interviewbtn/Camera" id="1354:37927" type="INSTANCE" */}
              <QodeCustom133139605
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                  },
                  ...{},
                }}
                {...{ option: true, property_1: "on", _style: "simple" }}
              />
              {/* name="Interviewbtn/Microphone" id="1354:37928" type="INSTANCE" */}
              <QodeCustom133139621
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                  },
                  ...{},
                }}
                {...{ option: true, property_1: "on", _style: "simple" }}
              />
              {/* name="Interviewbtn/Chat" id="1354:37929" type="INSTANCE" */}
              <QodeCustom127837391
                style={{
                  ...{
                    display: "flex",
                    width: "40px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
                {...{
                  option: true,
                  showText: "Chat",
                  state: "off",
                  _style: "Default",
                }}
              />
            </div>
            {/* name="Icon" id="1354:37931" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  flexShrink: "0",
                  borderRadius: "var(--size-size-sizexs-8px, 8px)",
                  border: "1px solid var(--border-border-red-20, #dc3812)",
                  background: "var(--background-bg-red, #f85631)",
                },
                ...{},
              }}
            >
              {/* name="phone-hangup" id="1354:37932" type="INSTANCE" */}
              <QodeCustom127037143
                style={{
                  ...{ width: "24px", height: "24px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
            {/* name="Icon" id="1956:51230" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  padding: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  flexShrink: "0",
                  borderRadius: "8px",
                  border: "1px solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--neutral-gray-5, #f8f6f6)",
                },
                ...{},
              }}
            >
              {/* name="warning" id="1956:51231" type="INSTANCE" */}
              <QodeCustom195650283
                style={{
                  ...{ width: "24px", height: "24px", flexShrink: "0" },
                  ...{},
                }}
                {...{}}
              />
            </div>
          </div>
        </>
      )}
      {/* id="1278:37494" */}
      {`${type}` === `AI` && `${mobile}` === `Default` && (
        <>
          {/* name="type=AI, mobile=Default" id="1278:37494" type="COMPONENT" */}
          <div
            style={{
              ...{
                width: "1280px",
                height: "88px",
                flexShrink: "0",
                borderTop: "1px solid var(--border-border-neutral-50, #6f6f6f)",
                background: "var(--neutral-white, #fff)",
              },
              ...style,
            }}
          >
            {/* name="Frame 37447" id="1278:37495" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "62px",
                  alignItems: "center",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              {/* name="Interviewbtn/Chat" id="1278:37497" type="INSTANCE" */}
              <QodeCustom127837386
                style={{
                  ...{
                    display: "flex",
                    width: "65px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
                {...{
                  option: true,
                  showText: "Chat",
                  state: "on",
                  _style: "Default",
                }}
              />
            </div>
            {/* name="L" id="1331:40090" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  height: "88px",
                  padding: "0px 20px",
                  alignItems: "center",
                  gap: "12px",
                  flexShrink: "0",
                },
                ...{},
              }}
            >
              {/* name="Icon" id="1956:49971" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "40px",
                    height: "40px",
                    padding: "8px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "8px",
                    border:
                      "1px solid var(--border-border-neutral-20, #e3e3e3)",
                    background: "var(--neutral-gray-5, #f8f6f6)",
                  },
                  ...{},
                }}
              >
                {/* name="Vector" id="1956:49972" type="VECTOR" */}
                <QodeSvg195649972
                  style={{
                    ...{
                      width: "19.003px",
                      height: "20.003px",
                      flexShrink: "0",
                      fill: "var(--neutral-gray-70, #656565)",
                    },
                    ...{},
                  }}
                  {...{}}
                />
              </div>
              {/* name="Interviewbtn/Camera" id="1331:40091" type="INSTANCE" */}
              <QodeCustom133139605
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                  },
                  ...{},
                }}
                {...{ option: true, property_1: "on", _style: "simple" }}
              />
              {/* name="Interviewbtn/Microphone" id="1331:40092" type="INSTANCE" */}
              <QodeCustom133139621
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                  },
                  ...{},
                }}
                {...{ option: true, property_1: "on", _style: "simple" }}
              />
            </div>
            {/* name="R" id="1956:52698" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "inline-flex",
                  alignItems: "flex-start",
                  gap: "20px",
                },
                ...{},
              }}
            >
              {/* name="Report" id="1956:52887" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
              >
                {/* name="Icon" id="1956:52888" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "8px",
                      border:
                        "1px solid var(--border-border-neutral-20, #e3e3e3)",
                      background: "var(--neutral-gray-5, #f8f6f6)",
                    },
                    ...{},
                  }}
                >
                  {/* name="triangle-exclamation" id="1956:53003" type="INSTANCE" */}
                  <QodeCustom195652994
                    style={{
                      ...{ width: "24px", height: "24px", flexShrink: "0" },
                      ...{},
                    }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-40, #464646)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    },
                    ...{},
                  }}
                >{`Report`}</span>
              </div>
              {/* name="End" id="1956:52703" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-size-sizexxs-6px, 6px)",
                  },
                  ...{},
                }}
              >
                {/* name="Icon" id="1956:52704" type="FRAME" */}
                <div
                  style={{
                    ...{
                      display: "flex",
                      width: "40px",
                      height: "40px",
                      padding: "8px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      borderRadius: "var(--size-size-sizexs-8px, 8px)",
                      border: "1px solid var(--border-border-red-20, #dc3812)",
                      background: "var(--background-bg-red, #f85631)",
                    },
                    ...{},
                  }}
                >
                  {/* name="phone-hangup" id="1956:52705" type="INSTANCE" */}
                  <QodeCustom127037143
                    style={{
                      ...{ width: "24px", height: "24px", flexShrink: "0" },
                      ...{},
                    }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    ...{
                      color: "var(--text-text-neutral-40, #464646)",
                      textAlign: "center",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-small, 12px)",
                      fontStyle: "normal",
                      fontWeight: "700",
                      lineHeight:
                        "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                    },
                    ...{},
                  }}
                >{`End`}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
