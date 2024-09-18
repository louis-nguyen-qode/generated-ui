// id="3432:2648"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom34322690 } from "@designSystem/custom/QodeCustom34322690"
import { QodeCustom565626440 } from "@designSystem/custom/QodeCustom565626440"
import { QodeCustom34322695 } from "@designSystem/custom/QodeCustom34322695"
import { QodeCustom63010804 } from "@designSystem/custom/QodeCustom63010804"
import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom34322648Props {
  type?:
    | "Confirm (no title)"
    | "Complex"
    | "Info"
    | "Confirm (left)"
    | "Confirm (center)"
}

export const QodeCustom34322648: React.FC<
  QodeCustom34322648Props & { style?: CSSProperties }
> = ({ type = "Confirm (left)", style, ...rest }) => {
  return (
    <>
      {/* name="Modal" id="3432:2648" type="COMPONENT_SET" */}
      {/* id="3432:2649" */}
      {`${type}` === `Confirm (left)` && (
        <>
          {/* name="Type=Confirm (left)" id="3432:2649" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="PopUp" id="3432:2650" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "20px 20px 40px 20px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  },
                  ...{},
                }}
              >{`Confirmation modal (left)`}</span>
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
              >{`Detach to add slot component`}</span>
            </div>
            {/* name="Modal/Action" id="5724:273" type="INSTANCE" */}
            <QodeCustom34322690
              style={{
                ...{
                  display: "flex",
                  height: "56px",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-paddingsm, 20px) var(--size-padding-paddingsm, 12px) var(--size-padding-paddingsm, 12px)",
                  alignItems: "flex-start",
                  gap: "231px",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--background-bg-neutral-5, #f8f6f6)",
                },
                ...{},
              }}
              {...{ buttons: "3" }}
            />
          </div>
        </>
      )}
      {/* id="3432:2658" */}
      {`${type}` === `Complex` && (
        <>
          {/* name="Type=Complex" id="3432:2658" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="Modal/Header" id="5656:26442" type="INSTANCE" */}
            <QodeCustom565626440
              style={{
                ...{
                  display: "flex",
                  height: "52px",
                  padding: "12px 20px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: "16px",
                  alignSelf: "stretch",
                  borderBottom:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                },
                ...{},
              }}
              {...{ size: "lg" }}
            />
            {/* name="PopUp" id="3432:2660" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "20px 20px 40px 20px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
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
              >{`Detach to modify child components`}</span>
            </div>
            {/* name="Modal/Action" id="5724:293" type="INSTANCE" */}
            <QodeCustom34322690
              style={{
                ...{
                  display: "flex",
                  height: "56px",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-paddingsm, 20px) var(--size-padding-paddingsm, 12px) var(--size-padding-paddingsm, 12px)",
                  alignItems: "flex-start",
                  gap: "331px",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--background-bg-neutral-5, #f8f6f6)",
                },
                ...{},
              }}
              {...{ buttons: "3" }}
            />
          </div>
        </>
      )}
      {/* id="3432:2667" */}
      {`${type}` === `Confirm (no title)` && (
        <>
          {/* name="Type=Confirm (no title)" id="3432:2667" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="PopUp" id="3432:2668" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "20px 20px 40px 20px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: '"SF Pro Display"',
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Are you sure you want to ...?`}</span>
            </div>
            {/* name="Modal/Action" id="5724:253" type="INSTANCE" */}
            <QodeCustom34322690
              style={{
                ...{
                  display: "flex",
                  height: "56px",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-paddingsm, 20px) var(--size-padding-paddingsm, 12px) var(--size-padding-paddingsm, 12px)",
                  alignItems: "flex-start",
                  gap: "231px",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--background-bg-neutral-5, #f8f6f6)",
                },
                ...{},
              }}
              {...{ buttons: "3" }}
            />
          </div>
        </>
      )}
      {/* id="3432:2675" */}
      {`${type}` === `Confirm (center)` && (
        <>
          {/* name="Type=Confirm (center)" id="3432:2675" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="PopUp" id="3432:2676" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "20px 20px 40px 20px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
            >
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
              >{`Confirmation modal (centered)`}</span>
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
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
              >{`Description`}</span>
            </div>
            {/* name="Modal/Action" id="5724:313" type="INSTANCE" */}
            <QodeCustom34322695
              style={{
                ...{
                  display: "flex",
                  height: "56px",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-paddingsm, 0px)",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--background-bg-neutral-5, #f8f6f6)",
                },
                ...{},
              }}
              {...{ buttons: "1" }}
            />
          </div>
        </>
      )}
      {/* id="3432:2681" */}
      {`${type}` === `Info` && (
        <>
          {/* name="Type=Info" id="3432:2681" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                
                flexDirection: "column",
                alignItems: "flex-start",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--background-bg-white, #fff)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
              },
              ...style,
            }}
          >
            {/* name="PopUp" id="3432:2682" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  padding: "20px 20px 40px 20px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "20px",
                  alignSelf: "stretch",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
            >
              {/* name="Symbol" id="3432:2683" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    height: "24px",
                    padding: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "var(--style-radius-borderradius, 8px)",
                    background:
                      "var(--color-neutral-background-controlitembgactive, #f8fcff)",
                  },
                  ...{},
                }}
              >
                {/* name="icons" id="3432:2684" type="INSTANCE" */}
                <QodeCustom63010804
                  style={{
                    ...{
                      display: "flex",
                      padding: "1.5px 1.498px 1.5px 1.5px",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "1 0 0",
                      alignSelf: "stretch",
                    },
                    ...{},
                  }}
                  {...{}}
                />
              </div>
              {/* name="Button" id="3432:2685" type="INSTANCE" */}
              <QodeButton
                style={{
                  ...{
                    display: "flex",
                    width: "24px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Edit",
                  iconLeft: true,
                  type: "link",
                  size: "small",
                  state: "default",
                  content: "icon",
                  danger: false,
                  ghost: false,
                }}
              />
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: '"SF Pro Display"',
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px /* 150% */",
                  },
                  ...{},
                }}
              >{`Information`}</span>
            </div>
            {/* name="Modal/Action" id="5724:320" type="INSTANCE" */}
            <QodeCustom34322695
              style={{
                ...{
                  display: "flex",
                  height: "56px",
                  padding:
                    "var(--size-padding-paddingsm, 12px) var(--size-padding-paddingsm, 0px)",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderTop:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                  background: "var(--background-bg-neutral-5, #f8f6f6)",
                },
                ...{},
              }}
              {...{ buttons: "1" }}
            />
          </div>
        </>
      )}
    </>
  )
}
