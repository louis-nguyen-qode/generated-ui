// id="113:6232"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom228149316 } from "@designSystem/custom/QodeCustom228149316"
import { QodeCustom228149015 } from "@designSystem/custom/QodeCustom228149015"

export interface QodeCustom1136232Props {
  showRight?: boolean
  property_1?: "Default" | "Variant2" | "Variant3"
}

export const QodeCustom1136232: React.FC<
  QodeCustom1136232Props & { style?: CSSProperties }
> = ({ showRight = false, property_1 = "Default", style, ...rest }) => {
  return (
    <>
      {/* name="Screen header" id="113:6232" type="COMPONENT_SET" */}
      {/* id="113:6231" */}
      {`${property_1}` === `Default` && (
        <>
          {/* name="Property 1=Default" id="113:6231" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1116px",
                height: "42px",
                maxWidth: "1276px",
                paddingRight: "521px",
                alignItems: "center",
                gap: "488px",
                flexShrink: "0",
                borderRadius:
                  "0px 0px var(--border-radius-large, 12px) var(--border-radius-large, 12px)",
              },
              ...style,
            }}
          >
            {/* name="Title" id="113:6225" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "42px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                },
                ...{},
              }}
            >
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-30, #656565)",
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
              >{`Subheading`}</span>
              <span
                style={{
                  ...{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-40, #464646)",
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
              >{`Heading`}</span>
            </div>
            {/* name="Button" id="113:6228" type="INSTANCE" */}
            <QodeCustom228149316
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Source new job",
                iconLeft: true,
                type: "default",
                size: "default",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="113:6241" */}
      {`${property_1}` === `Variant2` && (
        <>
          {/* name="Property 1=Variant2" id="113:6241" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1116px",
                height: "42px",
                maxWidth: "1276px",
                padding: "5px 520px 5px 0px",
                alignItems: "center",
                gap: "489px",
                flexShrink: "0",
                borderRadius:
                  "0px 0px var(--border-radius-large, 12px) var(--border-radius-large, 12px)",
              },
              ...style,
            }}
          >
            <span
              style={{
                ...{
                  color: "var(--text-text-neutral-40, #464646)",
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
            >{`Heading`}</span>
            {/* name="Button" id="113:6245" type="INSTANCE" */}
            <QodeCustom228149316
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Source new job",
                iconLeft: true,
                type: "default",
                size: "default",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
            {/* name="Button" id="292:18545" type="INSTANCE" */}
            <QodeCustom228149316
              style={{
                ...{
                  display: "flex",
                  width: "32px",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  flexShrink: "0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                },
                ...{},
              }}
              {...{
                buttonname: "Source new job",
                iconLeft: true,
                type: "default",
                size: "default",
                state: "default",
                content: "icon",
                danger: false,
                ghost: false,
              }}
            />
          </div>
        </>
      )}
      {/* id="292:18900" */}
      {`${property_1}` === `Variant3` && (
        <>
          {/* name="Property 1=Variant3" id="292:18900" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "1116px",
                height: "42px",
                maxWidth: "1276px",
                justifyContent: "center",
                alignItems: "center",
                gap: "926px",
                flexShrink: "0",
                borderRadius:
                  "0px 0px var(--border-radius-large, 12px) var(--border-radius-large, 12px)",
              },
              ...style,
            }}
          >
            {/* name="Frame 37336" id="292:18911" type="FRAME" */}
            <div
              style={{
                ...{ display: "flex", alignItems: "center", gap: "12px" },
                ...{},
              }}
            >
              {/* name="Button" id="292:18902" type="INSTANCE" */}
              <QodeCustom228149316
                style={{
                  ...{
                    display: "flex",
                    width: "32px",
                    height: "var(--size-height-controlheight, 32px)",
                    padding:
                      "var(--size-padding-paddingxxs, 4px) var(--size-padding-paddingxs, 8px)",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "var(--size-padding-paddingxs, 8px)",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Source new job",
                  iconLeft: true,
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "icon",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Title" id="292:18908" type="FRAME" */}
              <div
                style={{
                  ...{
                    display: "flex",
                    height: "42px",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                  ...{},
                }}
              >
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
                >{`Subheading`}</span>
                <span
                  style={{
                    ...{
                      alignSelf: "stretch",
                      color: "var(--text-text-neutral-50, #1d1d1d)",
                      fontFamily: 'var(--family-family, "sf pro display")',
                      fontSize: "var(--size-heading6, 16px)",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight:
                        "var(--lineheight-lineheight-h6, 22px) /* 137.5% */",
                    },
                    ...{},
                  }}
                >{`Heading`}</span>
              </div>
            </div>
            {/* name="Button" id="292:18912" type="INSTANCE" */}
            <QodeCustom228149015
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
                },
                ...{},
              }}
              {...{
                buttonname: "Button",
                type: "primary",
                size: "default",
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
