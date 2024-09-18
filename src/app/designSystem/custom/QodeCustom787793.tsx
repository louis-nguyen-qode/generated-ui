// id="78:7793"
import React, { CSSProperties } from "react"
import { Flex } from "antd"
import { Icon } from "@designSystem/icon"

import { QodeCustom37821102 } from "@designSystem/custom/QodeCustom37821102"
import { QodeCustom864907 } from "@designSystem/custom/QodeCustom864907"
import { QodeTooltip } from "@designSystem/ant/QodeTooltip"
import QodeSvg865393 from "@designSystem/icon/svg/QodeSvg865393"
import { QodeButton } from "@designSystem/ant/QodeButton"
import { QodeCustom562954 } from "@designSystem/custom/QodeCustom562954"
import { QodeCustom18216941 } from "@designSystem/custom/QodeCustom18216941"
import QodeSvg933813 from "@designSystem/icon/svg/QodeSvg933813"
import QodeSvg943822 from "@designSystem/icon/svg/QodeSvg943822"
import { QodeCustom996876 } from "@designSystem/custom/QodeCustom996876"
import { QodeCustom1028531 } from "@designSystem/custom/QodeCustom1028531"
import { QodeCustom996900 } from "@designSystem/custom/QodeCustom996900"

export interface QodeCustom787793Props {
  state?:
    | "Loading"
    | "Empty"
    | "1"
    | "2"
    | "Chat Linkedin"
    | "5"
    | "3"
    | "4"
    | "6"
  type?: "Email" | "(Not selected)" | "Linkedin"
}

export const QodeCustom787793: React.FC<
  QodeCustom787793Props & { style?: CSSProperties }
