// id="3432:2689"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom34322689Props {
  buttons?: "1" | "3" | "2 filled" | "2"
}

export const QodeCustom34322689: React.FC<
  QodeCustom34322689Props & { style?: CSSProperties }
> = ({ buttons = "3", ...rest }) => {
  return (
    <>
      {/* name="Modal/Action" id="3432:2689" type="COMPONENT_SET" */}
      {/* id="3432:2690" */}
      {`${buttons}` === `3` && (
        <>
          {/* name="Buttons=3" id="3432:2690" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            {/* name="Button" id="5740:1206" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding:
                  "var(--size-padding-paddingxxs, 4px) var(--size-padding-padding, 16px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                borderRadius: "var(--border-radius-rounded, 999px)",
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
            {/* name="Wrap" id="3432:2692" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--line-height-lineheighheading3, 32px)",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {/* name="Button" id="3432:2693" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
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
              {/* name="Button" id="3432:2694" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
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
      {/* id="5724:327" */}
      {`${buttons}` === `2 filled` && (
        <>
          {/* name="Buttons=2 filled" id="5724:327" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "504px",
              padding: "12px 20px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
              borderTop:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              background: "var(--background-bg-neutral-5, #f8f6f6)",
            }}
          >
            {/* name="Wrap" id="5724:329" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--line-height-lineheighheading3, 32px)",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Button" id="5724:330" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
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
              {/* name="Button" id="5724:331" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  flex: "1 0 0",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
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
      {/* id="5724:347" */}
      {`${buttons}` === `2` && (
        <>
          {/* name="Buttons=2" id="5724:347" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            {/* name="Wrap" id="5724:348" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "var(--line-height-lineheighheading3, 32px)",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {/* name="Button" id="5724:349" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
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
              {/* name="Button" id="5724:350" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "4px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border: "1px solid var(--border-border-primary-30, #107ecc)",
                  background: "var(--background-bg-primary, #1597f4)",
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
      {/* id="3432:2695" */}
      {`${buttons}` === `1` && (
        <>
          {/* name="Buttons=1" id="3432:2695" type="COMPONENT" */}
          <div
            style={{
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
            }}
          >
            {/* name="Button" id="3432:2696" type="INSTANCE" */}
            <QodeButton
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "4px 16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                borderRadius: "var(--border-radius-rounded, 999px)",
                border: "1px solid var(--border-border-primary-30, #107ecc)",
                background: "var(--background-bg-primary, #1597f4)",
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
