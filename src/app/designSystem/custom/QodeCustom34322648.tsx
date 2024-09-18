// id="3432:2648"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeButton } from "@designSystem/ant/QodeButton"
import QodeSvgI565626442565626418 from "@designSystem/icon/svg/QodeSvgI565626442565626418"

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
> = ({ type = "Confirm (left)", ...rest }) => {
  return (
    <>
      {/* name="Modal" id="3432:2648" type="COMPONENT_SET" */}
      {/* id="3432:2649" */}
      {`${type}` === `Confirm (left)` && (
        <>
          {/* name="Type=Confirm (left)" id="3432:2649" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "500px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--background-bg-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="PopUp" id="3432:2650" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px 20px 40px 20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                alignSelf: "stretch",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-size-sizemd-20px, 20px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Confirmation modal (left)`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Detach to add slot component`}</span>
            </div>
            {/* name="Modal/Action" id="5724:273" type="INSTANCE" */}
            <Flex
              style={{
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
              }}
            >
              {/* name="Button" id="I5724:273;5740:1206" type="INSTANCE" */}
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
                  iconLeft: false,
                  iconRight: false,
                  buttonname: "Button",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: true,
                }}
              />
              {/* name="Wrap" id="I5724:273;3432:2692" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {/* name="Button" id="I5724:273;3432:2693" type="INSTANCE" */}
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
                    iconLeft: false,
                    buttonname: "Button",
                    iconRight: false,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="I5724:273;3432:2694" type="INSTANCE" */}
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
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{
                    buttonname: "Button",
                    iconRight: false,
                    iconLeft: false,
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </Flex>
          </div>
        </>
      )}
      {/* id="3432:2658" */}
      {`${type}` === `Complex` && (
        <>
          {/* name="Type=Complex" id="3432:2658" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "600px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--background-bg-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Modal/Header" id="5656:26442" type="INSTANCE" */}
            <Flex
              style={{
                display: "flex",
                height: "52px",
                padding: "12px 20px",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "16px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
              }}
            >
              {/* name="content" id="I5656:26442;5656:26415" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  flex: "1 0 0",
                }}
              >
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-size-sizemd-20px, 20px)",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight:
                      "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                  }}
                >{`Complex modal`}</span>
              </div>
              {/* name="xmark" id="I5656:26442;5656:26418" type="INSTANCE" */}
              <QodeSvgI565626442565626418
                style={{ width: "24px", height: "24px" }}
                {...{}}
              />
            </Flex>
            {/* name="PopUp" id="3432:2660" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px 20px 40px 20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                alignSelf: "stretch",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              <span
                style={{
                  color: "var(--text-text-neutral-40, #464646)",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Detach to modify child components`}</span>
            </div>
            {/* name="Modal/Action" id="5724:293" type="INSTANCE" */}
            <Flex
              style={{
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
              }}
            >
              {/* name="Button" id="I5724:293;5740:1206" type="INSTANCE" */}
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
                  iconLeft: false,
                  iconRight: false,
                  buttonname: "Button",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: true,
                }}
              />
              {/* name="Wrap" id="I5724:293;3432:2692" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {/* name="Button" id="I5724:293;3432:2693" type="INSTANCE" */}
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
                    iconLeft: false,
                    buttonname: "Button",
                    iconRight: false,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="I5724:293;3432:2694" type="INSTANCE" */}
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
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{
                    buttonname: "Button",
                    iconRight: false,
                    iconLeft: false,
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </Flex>
          </div>
        </>
      )}
      {/* id="3432:2667" */}
      {`${type}` === `Confirm (no title)` && (
        <>
          {/* name="Type=Confirm (no title)" id="3432:2667" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "500px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--background-bg-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="PopUp" id="3432:2668" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px 20px 40px 20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                alignSelf: "stretch",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Are you sure you want to ...?`}</span>
            </div>
            {/* name="Modal/Action" id="5724:253" type="INSTANCE" */}
            <Flex
              style={{
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
              }}
            >
              {/* name="Button" id="I5724:253;5740:1206" type="INSTANCE" */}
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
                  iconLeft: false,
                  iconRight: false,
                  buttonname: "Button",
                  type: "link",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: true,
                }}
              />
              {/* name="Wrap" id="I5724:253;3432:2692" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  height: "var(--line-height-lineheighheading3, 32px)",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {/* name="Button" id="I5724:253;3432:2693" type="INSTANCE" */}
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
                    iconLeft: false,
                    buttonname: "Button",
                    iconRight: false,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="I5724:253;3432:2694" type="INSTANCE" */}
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
                      "1px solid var(--border-border-primary-30, #107ecc)",
                    background: "var(--background-bg-primary, #1597f4)",
                  }}
                  {...{
                    buttonname: "Button",
                    iconRight: false,
                    iconLeft: false,
                    type: "primary",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
              </div>
            </Flex>
          </div>
        </>
      )}
      {/* id="3432:2675" */}
      {`${type}` === `Confirm (center)` && (
        <>
          {/* name="Type=Confirm (center)" id="3432:2675" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "500px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--background-bg-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="PopUp" id="3432:2676" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px 20px 40px 20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                alignSelf: "stretch",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-size-sizemd-20px, 20px)",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight:
                    "var(--lineheight-lineheight-xl, 28px) /* 140% */",
                }}
              >{`Confirmation modal (centered)`}</span>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-base, 14px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                }}
              >{`Description`}</span>
            </div>
            {/* name="Modal/Action" id="5724:313" type="INSTANCE" */}
            <Flex
              style={{
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
              }}
            >
              {/* name="Button" id="I5724:313;3432:2696" type="INSTANCE" */}
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
                  iconRight: false,
                  iconLeft: false,
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </Flex>
          </div>
        </>
      )}
      {/* id="3432:2681" */}
      {`${type}` === `Info` && (
        <>
          {/* name="Type=Info" id="3432:2681" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "500px",
              flexDirection: "column",
              alignItems: "flex-start",
              borderRadius: "var(--style-radius-borderradius, 8px)",
              background: "var(--background-bg-white, #fff)",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="PopUp" id="3432:2682" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "20px 20px 40px 20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                alignSelf: "stretch",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Symbol" id="3432:2683" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  width: "24px",
                  height: "24px",
                  padding: "3px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "var(--style-radius-borderradius, 8px)",
                  background:
                    "var(--color-neutral-background-controlitembgactive, #f8fcff)",
                }}
              >
                {/* name="icons" id="3432:2684" type="INSTANCE" */}
                <Flex
                  style={{
                    display: "flex",
                    padding: "1.5px 1.498px 1.5px 1.5px",
                    justifyContent: "center",
                    alignItems: "center",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  }}
                >
                  {/* name="Vector" id="I3432:2684;630:10668" type="VECTOR" */}
                  <Flex
                    style={{
                      width: "15.002px",
                      height: "15px",
                      fill: "var(--color-primary-colorprimarytext, #1597f4)",
                    }}
                  >
                    {/* name="Vector" id=I3432:2684;630:10668 type=VECTOR */}
                    <></>
                  </Flex>
                </Flex>
              </div>
              {/* name="Button" id="3432:2685" type="INSTANCE" */}
              <QodeButton
                style={{
                  display: "flex",
                  width: "24px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  borderRadius: "var(--border-radius-rounded, 999px)",
                }}
                {...{
                  buttonname: "Edit",
                  iconRight: false,
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
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px /* 150% */",
                }}
              >{`Information`}</span>
            </div>
            {/* name="Modal/Action" id="5724:320" type="INSTANCE" */}
            <Flex
              style={{
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
              }}
            >
              {/* name="Button" id="I5724:320;3432:2696" type="INSTANCE" */}
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
                  iconRight: false,
                  iconLeft: false,
                  type: "primary",
                  size: "default",
                  state: "default",
                  content: "default",
                  danger: false,
                  ghost: false,
                }}
              />
            </Flex>
          </div>
        </>
      )}
    </>
  )
}
