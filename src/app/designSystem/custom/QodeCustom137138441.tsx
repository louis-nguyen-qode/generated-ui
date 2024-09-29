// id="1371:38441"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom137138369 } from "@designSystem/custom/QodeCustom137138369"
import { QodeCustom23316646 } from "@designSystem/custom/QodeCustom23316646"
import { QodeCustom137138372 } from "@designSystem/custom/QodeCustom137138372"
import { QodeCustom137138439 } from "@designSystem/custom/QodeCustom137138439"
import { QodeCustom118640091 } from "@designSystem/custom/QodeCustom118640091"

export interface QodeCustom137138441Props {
  type?:
    | "Confirm (no title)"
    | "Complex"
    | "Info"
    | "Confirm (left)"
    | "Confirm (center)"
}

export const QodeCustom137138441: React.FC<
  QodeCustom137138441Props & { style?: CSSProperties }
> = ({ type = "Confirm (left)", style, ...rest }) => {
  return (
    <>
      {/* name="Modal" id="1371:38441" type="COMPONENT_SET" */}
      {/* id="1371:38442" */}
      {`${type}` === `Confirm (left)` && (
        <>
          {/* name="Type=Confirm (left)" id="1371:38442" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "500px",
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
            {/* name="PopUp" id="1371:38447" type="FRAME" */}
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
            {/* name="Modal/Action" id="1371:38450" type="INSTANCE" */}
            <QodeCustom137138369
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
      {/* id="1371:38443" */}
      {`${type}` === `Complex` && (
        <>
          {/* name="Type=Complex" id="1371:38443" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "600px",
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
            {/* name="Modal/Header" id="1371:38451" type="INSTANCE" */}
            <QodeCustom23316646
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
            {/* name="PopUp" id="1371:38452" type="FRAME" */}
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
            {/* name="Modal/Action" id="1371:38454" type="INSTANCE" */}
            <QodeCustom137138369
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
      {/* id="1371:38444" */}
      {`${type}` === `Confirm (no title)` && (
        <>
          {/* name="Type=Confirm (no title)" id="1371:38444" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "500px",
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
            {/* name="PopUp" id="1371:38455" type="FRAME" */}
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
            {/* name="Modal/Action" id="1371:38457" type="INSTANCE" */}
            <QodeCustom137138369
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
      {/* id="1371:38445" */}
      {`${type}` === `Confirm (center)` && (
        <>
          {/* name="Type=Confirm (center)" id="1371:38445" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "500px",
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
            {/* name="PopUp" id="1371:38458" type="FRAME" */}
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
            {/* name="Modal/Action" id="1371:38461" type="INSTANCE" */}
            <QodeCustom137138372
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
      {/* id="1371:38446" */}
      {`${type}` === `Info` && (
        <>
          {/* name="Type=Info" id="1371:38446" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "500px",
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
            {/* name="PopUp" id="1371:38462" type="FRAME" */}
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
              {/* name="Symbol" id="1371:38463" type="FRAME" */}
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
                {/* name="icons" id="1371:38464" type="INSTANCE" */}
                <QodeCustom137138439
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
              {/* name="Button" id="1371:38465" type="INSTANCE" */}
              <QodeCustom118640091
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
            {/* name="Modal/Action" id="1371:38467" type="INSTANCE" */}
            <QodeCustom137138372
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
