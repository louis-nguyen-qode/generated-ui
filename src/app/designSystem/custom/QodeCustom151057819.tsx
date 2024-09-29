// id="1510:57819"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom151055613 } from "@designSystem/custom/QodeCustom151055613"
import { QodeCustom151055460 } from "@designSystem/custom/QodeCustom151055460"
import { QodeCustom151055459 } from "@designSystem/custom/QodeCustom151055459"

export interface QodeCustom151057819Props {
  buttons?: "1" | "3" | "2 filled" | "2"
}

export const QodeCustom151057819: React.FC<
  QodeCustom151057819Props & { style?: CSSProperties }
> = ({ buttons = "3", style, ...rest }) => {
  return (
    <>
      {/* name="Modal/Action" id="1510:57819" type="COMPONENT_SET" */}
      {/* id="1510:57820" */}
      {`${buttons}` === `3` && (
        <>
          {/* name="Buttons=3" id="1510:57820" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "504px",
                height: "56px",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-paddingsm, 20px) var(--size-padding-paddingsm, 12px) var(--size-padding-paddingsm, 12px)",
                alignItems: "flex-start",
                gap: "235px",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Button" id="1510:57824" type="INSTANCE" */}
            <QodeCustom151055613
              style={{
                ...{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding:
                    "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                },
                ...{},
              }}
              {...{
                buttonname: "Button",
                type: "link",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: true,
              }}
            />
            {/* name="Wrap" id="1510:57825" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "32px",
                  alignItems: "center",
                  gap: "12px",
                },
                ...{},
              }}
            >
              {/* name="Button" id="1510:57826" type="INSTANCE" */}
              <QodeCustom151055460
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Button",
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="1510:57827" type="INSTANCE" */}
              <QodeCustom151055459
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
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
          </div>
        </>
      )}
      {/* id="1510:57821" */}
      {`${buttons}` === `2 filled` && (
        <>
          {/* name="Buttons=2 filled" id="1510:57821" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "504px",
                padding: "12px 20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "10px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="1510:57828" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "32px",
                  alignItems: "center",
                  gap: "12px",
                  alignSelf: "stretch",
                },
                ...{},
              }}
            >
              {/* name="Button" id="1510:57829" type="INSTANCE" */}
              <QodeCustom151055460
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    flex: "1 0 0",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Button",
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="1510:57830" type="INSTANCE" */}
              <QodeCustom151055459
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    flex: "1 0 0",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
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
          </div>
        </>
      )}
      {/* id="1510:57822" */}
      {`${buttons}` === `2` && (
        <>
          {/* name="Buttons=2" id="1510:57822" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "504px",
                padding: "var(--size-padding-paddingsm, 12px) 20px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                gap: "10px",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Wrap" id="1510:57831" type="FRAME" */}
            <div
              style={{
                ...{
                  display: "flex",
                  height: "32px",
                  alignItems: "center",
                  gap: "12px",
                },
                ...{},
              }}
            >
              {/* name="Button" id="1510:57832" type="INSTANCE" */}
              <QodeCustom151055460
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-neutral-40, #bfbfbf)",
                    background: "var(--background-bg-white, #fff)",
                  },
                  ...{},
                }}
                {...{
                  buttonname: "Button",
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="1510:57833" type="INSTANCE" */}
              <QodeCustom151055459
                style={{
                  ...{
                    display: "flex",
                    height: "var(--size-height-controlheight, 32px)",
                    padding: "4px 16px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    borderRadius: "var(--border-radius-rounded, 999px)",
                    border:
                      "1px solid var(--border-border-primary-30, #107ecc)",
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
          </div>
        </>
      )}
      {/* id="1510:57823" */}
      {`${buttons}` === `1` && (
        <>
          {/* name="Buttons=1" id="1510:57823" type="COMPONENT" */}
          <div
            style={{
              ...{
                display: "flex",
                width: "504px",
                height: "56px",
                padding:
                  "var(--size-padding-paddingsm, 12px) var(--size-padding-paddingsm, 0px)",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              },
              ...style,
            }}
          >
            {/* name="Button" id="1510:57834" type="INSTANCE" */}
            <QodeCustom151055459
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
