// id="411:20352"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeSelect } from "@designSystem/ant/QodeSelect"

export interface QodeCustom41120352Props {
  column?: "Text"
}

export const QodeCustom41120352: React.FC<
  QodeCustom41120352Props & { style?: CSSProperties }
> = ({ column = "Text", ...rest }) => {
  return (
    <>
      {/* name="ThoSelect" id="411:20352" type="COMPONENT_SET" */}
      {/* id="411:20353" */}
      {`${column}` === `Text` && (
        <>
          {/* name="column=Text" id="411:20353" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "320px",
              padding: "12px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              borderRadius: "var(--border-radius-base, 8px)",
              background: "var(--neutral-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Frame 37372" id="440:42238" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                  textDecorationLine: "underline",
                }}
              >{`3 items selected`}</span>
              {/* name="Button" id="440:42240" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheightsm, 24px)",
                  padding: "4px 8px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
                  background: "var(--background-bg-white, #fff)",
                }}
                {...{
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  iconRight: false,
                  buttonname: "Clear",
                  selectIconLeft: <Icon.QodeIcons />,
                  iconLeft: false,
                  type: "default",
                  size: "small",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </div>
            {/* name="Search bar" id="411:21157" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "var(--size-height-controlheight, 32px)",
                padding: "10px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                alignSelf: "stretch",
                borderRadius: "var(--border-radius-base, 8px)",
                border:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="🎰 icon left" id="I411:21157;2720:38013" type="INSTANCE" */}
              <Icon.QodeMagnifyingGlass
                style={{ width: "16px", height: "16px" }}
                {...{}}
              />
              <span
                style={{
                  color: "var(--color-neutral-text-colortext, #000)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`PRE`}</span>
              <span
                style={{
                  flex: "1 0 0",
                  color: "var(--text-text-placeholder, #a7a7a7)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Input`}</span>
              <span
                style={{
                  color:
                    "var(--color-neutral-text-colortextdescription, rgba(0, 0, 0, 0.65))",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`SUF`}</span>
              {/* name="🎰 icon right" id="I411:21157;2720:38017" type="INSTANCE" */}
              <Icon.QodeUser
                style={{
                  display: "flex",
                  width: "16px",
                  height: "16px",
                  padding: "1.6px 2.4px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...{}}
              />
            </Flex>
            {/* name="list" id="411:20355" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "4px",
                alignSelf: "stretch",
              }}
            >
              {/* name="🧬 item 1" id="411:21129" type="INSTANCE" */}
              <QodeSelect
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{ title: "Select menu item", state: "selected multiple" }}
              />
              {/* name="🧬 item 2" id="411:21132" type="INSTANCE" */}
              <QodeSelect
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
                {...{ title: "Select menu item", state: "default" }}
              />
              {/* name="🧬 item 8" id="411:21201" type="INSTANCE" */}
              <QodeSelect
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{ title: "Select menu item", state: "selected multiple" }}
              />
              {/* name="🧬 item 9" id="411:21206" type="INSTANCE" */}
              <QodeSelect
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background: "var(--primary-primary-10, #d6eeff)",
                }}
                {...{ title: "Select menu item", state: "selected multiple" }}
              />
              {/* name="🧬 item 7" id="411:21147" type="INSTANCE" */}
              <QodeSelect
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
                {...{ title: "Select menu item", state: "default" }}
              />
              {/* name="🧬 item 3" id="411:21135" type="INSTANCE" */}
              <QodeSelect
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
                {...{ title: "Select menu item", state: "default" }}
              />
              {/* name="🧬 item 5" id="411:21141" type="INSTANCE" */}
              <QodeSelect
                style={{
                  display: "flex",
                  height: "var(--size-height-controlheight, 32px)",
                  padding: "0px var(--size-padding-paddingsm, 12px)",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                }}
                {...{ title: "Select menu item", state: "default" }}
              />
            </div>
            {/* name="Line 14" id="411:23237" type="LINE" */}
            <Flex
              style={{
                width: "296px",
                height: "1px",
                background: "var(--neutral-gray-10, #e3e3e3)",
              }}
            >
              {/* name="Line 14" id=411:23237 type=LINE */}
              <></>
            </Flex>
            {/* name="Buttons" id="411:20367" type="FRAME" */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                alignSelf: "stretch",
              }}
            >
              {/* name="Button" id="411:21177" type="INSTANCE" */}
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
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  iconRight: false,
                  selectIconLeft: <Icon.QodeIcons />,
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  buttonname: "Cancel",
                  iconLeft: false,
                  type: "default",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
              {/* name="Button" id="411:21170" type="INSTANCE" */}
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
                  onlyIcon: <Icon.QodeMagnifyingGlass />,
                  iconLeft: false,
                  iconRight: false,
                  buttonname: "Confirm",
                  selectIconRight: <Icon.QodeMagnifyingGlass />,
                  selectIconLeft: <Icon.QodeIcons />,
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
    </>
  )
}