> = ({ state = "Loading", type = "(Not selected)", ...rest }) => {
  return (
    <>
      {/* name="Connect" id="78:7793" type="COMPONENT_SET" */}
      {/* id="378:21064" */}
      {`${state}` === `Loading` && `${type}` === `(Not selected)` && (
        <>
          {/* name="State=Loading, Type=(Not selected)" id="378:21064" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "800px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: "0",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "#FFF",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Connect/Header" id="391:31504" type="INSTANCE" */}
            <QodeCustom37821102
              style={{
                display: "flex",
                height: "76px",
                padding: "var(--font-size-base, 14px) 20px",
                alignItems: "center",
                gap: "20px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{ property_1: "Variant2" }}
            />
            {/* name="Body" id="378:21066" type="FRAME" */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "24px",
                flex: "1 0 0",
                alignSelf: "stretch",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              }}
            >
              {/* name="Body" id=378:21066 type=FRAME */}
              <></>
            </div>
          </div>
        </>
      )}
      {/* id="78:7825" */}
      {`${state}` === `Empty` && `${type}` === `(Not selected)` && (
        <>
          {/* name="State=Empty, Type=(Not selected)" id="78:7825" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "#FFF",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Connect/Header" id="86:4909" type="INSTANCE" */}
            <QodeCustom864907
              style={{
                display: "flex",
                height: "76px",
                padding: "var(--font-size-base, 14px) 20px",
                alignItems: "center",
                gap: "20px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{ property_1: "Header" }}
            />
            {/* name="Body" id="78:7836" type="FRAME" */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "10px",
                flex: "1 0 0",
                alignSelf: "stretch",
                background: "var(--background-bg-neutral-5, #f8f6f6)",
              }}
            >
              {/* name="Body" id=78:7836 type=FRAME */}
              <></>
            </div>
            {/* name="Tooltip" id="391:31552" type="INSTANCE" */}
            <QodeTooltip
              style={{
                display: "flex",
                width: "195px",
                padding:
                  "var(--size-size-sizexxs-6px, 6px) var(--size-padding-paddingxs, 8px)",
                justifyContent: "center",
                alignItems: "center",
                gap: "var(--size-padding-paddingxs, 8px)",
                position: "absolute",
                right: "60px",
                top: "72px",
                borderRadius: "var(--style-radius-borderradius, 8px)",
                background: "var(--neutral-gray-95, #383838)",
                boxShadow:
                  "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 3px 6px -4px rgba(0, 0, 0, 0.12)",
              }}
              {...{
                showArrow: true,
                title: "Select a contact type to start a conversation",
                placement: "bottom right",
              }}
            />
          </div>
        </>
      )}
      {/* id="78:7981" */}
      {`${state}` === `2` && `${type}` === `Linkedin` && (
        <>
          {/* name="State=2, Type=Linkedin" id="78:7981" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "#FFF",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Connect/Header" id="86:4971" type="INSTANCE" */}
            <QodeCustom864907
              style={{
                display: "flex",
                height: "76px",
                padding: "var(--font-size-base, 14px) 20px",
                alignItems: "center",
                gap: "20px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{ property_1: "Header" }}
            />
            {/* name="Body" id="78:7992" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "40px 0px",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
                flex: "1 0 0",
                alignSelf: "stretch",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Frame 37312" id="86:5412" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "40px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Illus" id="86:5411" type="FRAME" */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {/* name="Frame 37308" id="86:5371" type="FRAME" */}
                  <div style={{ width: "233px", height: "42px" }}>
                    {/* name="Rectangle 1" id="86:5372" type="RECTANGLE" */}
                    <Flex
                      style={{
                        width: "233px",
                        height: "42px",
                        flexShrink: "0",
                        borderRadius: "var(--border-radius-base, 8px)",
                        border:
                          "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                        background: "#F6F6F6",
                      }}
                    >
                      {/* name="Rectangle 1" id=86:5372 type=RECTANGLE */}
                      <></>
                    </Flex>
                    {/* name="Rectangle 2" id="86:5373" type="RECTANGLE" */}
                    <Flex
                      style={{
                        width: "176px",
                        height: "9px",
                        flexShrink: "0",
                        background: "#D9D9D9",
                      }}
                    >
                      {/* name="Rectangle 2" id=86:5373 type=RECTANGLE */}
                      <></>
                    </Flex>
                    {/* name="Rectangle 3" id="86:5374" type="RECTANGLE" */}
                    <Flex
                      style={{
                        width: "111px",
                        height: "9px",
                        flexShrink: "0",
                        background: "#D9D9D9",
                      }}
                    >
                      {/* name="Rectangle 3" id=86:5374 type=RECTANGLE */}
                      <></>
                    </Flex>
                    {/* name="linkedin" id="86:5408" type="INSTANCE" */}
                    <Icon.QodeLinkedin
                      style={{ width: "24px", height: "24px", flexShrink: "0" }}
                      {...{}}
                    />
                  </div>
                  {/* name="Group" id="86:5393" type="GROUP" */}
                  <QodeSvg865393
                    style={{ width: "86.057px", height: "94.284px" }}
                    {...{}}
                  />
                </div>
                <span
                  style={{
                    alignSelf: "stretch",
                    color: "var(--text-text-neutral-50, #1d1d1d)",
                    textAlign: "center",
                    fontFamily: 'var(--family-family, "sf pro display")',
                    fontSize: "var(--size-large, 16px)",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "24px /* 150% */",
                  }}
                >{`It looks like you're not connected on LinkedIn.
Send a connection request to start the conversation.`}</span>
              </div>
              {/* name="Action" id="86:5128" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                {/* name="Button" id="86:5108" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "154px",
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
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodeUpRightFromSquare />,
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    buttonname: "View profile",
                    iconLeft: true,
                    type: "default",
                    size: "default",
                    state: "default",
                    content: "default",
                    danger: false,
                    ghost: false,
                  }}
                />
                {/* name="Button" id="78:8015" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "154px",
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
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconLeft: true,
                    buttonname: "Send request",
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodeUserPlus />,
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
          </div>
        </>
      )}
      {/* id="78:8062" */}
      {`${state}` === `Chat Linkedin` && `${type}` === `Linkedin` && (
        <>
          {/* name="State=Chat Linkedin, Type=Linkedin" id="78:8062" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "#FFF",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Connect/Header" id="86:5061" type="INSTANCE" */}
            <QodeCustom864907
              style={{
                display: "flex",
                height: "76px",
                padding: "var(--font-size-base, 14px) 20px",
                alignItems: "center",
                gap: "20px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{ property_1: "Header" }}
            />
            {/* name="Chat wrapper" id="78:8150" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "12px 20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                flex: "1 0 0",
                alignSelf: "stretch",
              }}
            >
              {/* name="Thread" id="81:4474" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Frame 37300" id="81:4456" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {/* name="Frame 37301" id="81:4466" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      width: "28px",
                      height: "28px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "8.75px",
                      borderRadius: "874.125px",
                      border:
                        "0.875px solid var(--border-border-neutral-50, #6f6f6f)",
                      background:
                        "url(<path-to-image>) lightgray 50% / cover no-repeat",
                    }}
                  >
                    {/* name="Frame 37301" id=81:4466 type=FRAME */}
                    <></>
                  </div>
                  {/* name="Frame 37302" id="81:4472" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Hung Nhan`}</span>
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`·`}</span>
                    <span
                      style={{
                        color: "var(--text-text-neutral-30, #656565)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-small, 12px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                      }}
                    >{`6:08 PM`}</span>
                  </div>
                </div>
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
                >{`Hi Thai,`}</span>
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
                >{`I’m Hung from Qode. We’re expanding our team and are searching for a talented Senior Software Developer to join us. Your profile impressed us, and your background seems like a great fit for what we’re looking for. I’d love to connect and discuss whether you might be interested in exploring new opportunities with us. Looking forward to the chance to chat!`}</span>
              </div>
              {/* name="Line 9" id="81:4493" type="LINE" */}
              <Flex
                style={{
                  width: "600px",
                  height: "1px",
                  background: "var(--border-border-neutral-20, #e3e3e3)",
                }}
              >
                {/* name="Line 9" id=81:4493 type=LINE */}
                <></>
              </Flex>
              {/* name="Thread" id="81:4475" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Frame 37300" id="81:4476" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  {/* name="avatar" id="81:4483" type="INSTANCE" */}
                  <QodeCustom562954
                    style={{
                      display: "flex",
                      width: "28px",
                      height: "28px",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "var(--font-size-large, 16px)",
                      borderRadius: "388.5px",
                      background:
                        "var(--color-success-colorsuccesshover, #a3c73e)",
                    }}
                    {...{ img: true, type: "Round", state: "Default" }}
                  />
                  {/* name="Frame 37302" id="81:4478" type="FRAME" */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`Nguyen Quoc Thai`}</span>
                    <span
                      style={{
                        color: "var(--text-text-neutral-50, #1d1d1d)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-base, 14px)",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight:
                          "var(--lineheight-lineheight-base, 20px) /* 142.857% */",
                      }}
                    >{`·`}</span>
                    <span
                      style={{
                        color: "var(--text-text-neutral-30, #656565)",
                        fontFamily: 'var(--family-family, "sf pro display")',
                        fontSize: "var(--size-small, 12px)",
                        fontStyle: "normal",
                        fontWeight: "400",
                        lineHeight:
                          "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                      }}
                    >{`Just now`}</span>
                  </div>
                </div>
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
                >{`Hi Hung, thank you for reaching out! Could you please send me the job description so I can get a better understanding of the role and its requirements?`}</span>
              </div>
            </div>
            {/* name="Frame 37296" id="78:8811" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "16px 20px",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "12px",
                alignSelf: "stretch",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              {/* name="Input__Text Area" id="78:8792" type="INSTANCE" */}
              <QodeCustom18216941
                style={{
                  display: "flex",
                  height: "110px",
                  padding:
                    "var(--size-padding-paddingxs, 8px) var(--size-padding-paddingxs, 8px) var(--size-padding-paddinglg, 24px) var(--size-padding-paddingxs, 8px)",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--size-padding-paddingxs, 8px)",
                  alignSelf: "stretch",
                  borderRadius: "var(--border-radius-base, 8px)",
                  border:
                    "var(--style-line-width-linewidth, 1px) solid var(--color-neutral-borders-colorborder, rgba(0, 0, 0, 0.15))",
                  background:
                    "var(--color-neutral-background-colorbgcontainer, #fff)",
                }}
                {...{
                  title: "Write a message...",
                  state: "default",
                  size: "default",
                }}
              />
              {/* name="Frame 37297" id="81:4155" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  alignSelf: "stretch",
                }}
              >
                {/* name="Frame 37298" id="81:4185" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  {/* name="face-smile" id="81:4179" type="INSTANCE" */}
                  <Icon.QodeFaceSmile
                    style={{ width: "24px", height: "24px" }}
                    {...{}}
                  />
                  {/* name="link" id="81:4183" type="INSTANCE" */}
                  <Icon.QodeLink
                    style={{ width: "24px", height: "24px" }}
                    {...{}}
                  />
                </div>
                {/* name="Action" id="81:4186" type="FRAME" */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  {/* name="Button" id="81:4143" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      width: "164px",
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
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      selectIconLeft: <Icon.QodeVideoPlus />,
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      buttonname: "Setup interview",
                      iconLeft: true,
                      type: "default",
                      size: "default",
                      state: "default",
                      content: "default",
                      danger: false,
                      ghost: false,
                    }}
                  />
                  {/* name="Button" id="81:4149" type="INSTANCE" */}
                  <QodeButton
                    style={{
                      display: "flex",
                      width: "164px",
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
                      onlyIcon: <Icon.QodeMagnifyingGlass />,
                      iconLeft: true,
                      buttonname: "Send",
                      selectIconRight: <Icon.QodeMagnifyingGlass />,
                      selectIconLeft: <Icon.QodePaperPlaneTop />,
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
            </div>
          </div>
        </>
      )}
      {/* id="81:5711" */}
      {`${state}` === `Empty` && `${type}` === `Email` && (
        <>
          {/* name="State=Empty, Type=Email" id="81:5711" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "#FFF",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Connect/Header" id="86:5001" type="INSTANCE" */}
            <QodeCustom864907
              style={{
                display: "flex",
                height: "76px",
                padding: "var(--font-size-base, 14px) 20px",
                alignItems: "center",
                gap: "20px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{ property_1: "Header" }}
            />
            {/* name="Body" id="81:5722" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "40px 0px",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
                flex: "1 0 0",
                alignSelf: "stretch",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Illus" id="93:3807" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {/* name="Frame 37308" id="93:3808" type="FRAME" */}
                <div style={{ width: "233px", height: "42px" }}>
                  {/* name="Rectangle 1" id="93:3809" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "233px",
                      height: "42px",
                      flexShrink: "0",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "#F6F6F6",
                    }}
                  >
                    {/* name="Rectangle 1" id=93:3809 type=RECTANGLE */}
                    <></>
                  </Flex>
                  {/* name="Rectangle 2" id="93:3810" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "176px",
                      height: "9px",
                      flexShrink: "0",
                      background: "#D9D9D9",
                    }}
                  >
                    {/* name="Rectangle 2" id=93:3810 type=RECTANGLE */}
                    <></>
                  </Flex>
                  {/* name="Rectangle 3" id="93:3811" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "111px",
                      height: "9px",
                      flexShrink: "0",
                      background: "#D9D9D9",
                    }}
                  >
                    {/* name="Rectangle 3" id=93:3811 type=RECTANGLE */}
                    <></>
                  </Flex>
                  {/* name="envelope" id="93:3812" type="INSTANCE" */}
                  <Icon.QodeEnvelope
                    style={{ width: "24px", height: "24px", flexShrink: "0" }}
                    {...{}}
                  />
                </div>
                {/* name="Group" id="93:3813" type="GROUP" */}
                <QodeSvg933813
                  style={{ width: "109.325px", height: "93.442px" }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`You haven't started a conversation yet.
Start by sending an email and track your email sequences here.`}</span>
              {/* name="Action" id="93:3830" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                {/* name="Button" id="93:3832" type="INSTANCE" */}
                <QodeButton
                  style={{
                    display: "flex",
                    width: "154px",
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
                    onlyIcon: <Icon.QodeMagnifyingGlass />,
                    iconLeft: true,
                    buttonname: "Compose",
                    selectIconRight: <Icon.QodeMagnifyingGlass />,
                    selectIconLeft: <Icon.QodePenToSquare />,
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
          </div>
        </>
      )}
      {/* id="86:5136" */}
      {`${state}` === `1` && `${type}` === `Email` && (
        <>
          {/* name="State=1, Type=Email" id="86:5136" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "#FFF",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Connect/Header" id="86:5137" type="INSTANCE" */}
            <QodeCustom864907
              style={{
                display: "flex",
                height: "76px",
                padding: "var(--font-size-base, 14px) 20px",
                alignItems: "center",
                gap: "20px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{ property_1: "Header" }}
            />
            {/* name="Body" id="86:5138" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "40px 0px",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
                flex: "1 0 0",
                alignSelf: "stretch",
                background: "var(--background-bg-white, #fff)",
              }}
            >
              {/* name="Illus" id="94:3816" type="FRAME" */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                {/* name="Frame 37308" id="94:3817" type="FRAME" */}
                <div style={{ width: "233px", height: "42px" }}>
                  {/* name="Rectangle 1" id="94:3818" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "233px",
                      height: "42px",
                      flexShrink: "0",
                      borderRadius: "var(--border-radius-base, 8px)",
                      border:
                        "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                      background: "#F6F6F6",
                    }}
                  >
                    {/* name="Rectangle 1" id=94:3818 type=RECTANGLE */}
                    <></>
                  </Flex>
                  {/* name="Rectangle 2" id="94:3819" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "176px",
                      height: "9px",
                      flexShrink: "0",
                      background: "#D9D9D9",
                    }}
                  >
                    {/* name="Rectangle 2" id=94:3819 type=RECTANGLE */}
                    <></>
                  </Flex>
                  {/* name="Rectangle 3" id="94:3820" type="RECTANGLE" */}
                  <Flex
                    style={{
                      width: "111px",
                      height: "9px",
                      flexShrink: "0",
                      background: "#D9D9D9",
                    }}
                  >
                    {/* name="Rectangle 3" id=94:3820 type=RECTANGLE */}
                    <></>
                  </Flex>
                  {/* name="envelope" id="94:3821" type="INSTANCE" */}
                  <Icon.QodeEnvelope
                    style={{ width: "24px", height: "24px", flexShrink: "0" }}
                    {...{}}
                  />
                </div>
                {/* name="Group" id="94:3822" type="GROUP" */}
                <QodeSvg943822
                  style={{ width: "109.325px", height: "93.442px" }}
                  {...{}}
                />
              </div>
              <span
                style={{
                  alignSelf: "stretch",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-large, 16px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px /* 150% */",
                }}
              >{`You haven't started a conversation yet.
Start by sending an email and track your email sequences here.`}</span>
            </div>
            {/* name="Action" id="99:6997" type="INSTANCE" */}
            <QodeCustom996876
              style={{
                display: "flex",
                width: "640px",
                height: "375px",
                padding: "16px 20px",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
              {...{
                showRecepients: true,
                showSubject: true,
                property_1: "Default",
              }}
            />
          </div>
        </>
      )}
      {/* id="81:5557" */}
      {`${state}` === `2` && `${type}` === `Email` && (
        <>
          {/* name="State=2, Type=Email" id="81:5557" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "#FFF",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Connect/Header" id="86:5031" type="INSTANCE" */}
            <QodeCustom864907
              style={{
                display: "flex",
                height: "76px",
                padding: "var(--font-size-base, 14px) 20px",
                alignItems: "center",
                gap: "20px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{ property_1: "Header" }}
            />
            {/* name="Subject" id="233:24223" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "8px 0px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Senior Software Engineer opportunity - Qode`}</span>
            </div>
            {/* name="Email conversation" id="102:8819" type="INSTANCE" */}
            <QodeCustom1028531
              style={{
                display: "flex",
                width: "640px",
                padding: "20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                flex: "1 0 0",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-white, #fff)",
              }}
              {...{ property_1: "Default" }}
            />
            {/* name="Email composer" id="99:7254" type="INSTANCE" */}
            <QodeCustom996900
              style={{
                display: "flex",
                width: "640px",
                height: "163px",
                padding: "16px 20px",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
              {...{
                showRecepients: true,
                showSubject: true,
                property_1: "Variant2",
              }}
            />
          </div>
        </>
      )}
      {/* id="102:7877" */}
      {`${state}` === `3` && `${type}` === `Email` && (
        <>
          {/* name="State=3, Type=Email" id="102:7877" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "#FFF",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Connect/Header" id="102:7878" type="INSTANCE" */}
            <QodeCustom864907
              style={{
                display: "flex",
                height: "76px",
                padding: "var(--font-size-base, 14px) 20px",
                alignItems: "center",
                gap: "20px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{ property_1: "Header" }}
            />
            {/* name="Subject" id="233:24311" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "8px 0px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Senior Software Engineer opportunity - Qode`}</span>
            </div>
            {/* name="Email conversation" id="102:8871" type="INSTANCE" */}
            <QodeCustom1028531
              style={{
                display: "flex",
                width: "640px",
                padding: "20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                flex: "1 0 0",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-white, #fff)",
              }}
              {...{ _2: true, property_1: "Default" }}
            />
            {/* name="Email composer" id="102:7881" type="INSTANCE" */}
            <QodeCustom996900
              style={{
                display: "flex",
                width: "640px",
                height: "163px",
                padding: "16px 20px",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
              {...{
                showRecepients: true,
                showSubject: true,
                property_1: "Variant2",
              }}
            />
          </div>
        </>
      )}
      {/* id="102:8009" */}
      {`${state}` === `4` && `${type}` === `Email` && (
        <>
          {/* name="State=4, Type=Email" id="102:8009" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "#FFF",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Connect/Header" id="102:8010" type="INSTANCE" */}
            <QodeCustom864907
              style={{
                display: "flex",
                height: "76px",
                padding: "var(--font-size-base, 14px) 20px",
                alignItems: "center",
                gap: "20px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{ property_1: "Header" }}
            />
            {/* name="Subject" id="233:24511" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "8px 0px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Senior Software Engineer opportunity - Qode`}</span>
            </div>
            {/* name="Email conversation" id="102:8923" type="INSTANCE" */}
            <QodeCustom1028531
              style={{
                display: "flex",
                width: "640px",
                padding: "20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                flex: "1 0 0",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-white, #fff)",
              }}
              {...{ _2: true, property_1: "Default" }}
            />
            {/* name="Email composer" id="102:8030" type="INSTANCE" */}
            <QodeCustom996876
              style={{
                display: "flex",
                width: "640px",
                height: "375px",
                padding: "16px 20px",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
              {...{ showRecepients: true, property_1: "Default" }}
            />
          </div>
        </>
      )}
      {/* id="99:7487" */}
      {`${state}` === `5` && `${type}` === `Email` && (
        <>
          {/* name="State=5, Type=Email" id="99:7487" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "#FFF",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Connect/Header" id="99:7488" type="INSTANCE" */}
            <QodeCustom864907
              style={{
                display: "flex",
                height: "76px",
                padding: "var(--font-size-base, 14px) 20px",
                alignItems: "center",
                gap: "20px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{ property_1: "Header" }}
            />
            {/* name="Subject" id="233:24753" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "8px 0px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Senior Software Engineer opportunity - Qode`}</span>
            </div>
            {/* name="Email conversation" id="102:8975" type="INSTANCE" */}
            <QodeCustom1028531
              style={{
                display: "flex",
                width: "640px",
                padding: "20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                flex: "1 0 0",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-white, #fff)",
              }}
              {...{ _3: true, _2: true, property_1: "Default" }}
            />
            {/* name="Email composer" id="99:7518" type="INSTANCE" */}
            <QodeCustom996900
              style={{
                display: "flex",
                width: "640px",
                height: "163px",
                padding: "16px 20px",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
              {...{
                showRecepients: true,
                showSubject: true,
                property_1: "Variant2",
              }}
            />
          </div>
        </>
      )}
      {/* id="102:8228" */}
      {`${state}` === `6` && `${type}` === `Email` && (
        <>
          {/* name="State=6, Type=Email" id="102:8228" type="COMPONENT" */}
          <div
            style={{
              display: "flex",
              width: "640px",
              height: "800px",
              flexDirection: "column",
              alignItems: "center",
              flexShrink: "0",
              borderLeft:
                "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-40, #bfbfbf)",
              background: "#FFF",
              boxShadow:
                "0px 9px 28px 8px rgba(0, 0, 0, 0.05), 0px 6px 16px 0px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* name="Connect/Header" id="102:8229" type="INSTANCE" */}
            <QodeCustom864907
              style={{
                display: "flex",
                height: "76px",
                padding: "var(--font-size-base, 14px) 20px",
                alignItems: "center",
                gap: "20px",
                flexShrink: "0",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-30, #d5d5d5)",
                background: "var(--background-bg-white, #fff)",
              }}
              {...{ property_1: "Header" }}
            />
            {/* name="Subject" id="233:24967" type="FRAME" */}
            <div
              style={{
                display: "flex",
                padding: "8px 0px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
            >
              <span
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "1",
                  flex: "1 0 0",
                  overflow: "hidden",
                  color: "var(--text-text-neutral-50, #1d1d1d)",
                  textAlign: "center",
                  textOverflow: "ellipsis",
                  fontFamily: 'var(--family-family, "sf pro display")',
                  fontSize: "var(--size-small, 12px)",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight:
                    "var(--lineheight-lineheight-sm, 16px) /* 133.333% */",
                }}
              >{`Senior Software Engineer opportunity - Qode`}</span>
            </div>
            {/* name="Email conversation" id="102:9027" type="INSTANCE" */}
            <QodeCustom1028531
              style={{
                display: "flex",
                width: "640px",
                padding: "20px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "16px",
                flex: "1 0 0",
                borderBottom:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-white, #fff)",
              }}
              {...{ _2: true, _3: true, _4: true, property_1: "Default" }}
            />
            {/* name="Email composer" id="102:8258" type="INSTANCE" */}
            <QodeCustom996900
              style={{
                display: "flex",
                width: "640px",
                height: "163px",
                padding: "16px 20px",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "12px",
                flexShrink: "0",
                borderTop:
                  "var(--style-line-width-linewidth, 1px) solid var(--border-border-neutral-20, #e3e3e3)",
                background: "var(--neutral-gray-5, #f8f6f6)",
              }}
              {...{
                showRecepients: true,
                showSubject: true,
                property_1: "Variant2",
              }}
            />
          </div>
        </>
      )}
    </>
  )
}
