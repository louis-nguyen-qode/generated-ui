// id="607:41108"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"

export interface QodeCustom60741108Props {
  buttons?: "1" | "3" | "2 filled" | "2"
}

export const QodeCustom60741108: React.FC<
  QodeCustom60741108Props & { style?: CSSProperties }
> = ({ buttons = "3", ...rest }) => {
  return (
    <>
      {/* name="Modal/Action" id="607:41108" type="COMPONENT_SET" */}
      {/* id="607:41109" */}
      {`${buttons}` === `3` && (
        <>
          {/* name="Buttons=3" id="607:41109" type="COMPONENT" */}
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
            {/* name="Button" id="607:41113" type="INSTANCE" */}
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
                onlyIcon: <Icon.QodeMagnifyingGlass />,
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                selectIconLeft: <Icon.QodeIcons />,
                buttonname: "Button",
                type: "link",
                size: "default",
                state: "default",
                content: "default",
                danger: false,
                ghost: true,
              }}
            />
            {/* name="Wrap" id="607:41114" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "32px",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {/* name="Button" id="607:41115" type="INSTANCE" */}
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
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  selectIconLeft: <Icon.QodeIcons />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="607:41116" type="INSTANCE" */}
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
                  selectIconLeft: <Icon.QodeIcons />,
                  buttonname: "Button",
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
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
      {/* id="607:41110" */}
      {`${buttons}` === `2 filled` && (
        <>
          {/* name="Buttons=2 filled" id="607:41110" type="COMPONENT" */}
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
            {/* name="Wrap" id="607:41117" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "32px",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Button" id="607:41118" type="INSTANCE" */}
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
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  selectIconLeft: <Icon.QodeIcons />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="607:41119" type="INSTANCE" */}
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
                  selectIconLeft: <Icon.QodeIcons />,
                  buttonname: "Button",
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
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
      {/* id="607:41111" */}
      {`${buttons}` === `2` && (
        <>
          {/* name="Buttons=2" id="607:41111" type="COMPONENT" */}
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
            {/* name="Wrap" id="607:41120" type="FRAME" */}
            <div
              style={{
                display: "flex",
                height: "32px",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {/* name="Button" id="607:41121" type="INSTANCE" */}
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
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  selectIconLeft: <Icon.QodeIcons />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="607:41122" type="INSTANCE" */}
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
                  selectIconLeft: <Icon.QodeIcons />,
                  buttonname: "Button",
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
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
      {/* id="607:41112" */}
      {`${buttons}` === `1` && (
        <>
          {/* name="Buttons=1" id="607:41112" type="COMPONENT" */}
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
            {/* name="Button" id="607:41123" type="INSTANCE" */}
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
                selectIconLeft: <Icon.QodeIcons />,
                buttonname: "Button",
                selectIconRight: <Icon.QodeMagnifyingGlass />,
                onlyIcon: <Icon.QodeMagnifyingGlass />,
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
